import { mediaUrl } from '../lib/mediaUrl';

/**
 * Guide categories. `id` is the stable filter value used in URLs; `label` is
 * what visitors see. Keep the order below — it drives the filter pill order.
 */
export const guideCategoryDefs = [
  { id: 'sports-structure', label: 'Sports Structure' },
  { id: 'installation-and-techniques', label: 'Installation & Techniques' },
  { id: 'scaffolding-and-equipment', label: 'Scaffolding & Equipment' },
  { id: 'measurement-and-planning', label: 'Measurement & Planning' },
  { id: 'doors-and-access', label: 'Doors & Access' },
  { id: 'maintenance-and-issues', label: 'Maintenance & Issues' },
];

export function getGuideCategoryLabel(value) {
  if (!value) return '';
  const match = guideCategoryDefs.find(
    (category) => category.id === value || category.label === value,
  );
  return match ? match.label : value;
}

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
    category: 'doors-and-access',
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
        'Steel Frame',
        'Hinged Door',
        'Integrated Netting',
        'Weather Resistant',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Sports Arenas',
        'Training Facilities',
        'Rooftop Net Enclosures',
      ],
    },
    materials: {
      items: [
        'Hollow Steel Pipes',
        'Heavy-Duty Hinges',
        'Weather-Resistant Coating',
        'High-Tensile Netting',
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
        'Measure the corner area where the door will be installed. Prepare a strong steel support frame that fits properly with the existing netting structure.',
        'Cut the hollow steel pipes according to the required door size. Weld the pipes together to make a rectangular door frame and add a horizontal pipe in the middle for extra strength.',
        'Attach heavy-duty hinges to the corner support post and the door frame using welding. Check that the door opens and closes smoothly without touching the surrounding structure.',
        'Clean the steel frame and welded joints to remove rust and dirt. Apply an anti-rust primer followed by a weather-resistant black paint to protect the door from rain and moisture.', 
        'Cover the door frame with strong sports netting. Secure the net tightly around the outer frame and middle support pipe using durable tying twine or heavy-duty zip ties. Finally, check that the door moves freely and the netting is properly secured.',
      ],
    },
    benefits: {
      items: [
        'Easy Access',
        'Durable Construction',
        'Secure Enclosure',
        'Custom Fit',
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
  categoryLabel: getGuideCategoryLabel(guide.category),
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

/** Jump links for the long parts of a guide. Short lists stay on the page without their own filter. */
export function getVisibleGuideSections(guide) {
  const sections = [];

  if (getGuideGallery(guide).length > 0) {
    sections.push({ id: 'guide-gallery', label: 'Gallery' });
  }

  if (hasSectionContent(guide.installation)) {
    sections.push({ id: 'guide-build', label: 'Installation' });
  } else if (hasSectionContent(guide.materials)) {
    sections.push({ id: 'guide-build', label: 'Materials' });
  }

  return sections;
}

/** Every defined category is selectable, even before it has a guide. */
export const guideCategories = [
  { id: 'all', label: 'All' },
  ...guideCategoryDefs,
];
