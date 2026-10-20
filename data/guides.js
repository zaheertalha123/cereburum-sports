import { mediaUrl } from '../lib/mediaUrl';

/**
 * Guide shape (omit any section that does not apply — the page hides it):
 * {
 *   id, title, category, image, imageAlt, desc,
 *   images: [{ url, alt, type?: 'image' | 'video', poster?: string }],
 *   features:      { items: string[], images?: [{ url, alt }] },
 *   applications:  { items: string[], images?: [{ url, alt }] },
 *   materials:     { items: string[], images?: [{ url, alt }] },
 *   installation:  { steps: string[], images?: [{ url, alt }] },
 *   benefits:      { items: string[], images?: [{ url, alt }] },
 * }
 */
const rawGuides = [
  {
    id: 'corner-door-installation',
    title: 'How to Install a Corner Door on Sports Netting Enclosures',
    category: 'Installation',
    image: '/images/guides/corner-door/gallery/corner-door-gallery-cover.webp',
    imageAlt: 'Corner Door cover - steel corner entrance door with sports netting | Cereburum Sports',
    desc: 'Step-by-step guide to fabricating and installing a heavy-duty corner entrance door for cricket cages and sports netting enclosures — tubular steel frame, hinges, protective coating, and arena netting so the cage stays continuous while people can walk in and out.',
    images: [
      {
        url: '/images/guides/corner-door/gallery/corner-door-gallery-cover.webp',
        alt: 'Corner Door cover view - steel corner entrance door laced into sports arena netting | Cereburum Sports',
      },
      {
        url: '/images/guides/corner-door/gallery/corner-door-gallery-01.webp',
        alt: 'Corner Door gallery 1 - corner door frame and netting installation | Cereburum Sports',
      },
      {
        url: '/images/guides/corner-door/gallery/corner-door-gallery-02.webp',
        alt: 'Corner Door gallery 2 - hinged steel corner door on a sports net enclosure | Cereburum Sports',
      },
      {
        url: '/images/guides/corner-door/gallery/corner-door-gallery-03.webp',
        alt: 'Corner Door gallery 3 - close view of the corner door and surrounding net | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/corner-door/gallery/corner-door-gallery-04.mp4',
        poster: '/images/guides/corner-door/gallery/corner-door-gallery-cover.webp',
        alt: 'Corner Door walkthrough video - corner entrance door on a sports netting enclosure | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/corner-door/gallery/corner-door-gallery-05.mp4',
        poster: '/images/guides/corner-door/gallery/corner-door-gallery-cover.webp',
        alt: 'Corner Door installation video - steel frame, hinges, and netting | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Tubular steel frame aligned with the corner netting structure',
        'Hinged door leaf with a central horizontal support brace',
        'Integrated arena netting laced around the frame so the enclosure stays closed',
        'Weather-resistant finish on all welded joints and piping',
      ],
    },
    applications: {
      items: [
        'Cricket cages and practice nets',
        'Indoor and outdoor sports arenas',
        'Training facilities and school grounds',
        'Rooftop and boundary net enclosures',
      ],
    },
    materials: {
      items: [
        'Hollow round steel pipes for the outer post and door leaf',
        'Heavy-duty barrel or pin hinges',
        'Rust-inhibiting primer and weather-resistant protective coat',
        'Durable arena netting with high-tensile twine or zip ties',
      ],
      images: [
        {
          url: '/images/guides/corner-door/materials/corner-door-materials-01.webp',
          alt: 'High-tensile white twine spools used to lace corner door netting | Cereburum Sports',
        },
        {
          url: '/images/guides/corner-door/materials/corner-door-materials-02.webp',
          alt: 'White netting twine rolls for tying sports net to a steel corner door frame | Cereburum Sports',
        },
      ],
    },
    installation: {
      steps: [
        'Measure the corner span and fabricate an outer support post frame aligned with the corner netting structure.',
        'Cut hollow round steel pipes to size and weld a rectangular door leaf frame with a central horizontal support brace.',
        'Weld heavy-duty barrel or pin hinges between the outer corner post and the door leaf, ensuring smooth swing clearance.',
        'Apply rust-inhibiting primer and a weather-resistant black protective coat across all welded joints and steel piping.',
        'Lace durable white arena netting tightly around the door frame borders and mid-brace using high-tensile twine or heavy-duty zip ties.',
      ],
    },
    benefits: {
      items: [
        'Easy, controlled access without cutting a hole in the net',
        'Durable steel construction built for daily facility use',
        'Enclosure stays continuous so balls stay inside the cage',
        'Can be fabricated on-site to match an existing corner span',
      ],
    },
  },
];

