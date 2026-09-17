import os
from PIL import Image

def get_watermark_path():
    candidates = [
        'watermark.png',
        'logo.png',
        '../watermark.png',
        '../logo.png',
        os.path.join(os.path.dirname(__file__), 'watermark.png'),
        os.path.join(os.path.dirname(__file__), '..', 'logo.png')
    ]
    for path in candidates:
        if os.path.exists(path):
            return path
    raise FileNotFoundError("Could not find logo.png or watermark.png")

def add_watermark_to_image(image_path, watermark_src):
    try:
        with Image.open(image_path) as base_image:
            # Preserve format and mode requirements
            orig_mode = base_image.mode
            orig_format = base_image.format
            
            # Make watermark width 16% of base image width
            target_w = int(base_image.width * 0.16)
            if target_w < 1:
                target_w = 1
            
            aspect_ratio = watermark_src.height / watermark_src.width
            target_h = int(target_w * aspect_ratio)
            if target_h < 1:
                target_h = 1

            # Resize watermark preserving aspect ratio
            resample_filter = getattr(Image.Resampling, 'LANCZOS', getattr(Image, 'ANTIALIAS', 1))
            watermark = watermark_src.resize((target_w, target_h), resample_filter)

            # Top-right corner position with 35px padding
            margin = 35
            pos_x = base_image.width - watermark.width - margin
            pos_y = margin
            position = (pos_x, pos_y)

            # Convert base image to RGBA for transparent pasting
            base_rgba = base_image.convert('RGBA')
            watermark_rgba = watermark.convert('RGBA')

            # Paste watermark using itself as transparent mask
            base_rgba.paste(watermark_rgba, position, mask=watermark_rgba)

            # Save back to original file
            if image_path.lower().endswith(('.jpg', '.jpeg')) or orig_mode == 'RGB':
                final_image = base_rgba.convert('RGB')
                final_image.save(image_path, quality=95)
            else:
                base_rgba.save(image_path)

            print(f"Watermarked: {image_path} (Base: {base_image.width}x{base_image.height}, Watermark: {target_w}x{target_h})")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

def main():
    watermark_path = get_watermark_path()
    print(f"Using watermark from: {watermark_path}")
    watermark_raw = Image.open(watermark_path).convert('RGBA')
    
    # Crop empty transparent margin from watermark source for precise positioning
    bbox = watermark_raw.getbbox()
    if bbox:
        watermark_src = watermark_raw.crop(bbox)
    else:
        watermark_src = watermark_raw

    target_dirs = ['home', 'products', 'works']
    valid_extensions = ('.jpg', '.jpeg', '.png', '.webp', '.bmp', '.tiff')

    processed_count = 0
    for target_dir in target_dirs:
        if not os.path.exists(target_dir):
            print(f"Directory not found: {target_dir}")
            continue

        for root, _, files in os.walk(target_dir):
            for file in files:
                if file.lower().endswith(valid_extensions):
                    full_path = os.path.join(root, file)
                    add_watermark_to_image(full_path, watermark_src)
                    processed_count += 1

    print(f"\nSuccessfully watermarked {processed_count} images across {', '.join(target_dirs)}.")

if __name__ == '__main__':
    main()

