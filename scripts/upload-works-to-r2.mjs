import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const LOCAL_ROOT = path.join(ROOT, 'public', 'images', 'works');
const R2_PREFIX = 'images/works';

const UPLOAD_EXTENSIONS = new Set(['.webp', '.mp4']);

const MIME = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
};

function requireEnv(name) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (entry.isFile() && UPLOAD_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function main() {
  const bucket = requireEnv('CLOUDFLARE_S3_BUCKET');
  const endpoint = requireEnv('CLOUDFLARE_S3_API');
  const accessKeyId = requireEnv('CLOUDFLARE_R2_ACCESS_KEY_ID');
  const secretAccessKey =
    process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY?.trim() ||
    process.env.CLOUDFLARE_R2_ACCESS_KEY?.trim();

  if (!secretAccessKey) {
    throw new Error('Missing CLOUDFLARE_R2_SECRET_ACCESS_KEY (or CLOUDFLARE_R2_ACCESS_KEY)');
  }

  const client = new S3Client({
    region: 'auto',
    endpoint,
    credentials: { accessKeyId, secretAccessKey },
  });

  const localStat = await stat(LOCAL_ROOT).catch(() => null);
  if (!localStat?.isDirectory()) {
    throw new Error(`Works media folder not found: ${LOCAL_ROOT}`);
  }

  const files = await walk(LOCAL_ROOT);
  if (files.length === 0) {
    console.log('No works media files to upload.');
    return;
  }

  console.log(`Uploading ${files.length} file(s) to s3://${bucket}/${R2_PREFIX}/ ...`);

  let uploaded = 0;
  for (const filePath of files) {
    const relative = path.relative(LOCAL_ROOT, filePath).split(path.sep).join('/');
    const key = `${R2_PREFIX}/${relative}`;
    const ext = path.extname(filePath).toLowerCase();
    const body = await readFile(filePath);

    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: body,
        ContentType: MIME[ext] || 'application/octet-stream',
      }),
    );

    uploaded += 1;
    console.log(`  ✓ [${uploaded}/${files.length}] ${key}`);
  }

  const publicBase = process.env.NEXT_PUBLIC_MEDIA_URL?.replace(/\/$/, '');
  if (publicBase) {
    console.log(`\nExample URL: ${publicBase}/images/works/${path.relative(LOCAL_ROOT, files[0]).split(path.sep).join('/')}`);
  }

  console.log('\nDone.');
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