function mapImages(images) {
  return (images ?? []).map((image) => ({
    ...image,
    url: mediaUrl(image.url),
    ...(image.poster ? { poster: mediaUrl(image.poster) } : {}),
  }));
}

export function toGuideMedia(items) {
  return (items ?? []).map((item) => {
    const isVideo = item.type === 'video' || /\.(mp4|webm)(\?|$)/i.test(item.url || '');
    return {
      type: isVideo ? 'video' : 'image',
      url: item.url,
      alt: item.alt,
      ...(item.poster ? { poster: item.poster } : {}),
    };
  });
}

function mapSection(section) {
  if (!section) return undefined;
  return {
    ...section,
    images: mapImages(section.images),
  };
}

export const guides = rawGuides.map((guide) => ({
  ...guide,
  image: guide.image ? mediaUrl(guide.image) : undefined,
  images: mapImages(guide.images),
  features: mapSection(guide.features),
  applications: mapSection(guide.applications),
  materials: mapSection(guide.materials),
  installation: mapSection(guide.installation),
  benefits: mapSection(guide.benefits),
}));

export function getGuideById(id) {
  return guides.find((guide) => guide.id === id);
}

export function hasSectionContent(section) {
  if (!section) return false;
  const hasItems = Array.isArray(section.items) && section.items.length > 0;
  const hasSteps = Array.isArray(section.steps) && section.steps.length > 0;
  const hasImages = Array.isArray(section.images) && section.images.length > 0;
  const hasText = typeof section.text === 'string' && section.text.trim().length > 0;
  return hasItems || hasSteps || hasImages || hasText;
}

export function getGuideCover(guide) {
  return guide?.image || guide?.images?.[0]?.url || null;
}

export function getGuideCoverAlt(guide) {
  return (
    guide?.imageAlt ||
    guide?.images?.[0]?.alt ||
    `${guide?.title ?? 'Guide'} - Step by Step Sports Netting Installation Guide | Cereburum Sports`
  );
}

export function getGuideGallery(guide) {
  if (guide?.images?.length) return guide.images;
  if (guide?.image) {
    return [{ url: guide.image, alt: getGuideCoverAlt(guide) }];
  }
  return [];
}

export function getVisibleGuideSections(guide) {
  const sections = [];

  if (guide.title || guide.desc) {
    sections.push({ id: 'guide-overview', label: 'Overview' });
  }
  if (getGuideGallery(guide).length > 0) {
    sections.push({ id: 'guide-gallery', label: 'Gallery' });
  }
  if (hasSectionContent(guide.features)) {
    sections.push({ id: 'guide-features', label: 'Key Features' });
  }
  if (hasSectionContent(guide.applications)) {
    sections.push({ id: 'guide-applications', label: 'Applications' });
  }
  if (hasSectionContent(guide.materials)) {
    sections.push({ id: 'guide-materials', label: 'Materials' });
  }
  if (hasSectionContent(guide.installation)) {
    sections.push({ id: 'guide-installation', label: 'Installation' });
  }
  if (hasSectionContent(guide.benefits)) {
    sections.push({ id: 'guide-benefits', label: 'Benefits' });
  }

  return sections;
}

/** Categories derived from published guides only (no empty filters). */
export const guideCategories = [
  'All',
  ...[...new Set(guides.map((guide) => guide.category).filter(Boolean))],
];
