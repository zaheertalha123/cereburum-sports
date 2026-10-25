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

const rawGuides = [
  {
    id: 'cricket-arena',
    title: 'How to Build a Cricket Arena',
    category: 'sports-structure',
    image: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-01.webp',
    imageAlt: 'Cricket arena with steel poles and support pipes | Cereburum Sports',
    desc: 'Learn how to build a cricket arena using steel poles, support pipes, and protective netting. This guide covers planning, pole installation, frame support, net installation, and final safety checks.',
    images: [
      { 
        url: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-01.webp', 
        alt: 'Cricket arena steel poles and support frame | Cereburum Sports' 
      },
      { 
        url: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-02.webp', 
        alt: 'Cricket arena construction view | Cereburum Sports' 
      },
      { 
        type: 'video', 
        url: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-03.mp4', 
        poster: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-01.webp', 
        alt: 'Cricket arena construction video | Cereburum Sports' 
      },
      { 
        url: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-04.webp', 
        alt: 'Cricket arena boundary poles and lighting installation | Cereburum Sports'
      },
      { 
        url: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-05.webp', 
        alt: 'Cricket arena steel frame with floodlights at night | Cereburum Sports' 
      },
      { 
        type: 'video',
        url: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-06.mp4', 
        poster: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-01.webp', 
        alt: 'Cricket arena installation video | Cereburum Sports' 
      },
      { 
        type: 'video', 
        url: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-07.mp4', 
        poster: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-01.webp', 
        alt: 'Cricket arena construction walkthrough | Cereburum Sports' 
      },
      { 
        type: 'video', 
        url: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-08.mp4', 
        poster: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-01.webp', 
        alt: 'Cricket arena installation process | Cereburum Sports' 
      },
      { 
        url: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-09.webp', 
        alt: 'Cricket arena steel support pipes and diagonal bracing | Cereburum Sports' 
      },
      { 
        url: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-10.webp', 
        alt: 'Cricket arena roof netting installation using scaffolding | Cereburum Sports' 
      },
      { 
        type: 'video', 
        url: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-11.mp4', 
        poster: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-01.webp', 
        alt: 'Cricket arena construction video 11 | Cereburum Sports' 
      },
      { 
        type: 'video', 
        url: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-12.mp4', 
        poster: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-01.webp', 
        alt: 'Cricket arena installation video 12 | Cereburum Sports' 
      },
      { 
        type: 'video', 
        url: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-13.mp4', 
        poster: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-01.webp', 
        alt: 'Cricket arena construction video 13 | Cereburum Sports' 
      },
      { 
        type: 'video', 
        url: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-14.mp4', 
        poster: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-01.webp', 
        alt: 'Cricket arena installation video 14 | Cereburum Sports' 
      },
      { 
        type: 'video', 
        url: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-15.mp4', 
        poster: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-01.webp', 
        alt: 'Cricket arena construction video 15 | Cereburum Sports' 
      },
      { 
        type: 'video', 
        url: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-16.mp4', 
        poster: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-01.webp', 
        alt: 'Cricket arena installation video 16 | Cereburum Sports' 
      },
    ],
    features: {
      items: ['Steel Pole Structure', 'Strong Support Frame', 'Roof & Side Netting', 'Lighting System'],
    },
    applications: {
      items: ['Cricket Academies', 'Sports Clubs', 'Schools & Universities', 'Commercial Cricket Arenas'],
    },
    materials: {
      items: ['Steel Poles', 'Horizontal Support Pipes', 'Diagonal Support Pipes', 'Sports Netting', 'Ropes & Tying Thread', 'Floodlights', 'Anti-Rust Paint'],
      images: [
        { url: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-09.webp', alt: 'Steel poles and support pipes used in cricket arena construction | Cereburum Sports' },
        { url: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-10.webp', alt: 'Protective roof netting installed over a cricket arena | Cereburum Sports' },
      ],
    },
    installation: {
      steps: [
        'Measure the available area and decide the length, width, and height of the cricket arena. Mark the positions where the steel poles will be installed.',
        'Prepare the ground and install the steel poles at the marked positions. Make sure the poles are properly fixed and aligned.',
        'Connect the poles using horizontal support pipes. Add diagonal support pipes where required to make the structure stronger and more stable.',
        'Install the lighting system at suitable positions around the arena. Secure the lights and electrical wiring properly.',
        'Install the side netting and roof netting using suitable scaffolding and lifting equipment. Tie the netting securely to the support structure and adjust the tension without putting excessive pressure on the poles.',
        'Check the complete arena, including pole alignment, support pipes, netting connections, and lighting. Make sure everything is properly secured before using the arena.',
      ],
    },
    benefits: {
      items: ['Safe Practice Area', 'Prevents Balls from Escaping', 'Day & Night Practice', 'Strong & Durable Structure'],
    },
  },
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
