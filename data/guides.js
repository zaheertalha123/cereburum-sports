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
    image: '/images/guides/01-sports-structure/cricket-arena/gallery/cricket-arena-01.webp',
    imageAlt: 'Cricket arena with steel poles and support pipes | Cereburum Sports',
    desc: 'Learn how to build a cricket arena using steel poles, support pipes, and protective netting. This guide covers planning, pole installation, frame support, net installation, and final safety checks.',
    images: [
      { 
        url: '/images/guides/01-sports-structure/cricket-arena/gallery/cricket-arena-01.webp', 
        alt: 'Cricket arena steel poles and support frame | Cereburum Sports' 
      },
      { 
        url: '/images/guides/01-sports-structure/cricket-arena/gallery/cricket-arena-02.webp', 
        alt: 'Cricket arena construction view | Cereburum Sports' 
      },
      { 
        type: 'video', 
        url: '/images/guides/01-sports-structure/cricket-arena/gallery/cricket-arena-03.mp4', 
        poster: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-01.webp', 
        alt: 'Cricket arena construction video | Cereburum Sports' 
      },
      { 
        url: '/images/guides/01-sports-structure/cricket-arena/gallery/cricket-arena-04.webp', 
        alt: 'Cricket arena boundary poles and lighting installation | Cereburum Sports'
      },
      { 
        url: '/images/guides/01-sports-structure/cricket-arena/gallery/cricket-arena-05.webp', 
        alt: 'Cricket arena steel frame with floodlights at night | Cereburum Sports' 
      },
      { 
        type: 'video',
        url: '/images/guides/01-sports-structure/cricket-arena/gallery/cricket-arena-06.mp4', 
        poster: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-01.webp', 
        alt: 'Cricket arena installation video | Cereburum Sports' 
      },
      { 
        type: 'video', 
        url: '/images/guides/01-sports-structure/cricket-arena/gallery/cricket-arena-07.mp4', 
        poster: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-01.webp', 
        alt: 'Cricket arena construction walkthrough | Cereburum Sports' 
      },
      { 
        type: 'video', 
        url: '/images/guides/01-sports-structure/cricket-arena/gallery/cricket-arena-08.mp4', 
        poster: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-01.webp', 
        alt: 'Cricket arena installation process | Cereburum Sports' 
      },
      { 
        url: '/images/guides/01-sports-structure/cricket-arena/gallery/cricket-arena-09.webp', 
        alt: 'Cricket arena steel support pipes and diagonal bracing | Cereburum Sports' 
      },
      { 
        url: '/images/guides/01-sports-structure/cricket-arena/gallery/cricket-arena-10.webp', 
        alt: 'Cricket arena roof netting installation using scaffolding | Cereburum Sports' 
      },
      { 
        type: 'video', 
        url: '/images/guides/01-sports-structure/cricket-arena/gallery/cricket-arena-11.mp4', 
        poster: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-01.webp', 
        alt: 'Cricket arena construction video 11 | Cereburum Sports' 
      },
      { 
        type: 'video', 
        url: '/images/guides/01-sports-structure/cricket-arena/gallery/cricket-arena-12.mp4', 
        poster: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-01.webp', 
        alt: 'Cricket arena installation video 12 | Cereburum Sports' 
      },
      { 
        type: 'video', 
        url: '/images/guides/01-sports-structure/cricket-arena/gallery/cricket-arena-13.mp4', 
        poster: '/images/guides/01-sports-structure/cricket-arena/cricket-arena-01.webp', 
        alt: 'Cricket arena construction video 13 | Cereburum Sports' 
      },
      { 
        type: 'video', 
        url: '/images/guides/01-sports-structure/cricket-arena/gallery/cricket-arena-14.mp4', 
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
        { 
          url: '/images/guides/01-sports-structure/cricket-arena/materials/cricket-arena-01.webp', 
          alt: 'Steel poles and support pipes used in cricket arena construction | Cereburum Sports' 
        },
        { 
          url: '/images/guides/01-sports-structure/cricket-arena/materials/cricket-arena-02.webp', 
          alt: 'irons hook wled with the stell pipes for hanging purposes | Cereburum Sports' 
        },
        { 
          url: '/images/guides/01-sports-structure/cricket-arena/materials/cricket-arena-03.webp', 
          alt: 'floodlights installed on steel poles for night practice | Cereburum Sports' 
        },
        { 
          url: '/images/guides/01-sports-structure/cricket-arena/materials/cricket-arena-04.webp', 
          alt: 'coated steel wires installed on poles to support roof nets | Cereburum Sports' 
        },
        { 
          url: '/images/guides/01-sports-structure/cricket-arena/materials/cricket-arena-05.webp', 
          alt: 'Anti-rust coating applied to steel poles for long term durability | Cereburum Sports' 
        },
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
    id: 'cricket-box',
    title: 'How to Build and Install a Cricket Box',
    category: 'sports-structure',
    image: '/images/guides/01-sports-structure/cricket-box/gallery/cricket-box-01.webp',
    imageAlt: 'Cricket box with steel poles and surrounding sports netting | Cereburum Sports',
    desc: 'Step-by-step guide to building a cricket box using steel poles and strong netting. Learn how to measure the area, install the structure, and secure the side and roof nets for safe cricket practice.',
    images: [
      {
        url: '/images/guides/01-sports-structure/cricket-box/gallery/cricket-box-01.webp',
        alt: 'Cricket box gallery 1 - cricket practice enclosure | Cereburum Sports',
      },
      {
        url: '/images/guides/01-sports-structure/cricket-box/gallery/cricket-box-02.webp',
        alt: 'Cricket box gallery 2 - steel pole structure | Cereburum Sports',
      },
      {
        url: '/images/guides/01-sports-structure/cricket-box/gallery/cricket-box-03.webp',
        alt: 'Cricket box gallery 3 - cricket net installation | Cereburum Sports',
      },
      {
        url: '/images/guides/01-sports-structure/cricket-box/gallery/cricket-box-04.webp',
        alt: 'Cricket box gallery 4 - side and roof netting | Cereburum Sports',
      },
      {
        url: '/images/guides/01-sports-structure/cricket-box/gallery/cricket-box-05.webp',
        alt: 'Cricket box gallery 5 - outdoor cricket practice enclosure | Cereburum Sports',
      },
      {
        url: '/images/guides/01-sports-structure/cricket-box/gallery/cricket-box-06.webp',
        alt: 'Cricket box gallery 6 - installed side netting | Cereburum Sports',
      },
      {
        url: '/images/guides/01-sports-structure/cricket-box/gallery/cricket-box-07.webp',
        alt: 'Cricket box gallery 7 - complete netted cricket box | Cereburum Sports',
      },
      {
        url: '/images/guides/01-sports-structure/cricket-box/gallery/cricket-box-08.webp',
        alt: 'Cricket box gallery 8 - cricket box structure and netting | Cereburum Sports',
      },
      {
        url: '/images/guides/01-sports-structure/cricket-box/gallery/cricket-box-09.webp',
        alt: 'Cricket box gallery 9 - cricket practice net enclosure | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/01-sports-structure/cricket-box/gallery/cricket-box-10.mp4',
        poster: '/images/guides/01-sports-structure/cricket-box/gallery/cricket-box-01.webp',
        alt: 'Cricket box installation video 10 | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/01-sports-structure/cricket-box/gallery/cricket-box-11.mp4',
        poster: '/images/guides/01-sports-structure/cricket-box/gallery/cricket-box-01.webp',
        alt: 'Cricket box installation video 11 | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/01-sports-structure/cricket-box/gallery/cricket-box-12.mp4',
        poster: '/images/guides/01-sports-structure/cricket-box/gallery/cricket-box-01.webp',
        alt: 'Cricket box installation video 12 | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Strong Steel Structure',
        'Side and Roof Netting',
        'Custom Sizes',
        'Outdoor Installation',
      ],
    },
    applications: {
      items: [
        'Cricket Practice',
        'Home Cricket Nets',
        'Cricket Academies',
        'Training Grounds',
      ],
    },
    materials: {
      items: [
        'Steel Poles',
        'High-Strength Netting',
        'Steel Wire Rope',
        'Wire Rope Clamps',
        'Net Tying Thread',
        'Anti-Rust Paint',
      ],
      images: [
        { 
          url: '/images/guides/01-sports-structure/cricket-box/materials/cricket-box-01.webp', 
          alt: 'Steel poles and support pipes used in cricket arena construction | Cereburum Sports' 
        },
        { 
          url: '/images/guides/01-sports-structure/cricket-box/materials/cricket-box-02.webp', 
          alt: 'Bamboos used to make the cricket box frame | Cereburum Sports' 
        },
        { 
          url: '/images/guides/01-sports-structure/cricket-box/materials/cricket-box-03.webp', 
          alt: 'irons hook wled with the stell pipes for hanging purposes | Cereburum Sports' 
        },
        { 
          url: '/images/guides/01-sports-structure/cricket-box/materials/cricket-box-04.webp', 
          alt: 'floodlights installed on steel poles for night practice | Cereburum Sports' 
        },
        { 
          url: '/images/guides/01-sports-structure/cricket-box/materials/cricket-box-05.webp', 
          alt: 'coated steel wires installed on poles to support roof nets | Cereburum Sports' 
        },
        { 
          url: '/images/guides/01-sports-structure/cricket-box/materials/cricket-box-06.webp', 
          alt: 'Anti-rust coating applied to steel poles for long term durability | Cereburum Sports' 
        },
      ],
    },
    installation: {
      steps: [
        'Measure the available area and decide the length, width, and height of the cricket box. Mark the positions where the steel poles will be installed.',
        'Prepare the steel poles according to the required measurements. Install the poles firmly in the ground and check that they are straight and properly aligned.',
        'Connect the poles using steel pipes or wire ropes where required. Make sure the structure is strong enough to support the netting.',
        'Install the roof netting and attach it securely to the top of the structure. Keep the net properly supported to prevent excessive sagging.',
        'Install the side netting around the cricket box. Join the net sections properly and secure them using strong tying thread or suitable fasteners.',
        'Check all corners, joints, and net connections. Make sure the netting is properly secured and the cricket box is ready for practice.',
      ],
    },
    benefits: {
      items: [
        'Safe Cricket Practice',
        'Prevents Ball Escape',
        'Space Efficient',
        'Custom Installation',
      ],
    },
  },  
  {
    id: 'football-goal',
    title: 'How to Build and Install a Football Goal',
    category: 'sports-structure',
    image: '/images/guides/01-sports-structure/football-goal/gallery/football-goal-01.webp',
    imageAlt: 'Steel football goal frame for sports grounds | Cereburum Sports',
    desc: 'Step-by-step guide to building a football goal using steel pipes and strong netting. Learn how to measure the height, width, upper depth, and lower depth, prepare the frame, and install the goal net.',
    images: [
      {
        url: '/images/guides/01-sports-structure/football-goal/gallery/football-goal-01.webp',
        alt: 'Football goal gallery 1 - steel football goal frame | Cereburum Sports',
      },
      {
        url: '/images/guides/01-sports-structure/football-goal/gallery/football-goal-02.webp',
        alt: 'Football goal gallery 2 - height, width, upper depth, and lower depth measurements | Cereburum Sports',
      },
      {
        url: '/images/guides/01-sports-structure/football-goal/gallery/football-goal-03.webp',
        alt: 'Football goal gallery 3 - football goal frame construction | Cereburum Sports',
      },
      {
        url: '/images/guides/01-sports-structure/football-goal/gallery/football-goal-04.webp',
        alt: 'Football goal gallery 4 - steel pipe frame and support structure | Cereburum Sports',
      },
      {
        url: '/images/guides/01-sports-structure/football-goal/gallery/football-goal-05.webp',
        alt: 'Football goal gallery 5 - football goal installation | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/01-sports-structure/football-goal/gallery/football-goal-06.mp4',
        poster: '/images/guides/01-sports-structure/football-goal/gallery/football-goal-01.webp',
        alt: 'Football goal gallery 6 - football goal construction video | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/01-sports-structure/football-goal/gallery/football-goal-07.mp4',
        poster: '/images/guides/01-sports-structure/football-goal/gallery/football-goal-01.webp',
        alt: 'Football goal gallery 7 - football goal installation video | Cereburum Sports',
      },
      {
        url: '/images/guides/01-sports-structure/football-goal/gallery/football-goal-08.webp',
        alt: 'Football goal gallery 8 - football goal frame details | Cereburum Sports',
      },
      {
        url: '/images/guides/01-sports-structure/football-goal/gallery/football-goal-09.webp',
        alt: 'Football goal gallery 9 - goal height, width, and depth measurement guide | Cereburum Sports',
      },
      {
        url: '/images/guides/01-sports-structure/football-goal/gallery/football-goal-10.webp',
        alt: 'Football goal gallery 10 - football goal structure | Cereburum Sports',
      },
      {
        url: '/images/guides/01-sports-structure/football-goal/gallery/football-goal-11.webp',
        alt: 'Football goal gallery 11 - welded steel football goal frame | Cereburum Sports',
      },
      {
        url: '/images/guides/01-sports-structure/football-goal/gallery/football-goal-12.webp',
        alt: 'Football goal gallery 12 - football goal frame installation details | Cereburum Sports',
      },
      {
        url: '/images/guides/01-sports-structure/football-goal/gallery/football-goal-13.webp',
        alt: 'Football goal gallery 13 - football goal structure and finishing | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/01-sports-structure/football-goal/gallery/football-goal-14.mp4',
        poster: '/images/guides/01-sports-structure/football-goal/gallery/football-goal-01.webp',
        alt: 'Football goal gallery 14 - football goal demonstration video | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Strong Steel Frame',
        'Custom Dimensions',
        'Sloped Rear Supports',
        'Weather Resistant',
      ],
    },
    applications: {
      items: [
        'Football Grounds',
        'Sports Academies',
        'School Playgrounds',
        'Training Facilities',
      ],
    },
    materials: {
      items: [
        'Hollow Steel Pipes',
        'Football Goal Netting',
        'Welding Rods',
        'Net Tying Thread',
        'Anti-Rust Paint',
      ],
      images: [
        { 
          url: '/images/guides/01-sports-structure/football-goal/materials/football-goal-01.webp', 
          alt: 'Steel poles and support pipes used in cricket arena construction | Cereburum Sports' 
        },
        { 
          url: '/images/guides/01-sports-structure/football-goal/materials/football-goal-02.webp', 
          alt: 'Anti-rust coating applied to steel poles for long term durability | Cereburum Sports' 
        },
        { 
          url: '/images/guides/01-sports-structure/football-goal/materials/football-goal-03.webp', 
          alt: 'welding rods used to weld the football goal frame | Cereburum Sports' 
        },
        { 
          url: '/images/guides/01-sports-structure/football-goal/materials/football-goal-04.webp', 
          alt: 'netting thread used to install the football goal net | Cereburum Sports' 
        },
      ],
    },
    installation: {
      steps: [
        'Measure the required width and height of the football goal. Also measure the upper depth and lower depth to decide how far the net will extend behind the goal.',
        'Cut the hollow steel pipes according to the measurements. Prepare two vertical posts and one horizontal crossbar for the front of the goal.',
        'Weld the front posts and crossbar together to make a rectangular goal opening. Check that the corners are properly aligned.',
        'Attach the upper and lower depth pipes behind the goal. Add sloped rear support pipes and weld all joints to complete the frame.',
        'Clean the steel pipes and welded joints. Apply anti-rust primer and weather-resistant paint to protect the frame from rust.',
        'Install the football goal net around the back and sides of the frame. Secure it properly using strong tying thread or suitable net fasteners.',
        'Check the frame, net connections, and overall stability. Secure the goal against tipping before allowing players to use it.',
      ],
    },
    benefits: {
      items: [
        'Durable Construction',
        'Custom Goal Sizes',
        'Easy Net Replacement',
        'Suitable for Outdoor Use',
      ],
    },
  },  
  {
    id: 'bamboos',
    title: 'Use of Bamboo Supports for Cricket Pitches and Rooftop Nets',
    category: 'installation-and-techniques',
    image: '/images/guides/bamboos/gallery/bamboos-01.webp',
    imageAlt: 'Bamboo poles supporting a cricket practice pitch and sports netting enclosure | Cereburum Sports',
    desc: 'Explore how bamboo poles are used to support cricket practice nets, home cricket pitches, and rooftop netting enclosures. Bamboo provides an affordable and practical alternative to permanent steel structures for suitable small-scale installations. This guide shows real examples of bamboo-supported netting, different enclosure sizes, and how bamboo poles, ropes, and netting work together to create a practice area.',
    images: [
      {
        url: '/images/guides/bamboos/gallery/bamboos-01.webp',
        alt: 'Bamboo-supported cricket practice pitch with protective sports netting | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos-02.webp',
        alt: 'Bamboo-supported cricket practice net measuring 42 ft in length and 20 ft in width with four marked bamboo positions | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos-03.webp',
        alt: 'Cricket practice net setup measuring 35 ft in length and 22 ft in width with bamboo support positions highlighted | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos-04.webp',
        alt: 'Completed cricket practice enclosure using bamboo poles to support side and roof netting | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/bamboos/gallery/bamboos-05.mp4',
        poster: '/images/guides/bamboos/gallery/bamboos-01.webp',
        alt: 'Video showing the use of bamboo poles for supporting cricket practice netting | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/bamboos/gallery/bamboos-06.mp4',
        poster: '/images/guides/bamboos/gallery/bamboos-01.webp',
        alt: 'Walkthrough of a bamboo-supported cricket practice net enclosure | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos-07.webp',
        alt: 'Bamboo pole arrangement used to support netting around a cricket practice area | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos08.webp',
        alt: 'Bamboo supports and rope connections used for cricket and rooftop netting | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos-09.webp',
        alt: 'Sports netting supported by bamboo poles around a cricket practice pitch | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos-10.webp',
        alt: 'Bamboo support arrangement for securing protective sports netting | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos-11.webp',
        alt: 'Bamboo poles and netting materials used for cricket practice enclosures | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos-12.webp',
        alt: 'Bamboo support connections used in sports netting installations | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos-13.webp',
        alt: 'Protective sports netting suitable for bamboo-supported cricket practice areas | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos-14.webp',
        alt: 'Bamboo-supported sports net enclosure for cricket practice and small spaces | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/bamboos/gallery/bamboos-15.mp4',
        poster: '/images/guides/bamboos/gallery/bamboos-01.webp',
        alt: 'Video reference showing bamboo supports and netting arrangements for cricket practice areas | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Bamboo Pole Supports',
        'Cricket Pitch Netting',
        'Rooftop Netting Support',
        'Custom Sizes',
        'Roof & Side Netting',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Pitches',
        'Home Cricket Nets',
        'Rooftop Practice Nets',
        'Backyard Cricket Areas',
        'Small Sports Enclosures',
      ],
    },
    materials: {
      items: [
        'Bamboo Poles',
        'Sports Netting',
        'Strong Ropes',
        'Tying Twine',
      ],
      images: [
        {
          url: '/images/guides/bamboos/materials/bamboos-01.webp',
          alt: 'Bamboo poles used to support cricket practice and rooftop netting | Cereburum Sports',
        },
        {
          url: '/images/guides/bamboos/materials/bamboos-02.webp',
          alt: 'Strong ropes used to support overhead netting between bamboo poles | Cereburum Sports',
        },
        {
          url: '/images/guides/bamboos/materials/bamboos-03.webp',
          alt: 'Tying twine used to connect sports netting with bamboo supports | Cereburum Sports',
        },
      ],
    },
    installation: {
      steps: [
        'Bamboo poles can be used as supports for cricket practice pitches, home cricket nets, and suitable rooftop netting setups. They provide a practical option where a permanent steel structure is not required.',
        'For cricket practice pitches, bamboo poles are positioned around the playing area to hold protective netting. The net helps prevent cricket balls from travelling outside the practice space.',
        'Bamboo supports can also be used for rooftop practice nets where the building structure, wind conditions, and available space allow a safely designed installation. The supports must be properly secured without damaging the roof.',
        'The size of a bamboo-supported enclosure depends on the available space. The reference images show two examples: one measuring 42 ft by 20 ft and another measuring 35 ft by 22 ft.',
        'Bamboo poles are positioned at suitable points around the enclosure. Their number, spacing, height, and thickness depend on the netting area and the loads the supports must carry.',
        'Strong ropes are connected between the bamboo poles to support the overhead netting. The sports net is then attached around the sides and roof to create a covered practice area.',
        'Bamboo-supported netting is useful for smaller practice spaces because it can be more affordable than a permanent steel structure. However, bamboo requires regular inspection for cracks, splitting, moisture damage, and weakening over time.',
        'For rooftop installations, a qualified professional should assess the roof, anchoring method, wind loads, and structural stability before installation. Bamboo supports should not be used where they cannot safely withstand the expected loads.',
        'The gallery images and videos show different bamboo support arrangements and completed netting setups, helping customers understand how bamboo can be used for cricket practice pitches and suitable rooftop enclosures.',
      ],
    },
    benefits: {
      items: [
        'Affordable Netting Support',
        'Suitable for Small Practice Areas',
        'Customizable Enclosure Sizes',
        'Lightweight Material',
        'Practical for Home Cricket Nets',
      ],
    },
  },  
  {
    id: 'net-extension-joint',
    title: 'Long-Lasting and Nearly Invisible Net Extension Joints',
    category: 'installation-and-techniques',
    image: '/images/guides/net-extension-joint/gallery/net-extension-joint-01.webp',
    imageAlt: 'Nearly invisible net extension joint connecting two sports net sections using matching joining thread | Cereburum Sports',
    desc: 'Discover how professional net extension joints connect two sports nets to create a larger net without an obvious joining line. When matching thread and proper stitching techniques are used, the joint blends naturally with the surrounding mesh, providing a strong, long-lasting connection. Explore real images and videos showing how these joints maintain the appearance and strength of cricket nets, football netting, and sports enclosures.',
    images: [
      {
        url: '/images/guides/net-extension-joint/gallery/net-extension-joint-01.webp',
        alt: 'Wooden netting needle and matching thread used to create a strong and nearly invisible extension joint | Cereburum Sports',
      },
      {
        url: '/images/guides/net-extension-joint/gallery/net-extension-joint-02.webp',
        alt: 'Close-up of two sports nets joined using matching thread to create a neat extension joint | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-extension-joint/gallery/net-extension-joint-03.mp4',
        poster: '/images/guides/net-extension-joint/gallery/net-extension-joint-01.webp',
        alt: 'Video demonstrating how a long-lasting net extension joint is created using matching thread and a netting needle | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-extension-joint/gallery/net-extension-joint-04.mp4',
        poster: '/images/guides/net-extension-joint/gallery/net-extension-joint-02.webp',
        alt: 'Video showing how matching net meshes are joined to make the extension joint less noticeable | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-extension-joint/gallery/net-extension-joint-05.mp4',
        poster: '/images/guides/net-extension-joint/gallery/net-extension-joint-01.webp',
        alt: 'Video reference showing a strong and neatly stitched net extension joint for sports netting | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Nearly Invisible Joint',
        'Long-Lasting Stitching',
        'Strong Mesh Connection',
        'Uniform Net Appearance',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Football Ground Netting',
        'Sports Arenas',
        'Large Netting Enclosures',
        'Net Extensions & Repairs',
      ],
    },
    materials: {
      items: [
        'Matching Joining Thread',
        'Wooden Netting Needle',
        'Sports Netting',
      ],
      images: [
        {
          url: '/images/guides/net-extension-joint/materials/net-extension-joint-01.webp',
          alt: 'Strong matching thread used to create durable and less visible net extension joints | Cereburum Sports',
        },
        {
          url: '/images/guides/net-extension-joint/materials/net-extension-joint-02.webp',
          alt: 'Wooden netting needle with joining thread used to connect sports nets neatly | Cereburum Sports',
        },
      ],
    },
    installation: {
      steps: [
        'Net extension joints are used when two or more net sections need to be connected to cover a larger area. Instead of leaving a visible gap or overlapping the nets, the edges are joined together using matching thread.',
        'A properly made extension joint is designed to blend with the surrounding netting. When the joining thread matches the net color and thickness, the connection becomes difficult to notice from a normal viewing distance.',
        'The edges of both nets are aligned so that their mesh patterns continue naturally across the joining line. This helps the finished net maintain a uniform appearance.',
        'A wooden netting needle is used to pass the joining thread through the matching meshes. Each connection is stitched carefully to create a continuous and secure joint.',
        'The joining thread is kept at a suitable tension. This prevents the meshes from becoming distorted and helps the joined sections maintain their original shape.',
        'These joints are designed for long-term use. When suitable UV-resistant thread, compatible netting materials, and proper stitching are used, the connection can remain strong through regular outdoor use.',
        'Unlike poorly joined nets, which may have noticeable overlaps, gaps, or uneven stitching, a professionally finished extension joint creates a cleaner and more consistent netting surface.',
        'The reference images and videos demonstrate how extension joints are made and how matching thread helps the joining line blend with the rest of the sports net.',
        'After joining, the complete connection is checked for loose stitches, missed meshes, and uneven tension. A properly finished joint helps extend the net without affecting its overall appearance.',
      ],
    },
    benefits: {
      items: [
        'Nearly Invisible Joining Line',
        'Long-Term Durability',
        'Clean and Uniform Appearance',
        'Strong Net Connection',
        'Cost-Effective Net Extension',
      ],
    },
  },  
  {
    id: 'net-packing',
    title: 'How We Fold, Label, and Pack Sports Nets',
    category: 'installation-and-techniques',
    image: '/images/guides/net-packing/gallery/net-packing-01.webp',
    imageAlt: 'Sports netting carefully folded into a compact bundle for packing | Cereburum Sports',
    desc: 'See how we carefully fold, label, and pack sports nets before delivery. Each net is arranged into a compact bundle, secured with strong rope, and labeled with its dimensions for easy identification. Our packing process helps prevent tangling, saves space, and makes handling and installation easier.',
    images: [
      {
        url: '/images/guides/net-packing/gallery/net-packing-01.webp',
        alt: 'White sports netting folded and arranged into a compact bundle before packing | Cereburum Sports',
      },
      {
        url: '/images/guides/net-packing/gallery/net-packing-02.webp',
        alt: 'Packed white sports net secured with blue rope and an identification label showing its size | Cereburum Sports',
      },
      {
        url: '/images/guides/net-packing/gallery/net-packing-03.webp',
        alt: 'Compact bundle of folded white sports netting tied securely with blue packing rope | Cereburum Sports',
      },
      {
        url: '/images/guides/net-packing/gallery/net-packing-04.webp',
        alt: 'Sports netting arranged and prepared for folding and final packing | Cereburum Sports',
      },
      {
        url: '/images/guides/net-packing/gallery/net-packing-05.webp',
        alt: 'Multiple sports net packets with identification labels showing their dimensions | Cereburum Sports',
      },
      {
        url: '/images/guides/net-packing/gallery/net-packing-06.webp',
        alt: 'Folded and securely packed sports net bundles prepared for storage and delivery | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-packing/gallery/net-packing-07.mp4',
        poster: '/images/guides/net-packing/gallery/net-packing-01.webp',
        alt: 'Video demonstration of how sports netting is folded and prepared for packing | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-packing/gallery/net-packing-08.mp4',
        poster: '/images/guides/net-packing/gallery/net-packing-02.webp',
        alt: 'Video showing the process of arranging and folding sports netting into manageable sections | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-packing/gallery/net-packing-09.mp4',
        poster: '/images/guides/net-packing/gallery/net-packing-03.webp',
        alt: 'Video demonstrating how folded sports nets are arranged into compact bundles | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-packing/gallery/net-packing-10.mp4',
        poster: '/images/guides/net-packing/gallery/net-packing-04.webp',
        alt: 'Video reference showing the folding technique used to prepare sports nets for packing | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-packing/gallery/net-packing-11.mp4',
        poster: '/images/guides/net-packing/gallery/net-packing-05.webp',
        alt: 'Video showing how sports net bundles are secured with packing rope | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-packing/gallery/net-packing-12.mp4',
        poster: '/images/guides/net-packing/gallery/net-packing-06.webp',
        alt: 'Video demonstrating the preparation of packed sports net bundles for transportation | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-packing/gallery/net-packing-13.mp4',
        poster: '/images/guides/net-packing/gallery/net-packing-01.webp',
        alt: 'Video showing the final folding, tying, and packing process for sports netting | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Careful Net Folding',
        'Compact Packing',
        'Individual Size Labels',
        'Secure Rope Tying',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Football Goal Nets',
        'Sports Arenas',
        'Custom Sports Netting',
        'Net Storage and Delivery',
      ],
    },
    materials: {
      items: [
        'Sports Netting',
        'Nylon Packing Rope',
        'Size Identification Labels',
        'Marker Pen',
      ],
      images: [
        {
          url: '/images/guides/net-packing/materials/net-packing-01.webp',
          alt: 'Strong nylon rope used to tie and secure folded sports net bundles | Cereburum Sports',
        },
        {
          url: '/images/guides/net-packing/materials/net-packing-02.webp',
          alt: 'Size identification label used to mark the dimensions of packed sports nets | Cereburum Sports',
        },
      ],
    },
    installation: {
      steps: [
        'Before packing, we spread out each prepared sports net and check that it is properly arranged without unnecessary twists or tangles.',
        'We carefully fold the net from one side to the other, keeping the mesh aligned. This helps maintain the net shape and makes it easier to open during installation.',
        'After folding, we arrange the net into a compact bundle. The loose edges are kept inside so the packet remains neat and easy to handle.',
        'We use strong nylon packing rope to tie each folded net securely. The rope keeps the bundle together during handling, storage, and transportation.',
        'We prepare an identification label for every net packet. The label includes the net dimensions, such as 105 × 35 ft, and its installation section where required.',
        'The identification label is attached to the outside of the packet so the net size can be checked without opening the bundle.',
        'Finally, we inspect each packed net to ensure it is properly folded, securely tied, and correctly labeled before arranging it for delivery.',
      ],
    },
    benefits: {
      items: [
        'Prevents Net Tangling',
        'Easy Size Identification',
        'Space-Saving Packing',
        'Convenient Transportation',
        'Faster Installation Preparation',
      ],
    },
  },  
  {
    id: 'net-stitching',
    title: 'How We Stitch Sports Net Borders for Strong and Secure Connections',
    category: 'installation-and-techniques',
    image: '/images/guides/net-stitching/gallery/net-stitching-01.webp',
    imageAlt: 'Sports netting stitched to a reinforced parachute border using strong matching thread | Cereburum Sports',
    desc: 'See how we professionally stitch sports net borders to create strong, secure, and neatly finished connections. We use reinforced parachute borders, durable stitching thread, and careful stitching techniques to join net sections and maintain a continuous border. Explore real images and videos showing our net border stitching process for cricket practice nets, football netting, and sports enclosures.',
    images: [
      {
        url: '/images/guides/net-stitching/gallery/net-stitching-01.webp',
        alt: 'Close-up of white sports netting securely stitched to a black reinforced parachute border | Cereburum Sports',
      },
      {
        url: '/images/guides/net-stitching/gallery/net-stitching-02.webp',
        alt: 'Two reinforced sports net borders stitched together to create a strong and continuous connection | Cereburum Sports',
      },
      {
        url: '/images/guides/net-stitching/gallery/net-stitching-03.webp',
        alt: 'Front view of joined sports net sections showing aligned mesh and a neatly stitched continuous upper border | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-stitching/gallery/net-stitching-04.mp4',
        poster: '/images/guides/net-stitching/gallery/net-stitching-01.webp',
        alt: 'Video demonstrating how we stitch reinforced borders onto sports netting | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-stitching/gallery/net-stitching-05.mp4',
        poster: '/images/guides/net-stitching/gallery/net-stitching-03.webp',
        alt: 'Video showing our process of joining sports net sections by stitching their reinforced borders together | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Reinforced Parachute Borders',
        'Strong Border Stitching',
        'Continuous Border Finish',
        'Secure Net Connections',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Football Netting',
        'Sports Arenas',
        'Large Net Enclosures',
        'Custom Sports Netting',
      ],
    },
    materials: {
      items: [
        'Sports Netting',
        'Reinforced Parachute Border',
        'Strong Parachute Thread',
        'Wooden Netting Needle',
      ],
      images: [
        {
          url: '/images/guides/net-stitching/materials/net-stitching-01.webp',
          alt: 'Reinforced parachute border stitched along the edge of sports netting | Cereburum Sports',
        },
        {
          url: '/images/guides/net-stitching/materials/net-stitching-02.webp',
          alt: 'Strong parachute thread used for stitching reinforced sports net borders | Cereburum Sports',
        },
        {
          url: '/images/guides/net-stitching/materials/net-stitching-03.webp',
          alt: 'Wooden netting needle used to stitch and join reinforced sports net borders | Cereburum Sports',
        },
      ],
    },
    installation: {
      steps: [
        'We stitch reinforced borders onto sports nets to provide strong edges and secure connections. These borders help maintain the shape of the net and provide suitable points for attaching or joining net sections.',
        'We use reinforced parachute borders because they provide additional support along the edges of sports netting. The border is carefully positioned to follow the net edge.',
        'Our team uses strong parachute thread to stitch the netting to the reinforced border. The stitching is arranged carefully to keep the border properly attached and prevent loose sections.',
        'When two sports net sections need to be connected, we align their reinforced borders and stitch them together to form a continuous joining line.',
        'A wooden netting needle is used to pass the joining thread through the required connection points. We maintain even stitching and suitable thread tension to keep the borders properly aligned.',
        'We make sure the connected borders remain straight and the surrounding net meshes are properly arranged. This helps create a neat appearance without unnecessary gaps or uneven sections.',
        'The reinforced border and strong stitching help distribute tension along the net edges, reducing the risk of individual connection points becoming loose during normal use.',
        'The gallery images and videos showcase our border stitching process, including how the parachute border is attached and how adjoining net sections are connected.',
        'After stitching, we inspect the completed border to check the thread connections, border alignment, and overall finish before preparing the net for installation.',
      ],
    },
    benefits: {
      items: [
        'Strong Reinforced Edges',
        'Long-Lasting Stitching',
        'Secure Net Connections',
        'Neat and Continuous Borders',
        'Better Net Shape and Alignment',
      ],
    },
  },  
  {
    id: 'pre-installation-setup',
    title: 'How We Prepare Sports Netting Before Installation',
    category: 'installation-and-techniques',
    image: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-01.webp',
    imageAlt: 'Sports netting installation site with steel support poles, overhead wires, and scaffolding prepared for net installation | Cereburum Sports',
    desc: 'See how we prepare sports nets before installation at cricket practice facilities, football grounds, and sports arenas. Our preparation process includes checking the supporting structure, verifying measurements, carefully unfolding netting, arranging reinforced borders, and preparing installation materials. Explore real images and videos showing how our team organizes large sports nets before lifting and securing them to the enclosure.',
    images: [
      {
        url: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-01.webp',
        alt: 'Steel sports net enclosure with overhead support wires and scaffolding ready for net installation | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-02.mp4',
        poster: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-01.webp',
        alt: 'Video showing how our team prepares the supporting structure and equipment before sports net installation | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-03.mp4',
        poster: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-01.webp',
        alt: 'Video demonstrating the preparation and arrangement of sports netting before installation | Cereburum Sports',
      },
      {
        url: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-04.webp',
        alt: 'Worker carefully spreading white sports netting on the ground before installation at a sports facility | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-05.mp4',
        poster: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-04.webp',
        alt: 'Video showing how we unfold and position large sports net sections before lifting | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-06.mp4',
        poster: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-04.webp',
        alt: 'Video demonstrating how our team handles and arranges sports netting on the ground before installation | Cereburum Sports',
      },
      {
        url: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-07.webp',
        alt: 'White sports netting with black reinforced borders unfolded and arranged on the ground for installation | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-08.mp4',
        poster: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-07.webp',
        alt: 'Video demonstrating the preparation of reinforced sports net borders before installation | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-09.mp4',
        poster: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-07.webp',
        alt: 'Video showing how we arrange netting sections and align their reinforced borders before installation | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-10.mp4',
        poster: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-01.webp',
        alt: 'Video showing the final preparation of sports netting and supporting equipment before installation | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Structure Inspection',
        'Measurement Verification',
        'Careful Net Unfolding',
        'Reinforced Border Alignment',
        'Organized Installation Preparation',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Football Net Enclosures',
        'Sports Arenas',
        'Rooftop Netting',
        'Large Sports Net Installations',
      ],
    },
    materials: {
      items: [
        'Sports Netting',
        'Reinforced Net Borders',
        'Nylon Support Ropes',
        'Parachute Stitching Thread',
        'Wooden Netting Needle',
        'Measuring Tape',
        'Cable Ties',
      ],
      images: [
        {
          url: '/images/guides/pre-installation-setup/materials/pre-installation-setup-01.webp',
          alt: 'Reinforced parachute border stitched along the edge of sports netting | Cereburum Sports',
        },
        {
          url: '/images/guides/pre-installation-setup/materials/pre-installation-setup-02.webp',
          alt: 'Strong nylon rope used to tie and secure sports netting sections during installation | Cereburum Sports',
        },
        {
          url: '/images/guides/pre-installation-setup/materials/pre-installation-setup-03.webp',
          alt: 'Parachute thread used for stitching and securing reinforced sports net borders | Cereburum Sports',
        },
        {
          url: '/images/guides/pre-installation-setup/materials/pre-installation-setup-04.webp',
          alt: 'Wooden netting needle used for joining and repairing sports netting sections | Cereburum Sports',
        },
        {
          url: '/images/guides/pre-installation-setup/materials/pre-installation-setup-05.webp',
          alt: 'Measuring tape used to verify sports net dimensions before installation | Cereburum Sports',
        },
        {
          url: '/images/guides/pre-installation-setup/materials/pre-installation-setup-06.webp',
          alt: 'Cable ties used to secure reinforced net borders to supporting poles | Cereburum Sports',
        },
      ],
    },
    installation: {
      steps: [
        'Before installing sports netting, our team checks the supporting structure, including steel poles, overhead support pipes, and wires. We make sure the structure is ready to support the netting.',
        'We measure the length, width, and height of the installation area and compare these dimensions with the prepared sports nets. This helps confirm that each net section matches its intended position.',
        'We select a suitable area near the enclosure where the nets can be unfolded and arranged. The ground is checked for sharp objects and other materials that could damage the netting.',
        'Our team carefully opens the packed net bundles and spreads the netting on the ground. We unfold each section gradually to prevent tangling and unnecessary twisting.',
        'We identify the reinforced borders and arrange the netting according to its installation direction. The upper, lower, and side borders are positioned correctly before lifting.',
        'We check the netting for tangled meshes, twisted borders, loose stitching, or other visible issues. Any necessary adjustments are completed while the net is still on the ground.',
        'For large enclosures, we arrange the net sections in the correct order. This helps our installation team identify which net belongs to each side or roof section.',
        'We prepare the nylon ropes, cable ties, joining thread, and other materials needed to secure the netting. Suitable scaffolding or access equipment is positioned for the installation work.',
        'The gallery images and videos showcase how our team spreads, handles, and organizes sports netting before installation, including the preparation of large net sections and reinforced borders.',
        'Before lifting the netting, we perform a final check of its dimensions, direction, border alignment, and overall condition. Once everything is properly arranged, the net is ready for installation.',
      ],
    },
    benefits: {
      items: [
        'Smooth Installation Process',
        'Reduced Net Tangling',
        'Correct Net Positioning',
        'Better Border Alignment',
        'Reduced Risk of Net Damage',
        'Organized Installation Work',
      ],
    },
  },  
  {
    id: 'rings',
    title: 'How Metal Rings Make Sports Nets Foldable and Adjustable',
    category: 'installation-and-techniques',
    image: '/images/guides/rings/gallery/rings-01.webp',
    imageAlt: 'Metal rings installed along reinforced sports net borders for adjustable and foldable netting | Cereburum Sports',
    desc: 'Discover how metal rings make sports nets easier to fold, adjust, open, and close. We install strong metal rings along reinforced parachute borders to create convenient attachment points for ropes, hooks, and clips. These rings allow suitable netting sections to slide, gather, or be repositioned when needed. Explore real images and videos showing how rings improve the flexibility and usability of cricket practice nets, football enclosures, and sports arenas.',
    images: [
      {
        url: '/images/guides/rings/gallery/rings-01.webp',
        alt: 'Green sports netting with metal rings fitted along a black reinforced border for adjustable installation | Cereburum Sports',
      },
      {
        url: '/images/guides/rings/gallery/rings-02.webp',
        alt: 'Close-up of a metal ring and spring clip used to attach and adjust sports netting | Cereburum Sports',
      },
      {
        url: '/images/guides/rings/gallery/rings-03.webp',
        alt: 'Metal rings arranged along a reinforced black net border to support flexible net positioning | Cereburum Sports',
      },
      {
        url: '/images/guides/rings/gallery/rings-04.webp',
        alt: 'Metal ring attached to green sports netting for convenient opening and closing | Cereburum Sports',
      },
      {
        url: '/images/guides/rings/gallery/rings-05.webp',
        alt: 'Close-up of a metal ring securely fitted into a reinforced sports net border | Cereburum Sports',
      },
      {
        url: '/images/guides/rings/gallery/rings-06.webp',
        alt: 'Ring placement along sports netting border for adjustable attachment and positioning | Cereburum Sports',
      },
      {
        url: '/images/guides/rings/gallery/rings-07.webp',
        alt: 'Sports net border fitted with metal rings for folding, adjustment, and easy removal | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/rings/gallery/rings-08.mp4',
        poster: '/images/guides/rings/gallery/rings-01.webp',
        alt: 'Video demonstrating metal rings on sports net borders and their use in adjustable netting installations | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Foldable Netting',
        'Adjustable Net Position',
        'Easy Opening and Closing',
        'Reinforced Ring Attachments',
        'Flexible Net Installation',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Football Net Enclosures',
        'Sports Arenas',
        'Rooftop Net Enclosures',
        'Movable Net Partitions',
      ],
    },
    materials: {
      items: [
        'Metal Rings',
        'Reinforced Parachute Border',
        'Ring Installation Tool',
        'Measuring Tape',
      ],
      images: [
        {
          url: '/images/guides/rings/materials/rings-01.webp',
          alt: 'Metal rings fitted into reinforced sports net borders for flexible attachment | Cereburum Sports',
        },
        {
          url: '/images/guides/rings/materials/rings-02.webp',
          alt: 'Reinforced parachute border stitched along sports netting for secure ring installation | Cereburum Sports',
        },
        {
          url: '/images/guides/rings/materials/rings-03.webp',
          alt: 'Ring installation tool with yellow and black handles used to secure metal rings into net borders | Cereburum Sports',
        },
      ],
    },
    installation: {
      steps: [
        'We install metal rings along reinforced sports net borders to make netting easier to attach, adjust, fold, and reposition. These rings provide convenient connection points without requiring the net mesh itself to be tied directly to the supporting structure.',
        'For foldable netting, rings can be arranged along a suitable support rope or cable. This allows the net to slide and gather toward one side, similar to a curtain, when the practice area needs to be opened.',
        'Metal rings also make sports nets adjustable. Depending on the installation design, the net can be repositioned or its attachment points changed without removing the entire netting structure.',
        'We use reinforced parachute borders to provide a strong base for installing the rings. The reinforced material helps support the attachment points and reduces direct stress on the net meshes.',
        'The rings are positioned at suitable intervals along the border. Their spacing depends on the net size, intended movement, and supporting arrangement.',
        'A ring installation tool is used to secure each metal ring into the reinforced border. We check that the rings are firmly attached and have smooth edges to avoid damaging the netting or connecting ropes.',
        'Once installed, the rings can be connected to suitable ropes, hooks, clips, or sliding supports. The correct attachment method depends on whether the net needs to remain fixed, fold to one side, or be adjusted occasionally.',
        'The gallery images and video showcase the metal rings, reinforced borders, and attachment arrangements used in our sports netting installations.',
        'Before use, we check the rings and connections to ensure they are secure and that any intended folding or sliding movement works smoothly without excessive pulling or damage to the net.',
      ],
    },
    benefits: {
      items: [
        'Easy Net Folding',
        'Adjustable Net Positioning',
        'Convenient Opening and Closing',
        'Quick Net Removal',
        'Flexible Use of Space',
        'Secure Attachment Points',
      ],
    },
  },  
  {
    id: 'roof-installation',
    title: 'How We Install Roof Netting for Cricket Nets and Sports Arenas',
    category: 'installation-and-techniques',
    image: '/images/guides/roof-installation/gallery/roof-installation-01.webp',
    imageAlt: 'Our installation team lifting white roof netting onto a sports enclosure using scaffolding and support ropes | Cereburum Sports',
    desc: 'See how we install roof netting for cricket practice cages, sports arenas, and outdoor net enclosures. Our installation process includes preparing the roof net, lifting it with support ropes, securing all four corners, and stitching the reinforced borders to the supporting structure. Explore real images and videos showing how our team installs overhead sports netting to provide secure coverage and a neat finish.',
    images: [
      {
        url: '/images/guides/roof-installation/gallery/roof-installation-01.webp',
        alt: 'White sports roof net being lifted and positioned using scaffolding during installation | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/roof-installation/gallery/roof-installation-02.mp4',
        poster: '/images/guides/roof-installation/gallery/roof-installation-01.webp',
        alt: 'Video showing how our team lifts roof netting onto a sports enclosure | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/roof-installation/gallery/roof-installation-03.mp4',
        poster: '/images/guides/roof-installation/gallery/roof-installation-01.webp',
        alt: 'Video demonstrating the positioning of overhead sports netting during roof installation | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/roof-installation/gallery/roof-installation-04.mp4',
        poster: '/images/guides/roof-installation/gallery/roof-installation-01.webp',
        alt: 'Video showing how roof netting is secured to the supporting sports enclosure structure | Cereburum Sports',
      },
      {
        url: '/images/guides/roof-installation/gallery/roof-installation-05.webp',
        alt: 'White roof netting spread across the overhead support structure of a cricket practice enclosure | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/roof-installation/gallery/roof-installation-06.mp4',
        poster: '/images/guides/roof-installation/gallery/roof-installation-05.webp',
        alt: 'Video demonstrating how our team attaches reinforced roof net borders to the supporting structure | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/roof-installation/gallery/roof-installation-07.mp4',
        poster: '/images/guides/roof-installation/gallery/roof-installation-05.webp',
        alt: 'Video showing roof net border stitching along supporting poles and wires | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/roof-installation/gallery/roof-installation-08.mp4',
        poster: '/images/guides/roof-installation/gallery/roof-installation-05.webp',
        alt: 'Video demonstrating how we secure the reinforced borders of overhead cricket netting | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/roof-installation/gallery/roof-installation-09.mp4',
        poster: '/images/guides/roof-installation/gallery/roof-installation-05.webp',
        alt: 'Video showing the adjustment and alignment of roof netting across a sports arena | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/roof-installation/gallery/roof-installation-10.mp4',
        poster: '/images/guides/roof-installation/gallery/roof-installation-05.webp',
        alt: 'Video demonstrating the stitching and attachment of sports roof net borders | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/roof-installation/gallery/roof-installation-11.mp4',
        poster: '/images/guides/roof-installation/gallery/roof-installation-05.webp',
        alt: 'Video showing the final roof net installation and securing of reinforced borders | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Four-Corner Roof Support',
        'Strong Rope Connections',
        'Reinforced Border Stitching',
        'Complete Overhead Coverage',
        'Proper Net Alignment',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Football Net Enclosures',
        'Sports Arenas',
        'Rooftop Net Enclosures',
        'Outdoor Training Facilities',
      ],
    },
    materials: {
      items: [
        'Sports Roof Netting',
        'Strong Nylon Ropes',
        'Cable Ties',
        'Parachute Stitching Thread',
        'Wooden Netting Needle',
        'Scaffolding',
      ],
      images: [
        {
          url: '/images/guides/roof-installation/materials/roof-installation-01.webp',
          alt: 'Strong nylon rope used to lift and secure roof netting to the supporting structure | Cereburum Sports',
        },
        {
          url: '/images/guides/roof-installation/materials/roof-installation-02.webp',
          alt: 'Cable ties used to attach reinforced roof net borders to supporting poles | Cereburum Sports',
        },
        {
          url: '/images/guides/roof-installation/materials/roof-installation-03.webp',
          alt: 'Strong parachute thread used to stitch roof net borders to supporting connections | Cereburum Sports',
        },
        {
          url: '/images/guides/roof-installation/materials/roof-installation-04.webp',
          alt: 'Wooden netting needle used for stitching and securing sports roof netting | Cereburum Sports',
        },
        {
          url: '/images/guides/roof-installation/materials/roof-installation-05.webp',
          alt: 'Scaffolding used by our installation team to access and secure overhead sports netting | Cereburum Sports',
        },
      ],
    },
    installation: {
      steps: [
        'Before installing the roof net, our team checks the supporting poles, overhead wires, and roof structure. We confirm that the structure is ready and that suitable scaffolding and safety equipment are available.',
        'We spread the roof net on the ground and identify its four corners. The net dimensions are checked against the roof area, and the reinforced borders are arranged in the correct direction.',
        'We attach strong nylon ropes to the four corners of the roof net. These ropes help our team lift and position the net over the supporting structure in a controlled manner.',
        'Our installation team carefully raises the roof net using the prepared ropes and suitable access equipment. The net is lifted gradually to prevent unnecessary twisting, tangling, or damage.',
        'Once the net reaches the required height, we secure its four corners to the corresponding support points. This helps hold the roof net in position before attaching the remaining borders.',
        'After securing the corners, we spread and adjust the net across the roof area. We check that the netting covers the required space and that its reinforced borders follow the supporting poles or wires.',
        'We begin securing the reinforced border from one side of the roof. Using strong parachute thread and a wooden netting needle, we stitch the border to suitable supporting connections according to the structure design.',
        'We continue attaching the borders along the remaining sides. Our team maintains suitable net tension and checks the alignment to avoid excessive stretching, uneven edges, or unnecessary sagging.',
        'The gallery images and videos showcase our roof net installation process, including lifting the net, positioning it across the structure, and securing the reinforced borders.',
        'After completing the installation, we inspect the four corner connections, support ropes, stitched borders, and overall roof coverage. We make any necessary adjustments to ensure the net is properly positioned and securely attached.',
      ],
    },
    benefits: {
      items: [
        'Complete Overhead Protection',
        'Secure Four-Corner Attachment',
        'Strong Border Connections',
        'Even Roof Net Coverage',
        'Neat Installation Finish',
        'Custom Fit for Sports Enclosures',
      ],
    },
  }, 
  {
    id: 'rope-in-border',
    title: 'How Border Ropes Keep Sports Nets in Shape During Installation',
    category: 'installation-and-techniques',
    image: '/images/guides/rope-in-border/gallery/rope-in-border-01.webp',
    imageAlt: 'Reinforced sports net border with rope that helps maintain net shape during installation | Cereburum Sports',
    desc: 'Learn how ropes inside the borders of sports nets help maintain their shape during installation. Border ropes provide extra strength, distribute tension evenly, prevent uneven stretching, and make it easier to align and secure cricket nets, football nets, and sports arena enclosures.',
    images: [
      {
        url: '/images/guides/rope-in-border/gallery/rope-in-border-01.webp',
        alt: 'White sports net with reinforced border rope for maintaining net shape | Cereburum Sports',
      },
      {
        url: '/images/guides/rope-in-border/gallery/rope-in-border-02.webp',
        alt: 'Close-up of rope inside a stitched sports net border for additional support | Cereburum Sports',
      },
      {
        url: '/images/guides/rope-in-border/gallery/rope-in-border-03.webp',
        alt: 'Reinforced sports net border designed to maintain shape during installation | Cereburum Sports',
      },
      {
        url: '/images/guides/rope-in-border/gallery/rope-in-border-04.webp',
        alt: 'Border rope reinforcement supporting the edges of sports netting | Cereburum Sports',
      },
      {
        url: '/images/guides/rope-in-border/gallery/rope-in-border-05.webp',
        alt: 'Sports net corner with reinforced border and rope for maintaining proper alignment | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/rope-in-border/gallery/rope-in-border-06.mp4',
        poster: '/images/guides/rope-in-border/gallery/rope-in-border-01.webp',
        alt: 'Demonstration of how border ropes support sports netting during installation | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/rope-in-border/gallery/rope-in-border-07.mp4',
        poster: '/images/guides/rope-in-border/gallery/rope-in-border-02.webp',
        alt: 'How reinforced border ropes help keep sports nets properly aligned | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Shape Retention',
        'Even Tension Distribution',
        'Reinforced Borders',
        'Better Net Alignment',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Football Goal Nets',
        'Sports Arenas',
        'Roof and Side Netting',
      ],
    },
    materials: {
      items: [
        'Sports Netting',
        'Strong Border Rope',
        'Reinforced Net Border',
      ],
      images: [
        { 
          url: '/images/guides/rope-in-border/materials/rope-in-border-01.webp', 
          alt: 'Reinforced sports net border designed to maintain shape during installation | Cereburum Sports' 
        },
        { 
          url: '/images/guides/rope-in-border/materials/rope-in-border-02.webp', 
          alt: 'Strong border rope used to maintain net shape during installation | Cereburum Sports' 
        },
      ],
    },
    installation: {
      steps: [
        'Before installation, check that strong ropes are properly positioned inside the stitched borders of the sports net. These ropes provide support and help the net maintain its original shape.',
        'Spread the net on the ground and identify its corners and borders. The border ropes help keep the edges straight and make it easier to identify the correct net dimensions.',
        'Start positioning the net by holding or securing its corners according to the installation structure. The ropes inside the borders help maintain the net shape while it is being lifted or stretched.',
        'While installing the net, apply tension gradually along the reinforced borders. The ropes help distribute the pulling force across the edges instead of putting excessive pressure on individual net threads.',
        'Continue aligning and securing the borders with the supporting poles or wires. Adjust the tension evenly so the net remains properly shaped without unnecessary stretching or sagging.',
        'After installation, inspect all sides and corners to make sure the net is properly aligned. Check that the border ropes are supporting the edges and the net has maintained its intended shape.',
      ],
    },
    benefits: {
      items: [
        'Maintains Net Shape',
        'Prevents Uneven Stretching',
        'Easier Net Installation',
        'Improved Edge Strength',
      ],
    },
  },  
  {
    id: 'straight-net-joint',
    title: 'Why Straight Net Joints Are Weak in Sports Netting',
    category: 'installation-and-techniques',
    image: '/images/guides/straight-net-joint/gallery/straight-net-joint-01.webp',
    imageAlt: 'Straight net joint highlighted as a weak connection in a sports netting enclosure | Cereburum Sports',
    desc: 'Learn why straight net joints can create weak points in cricket nets, football nets, and sports enclosures. This guide explains how poorly connected net sections can separate under tension, affect net strength, and increase the risk of damage during regular use.',
    images: [
      {
        url: '/images/guides/straight-net-joint/gallery/straight-net-joint-01.webp',
        alt: 'Straight joint between two sections of sports netting | Cereburum Sports',
      },
      {
        url: '/images/guides/straight-net-joint/gallery/straight-net-joint-02.webp',
        alt: 'Highlighted straight net joint showing a potentially weak connection in an installed sports arena net | Cereburum Sports',
      },
      {
        url: '/images/guides/straight-net-joint/gallery/straight-net-joint-03.webp',
        alt: 'Example of a straight net joint in sports netting that may become weak under tension | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/straight-net-joint/gallery/straight-net-joint-04.mp4',
        poster: '/images/guides/straight-net-joint/gallery/straight-net-joint-01.webp',
        alt: 'Video demonstrating straight net joints and their potential weaknesses in sports netting | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Straight Joint Identification',
        'Weak Connection Points',
        'Tension Concentration',
        'Joint Strength Awareness',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Football Netting',
        'Sports Arenas',
        'Roof and Side Netting',
      ],
    },
    materials: {
      items: [
        'Sports Netting Sections',
        'Net Stitching Twine',
        'Wooden Netting Needle',
      ],
      images: [
        { 
          url: '/images/guides/straight-net-joint/materials/straight-net-joint-01.webp', 
          alt: 'Thread used for straight net joints | Cereburum Sports' 
        },
        { 
          url: '/images/guides/straight-net-joint/materials/straight-net-joint-02.webp', 
          alt: 'Wooden netting needle used to join the nets | Cereburum Sports' 
        },
      ],
    },
    installation: {
      steps: [
        'Identify the areas where two sections of sports netting are joined together. A straight net joint forms a continuous connection line between the two net sections.',
        'Check how the net sections are connected along the straight joint. If the stitching is weak or uneven, the connection may not support the tension applied during installation.',
        'When the net is stretched and secured to the supporting structure, pulling forces can place additional stress on the straight joint. This may cause the stitching to loosen or the connected sections to separate.',
        'During regular use, repeated ball impacts and movement of the net can put further pressure on weak joints. Over time, this may increase the chances of tearing or damage along the connection.',
        'Avoid relying on poorly stitched straight joints in areas that experience high tension. Use a suitable joining method with strong stitching and proper reinforcement where required.',
        'After installation, inspect all net joints carefully. Make sure the connected sections are secure, the stitching is not loose, and there are no visible gaps or signs of separation.',
      ],
    },
    benefits: {
      items: [
        'Identifies Weak Joints',
        'Prevents Net Separation',
        'Improves Installation Quality',
        'Reduces Net Damage',
      ],
    },
  },  
  {
    id: 'aluminium-ladder',
    title: 'Uses and Benefits of Aluminium Ladders in Sports Net Installation',
    category: 'scaffolding-and-equipment',
    image: '/images/guides/aluminium-ladder/gallery/aluminium-ladder-01.webp',
    imageAlt: 'Aluminium ladder used for accessing elevated areas during sports netting installation | Cereburum Sports',
    desc: 'Learn when and why aluminium ladders are used during cricket net and sports arena installation. These lightweight, portable ladders help workers reach elevated areas for attaching net borders, securing ropes, adjusting netting, and performing maintenance on sports enclosures.',
    images: [
      {
        url: '/images/guides/aluminium-ladder/gallery/aluminium-ladder-01.webp',
        alt: 'Aluminium ladder used during sports netting installation | Cereburum Sports',
      },
      {
        url: '/images/guides/aluminium-ladder/gallery/aluminium-ladder-02.webp',
        alt: 'Portable aluminium ladder for accessing elevated sports netting structures | Cereburum Sports',
      },
      {
        url: '/images/guides/aluminium-ladder/gallery/aluminium-ladder-03.webp',
        alt: 'Aluminium ladder equipment used for sports arena net installation and maintenance | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/aluminium-ladder/gallery/aluminium-ladder-04.mp4',
        poster: '/images/guides/aluminium-ladder/gallery/aluminium-ladder-01.webp',
        alt: 'Video showing aluminium ladder use during sports netting installation | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Lightweight Structure',
        'Easy to Move',
        'Corrosion Resistant',
        'Quick Setup',
      ],
    },
    applications: {
      items: [
        'Side Net Installation',
        'Border Attachment',
        'Rope Adjustments',
        'Net Maintenance',
      ],
    },
    materials: {
      items: [],
      images: [],
    },
    installation: {
      steps: [
        'Aluminium ladders are commonly used when workers need to reach elevated sections of sports netting structures. They are useful for smaller installation tasks where a suitable ladder can provide safe access without requiring scaffolding.',
        'During side net installation, workers can use an aluminium ladder to reach upper poles or support wires. This allows them to attach the net border and secure it to the supporting structure.',
        'Ladders are also helpful when adjusting ropes, tightening loose connections, or checking the alignment of installed netting at elevated positions.',
        'Because aluminium ladders are lightweight, workers can move them between different positions around the sports enclosure. This makes them convenient for tasks that require access to several locations.',
        'For maintenance work, ladders provide access to damaged net sections, loose stitching, and border connections that need inspection or repair.',
        'Before using a ladder, place it on firm, level ground and secure it according to the manufacturer instructions. Maintain three points of contact while climbing and avoid overreaching. For high roof installations or tasks requiring both hands for extended periods, use suitable scaffolding or an elevated work platform instead.',
      ],
    },
    benefits: {
      items: [
        'Easy Height Access',
        'Portable Equipment',
        'Faster Repositioning',
        'Convenient Maintenance',
      ],
    },
  },  
  {
    id: 'custom-scaffolding',
    title: 'Custom-Made Scaffolding for Sports Netting and Ground Maintenance',
    category: 'scaffolding-and-equipment',
    image: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-01.webp',
    imageAlt: 'Custom-made mobile scaffolding designed for sports ground netting and lighting maintenance | Cereburum Sports',
    desc: 'Learn how custom-made scaffolding is used inside cricket grounds and sports arenas for regular maintenance. These specially designed structures provide access to elevated nets, lights, and support wires. Equipped with wheels for easy movement, they can remain inside the sports enclosure for future repairs and adjustments.',
    images: [
      {
        url: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-01.webp',
        alt: 'Custom-made scaffolding structure used inside a sports netting enclosure | Cereburum Sports',
      },
      {
        url: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-02.webp',
        alt: 'Custom scaffolding designed for accessing elevated sports netting | Cereburum Sports',
      },
      {
        url: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-03.webp',
        alt: 'Mobile custom scaffolding for sports ground maintenance and net repairs | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-04.mp4',
        poster: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-01.webp',
        alt: 'Custom scaffolding demonstration for sports arena maintenance | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-05.mp4',
        poster: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-01.webp',
        alt: 'Custom-made scaffolding used for elevated netting access | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-06.mp4',
        poster: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-01.webp',
        alt: 'Mobile scaffolding equipment for sports ground maintenance | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-07.mp4',
        poster: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-01.webp',
        alt: 'Custom scaffolding structure for sports net installation and repair | Cereburum Sports',
      },
      {
        url: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-08.webp',
        alt: 'Custom-made scaffolding for reaching elevated areas of a sports enclosure | Cereburum Sports',
      },
      {
        url: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-09.webp',
        alt: 'Custom scaffolding designed for netting and lighting maintenance | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-10.mp4',
        poster: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-09.webp',
        alt: 'Custom scaffolding used for maintenance inside a sports arena | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-11.mp4',
        poster: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-09.webp',
        alt: 'Custom mobile scaffolding for accessing sports netting | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-12.mp4',
        poster: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-09.webp',
        alt: 'Custom scaffolding equipment used for sports ground repairs | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-13.mp4',
        poster: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-09.webp',
        alt: 'Custom-made scaffolding for elevated maintenance work | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-14.mp4',
        poster: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-09.webp',
        alt: 'Mobile scaffolding demonstration for sports netting maintenance | Cereburum Sports',
      },
      {
        url: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-15.webp',
        alt: 'Custom scaffolding structure for sports arena maintenance | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-16.mp4',
        poster: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-15.webp',
        alt: 'Custom scaffolding used for repairing sports netting | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-17.mp4',
        poster: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-15.webp',
        alt: 'Mobile custom scaffolding for net and lighting maintenance | Cereburum Sports',
      },
      {
        url: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-18.webp',
        alt: 'Custom-made mobile scaffolding designed for sports ground access | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-19.mp4',
        poster: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-18.webp',
        alt: 'Custom scaffolding used for elevated sports enclosure maintenance | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-20.mp4',
        poster: '/images/guides/custom-scaffolding/gallery/custom-scaffolding-18.webp',
        alt: 'Custom mobile scaffolding for regular sports arena maintenance | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Custom-Built Structure',
        'Wheels for Easy Movement',
        'Suitable for Ground Maintenance',
        'Reusable for Future Repairs',
      ],
    },
    applications: {
      items: [
        'Roof Net Repairs',
        'Lighting Maintenance',
        'Side Net Adjustments',
        'Sports Ground Maintenance',
      ],
    },
    materials: {
      items: [],
      images: [],
    },
    installation: {
      steps: [
        'Custom-made scaffolding is designed according to the height, dimensions, and maintenance requirements of a sports ground. It is especially useful for enclosed cricket grounds and sports arenas where elevated areas need regular access.',
        'The scaffolding is constructed with a strong supporting frame and a suitable working platform. Its dimensions are selected to provide access to roof netting, lights, and other elevated components inside the enclosure.',
        'Wheels are attached to the bottom of the scaffolding to make it easier to move between different areas of the ground. Suitable wheel locks and stabilizers are required to keep the structure secure while workers are using it.',
        'During maintenance, the scaffolding can be moved to the required location to access damaged net sections, loose borders, support ropes, or lighting fixtures. It must be positioned on a firm, level surface before use.',
        'Unlike temporary scaffolding that is removed after installation, custom-made scaffolding can be kept inside the sports enclosure for future maintenance. This allows workers to access elevated areas whenever repairs or adjustments are needed.',
        'Before each use, inspect the frame, wheels, working platform, and safety components. Never move the scaffolding while workers are on it, and use the required guardrails and fall protection. Store it securely away from the playing area when it is not in use.',
      ],
    },
    benefits: {
      items: [
        'Easy Movement Inside Ground',
        'Convenient Future Maintenance',
        'Access to Nets and Lights',
        'Reusable Equipment',
      ],
    },
  },  
  {
    id: 'fix-scaffolding',
    title: 'Fixed Scaffolding for Cricket Boxes and Sports Net Installation',
    category: 'scaffolding-and-equipment',
    image: '/images/guides/fix-scaffolding/gallery/fix-scaffolding-01.webp',
    imageAlt: 'Heavy-duty fixed steel scaffolding for cricket box and sports netting installation | Cereburum Sports',
    desc: 'Learn how fixed scaffolding is used for installing and maintaining nets in small to medium-sized sports structures and cricket practice boxes. These heavy steel structures provide elevated working access but do not have wheels, making them difficult to reposition compared to mobile scaffolding.',
    images: [
      {
        url: '/images/guides/fix-scaffolding/gallery/fix-scaffolding-01.webp',
        alt: 'Fixed steel scaffolding structure used for cricket practice net installation | Cereburum Sports',
      },
      {
        url: '/images/guides/fix-scaffolding/gallery/fix-scaffolding-02.webp',
        alt: 'Heavy-duty fixed scaffolding for accessing elevated sports netting | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/fix-scaffolding/gallery/fix-scaffolding-03.mp4',
        poster: '/images/guides/fix-scaffolding/gallery/fix-scaffolding-01.webp',
        alt: 'Fixed scaffolding used for sports netting installation and maintenance | Cereburum Sports',
      },
      {
        url: '/images/guides/fix-scaffolding/gallery/fix-scaffolding-04.webp',
        alt: 'Steel fixed scaffolding for small and medium-sized sports structures | Cereburum Sports',
      },
      {
        url: '/images/guides/fix-scaffolding/gallery/fix-scaffolding-05.webp',
        alt: 'Tall fixed steel scaffolding with working platform and cross bracing for cricket net installation | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/fix-scaffolding/gallery/fix-scaffolding-06.mp4',
        poster: '/images/guides/fix-scaffolding/gallery/fix-scaffolding-05.webp',
        alt: 'Demonstration of fixed scaffolding equipment for cricket box netting work | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Heavy Steel Structure',
        'Fixed Base Without Wheels',
        'Elevated Working Platform',
        'Strong Frame Construction',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Boxes',
        'Small Sports Enclosures',
        'Medium-Sized Net Structures',
        'Net Installation and Repairs',
      ],
    },
    materials: {
      items: [],
      images: [],
    },
    installation: {
      steps: [
        'Fixed scaffolding is commonly used for small to medium-sized sports structures and cricket practice boxes. It provides workers with access to elevated areas where nets, ropes, and supporting wires need to be installed or maintained.',
        'These scaffolding structures are generally made from heavy steel pipes or hollow steel sections. The frame includes vertical supports, horizontal connections, and cross bracing to provide strength and stability.',
        'Unlike mobile scaffolding, fixed scaffolding does not have wheels. It must be placed on a firm, level surface and properly secured before workers use the elevated platform.',
        'During cricket box installation, workers can use the scaffolding to reach upper net borders, roof support wires, and other elevated connections. This makes it useful for attaching and adjusting netting at heights that cannot be reached safely from the ground.',
        'Because the structure is heavy and has no wheels, moving it from one location to another can be difficult. Repositioning may require suitable lifting equipment or partial dismantling, depending on its design and weight.',
        'Before use, inspect the steel frame, bracing, platform, and base supports. Make sure the scaffolding is properly secured and equipped with suitable access, guardrails, and fall protection. Workers should not use an incomplete or unstable structure.',
      ],
    },
    benefits: {
      items: [
        'Strong Steel Construction',
        'Elevated Working Access',
        'Suitable for Cricket Boxes',
        'Reusable for Maintenance',
      ],
    },
  },  
  {
    id: 'mobile-crane',
    title: 'Mobile Crane for Sports Net Installation',
    category: 'scaffolding-and-equipment',
    image: '/images/guides/mobile-crane/gallery/mobile-crane-01.webp',
    imageAlt: 'Mobile crane with elevated worker basket installing roof netting on a large sports structure | Cereburum Sports',
    desc: 'Learn how mobile cranes help workers reach high areas during sports net installation and maintenance. They are especially useful for large cricket grounds, sports enclosures, and tall netting structures where ordinary ladders and scaffolding may not provide sufficient access.',
    images: [
      {
        url: '/images/guides/mobile-crane/gallery/mobile-crane-01.webp',
        alt: 'Truck-mounted mobile crane lifting workers in a basket for roof net installation | Cereburum Sports',
      },
      {
        url: '/images/guides/mobile-crane/gallery/mobile-crane-02.webp',
        alt: 'Mobile crane equipment used for high-level sports netting installation | Cereburum Sports',
      },
      {
        url: '/images/guides/mobile-crane/gallery/mobile-crane-03.webp',
        alt: 'Mobile crane providing elevated access for installing sports enclosure nets | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/mobile-crane/gallery/mobile-crane-04.mp4',
        poster: '/images/guides/mobile-crane/gallery/mobile-crane-01.webp',
        alt: 'Mobile crane demonstration during elevated sports net installation | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/mobile-crane/gallery/mobile-crane-05.mp4',
        poster: '/images/guides/mobile-crane/gallery/mobile-crane-02.webp',
        alt: 'Using mobile crane equipment to access high roof netting areas | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/mobile-crane/gallery/mobile-crane-06.mp4',
        poster: '/images/guides/mobile-crane/gallery/mobile-crane-03.webp',
        alt: 'Mobile crane supporting high-level net installation and maintenance work | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'High Working Reach',
        'Truck-Mounted Crane',
        'Elevated Working Access',
        'Movable Between Locations',
      ],
    },
    applications: {
      items: [
        'Large Cricket Grounds',
        'High Roof Net Installation',
        'Tall Sports Enclosures',
        'Elevated Net Repairs',
        'Roof Wire and Rope Connections',
      ],
    },
    materials: {
      items: [],
      images: [],
    },
    installation: {
      steps: [
        'Mobile cranes are commonly used when installing nets on large sports structures where the working height is too great for ordinary ladders or regular scaffolding. They help workers access roof corners, upper net borders, and elevated supporting wires.',
        'Before starting work, inspect the installation area and determine the required working height and reach. Check ground conditions, nearby obstacles, overhead electrical lines, and available space for positioning the crane.',
        'Position the mobile crane on suitable ground and deploy its outriggers according to the manufacturer’s instructions. The crane must remain stable throughout the operation.',
        'When workers need to be lifted, use only an approved personnel-lifting arrangement with the required safety equipment, qualified operators, and applicable safety procedures. A standard material-lifting crane must not be used to lift people unless personnel lifting is specifically permitted and all required safeguards are in place.',
        'Workers can then access the upper parts of the sports structure to attach roof net corners, connect net borders to supporting wires, and adjust net positioning.',
        'During roof net installation, the elevated access helps workers guide the net across high sections of the structure. Workers can secure the net to the supporting system while maintaining the required alignment and allowing appropriate net fall.',
        'After completing one section, lower the working basket and reposition the crane if another area needs attention. Never move the crane with workers elevated unless the equipment and approved operating procedure specifically permit it.',
        'Once the work is complete, inspect the installed netting, supporting ropes, and connection points. Make sure all attachments are secure and the net is positioned correctly.',
      ],
    },
    benefits: {
      items: [
        'Access to Greater Heights',
        'Useful for Large Structures',
        'Supports Roof Net Installation',
        'Can Be Relocated Between Work Areas',
        'Useful for Elevated Maintenance',
      ],
    },
  },  
  {
    id: 'mobile-scissor-lift',
    title: 'Mobile Scissor Lift for Sports Net Installation',
    category: 'scaffolding-and-equipment',
    image: '/images/guides/mobile-scissor-lift/gallery/mobile-scissor-lift-01.webp',
    imageAlt: 'Mobile scissor lift providing elevated access for sports net installation and maintenance | Cereburum Sports',
    desc: 'Learn how mobile scissor lifts help workers safely reach elevated areas during sports net installation and maintenance. These machines provide a stable working platform for attaching nets, adjusting supporting wires, and repairing netting in cricket boxes and sports enclosures.',
    images: [
      {
        url: '/images/guides/mobile-scissor-lift/gallery/mobile-scissor-lift-01.webp',
        alt: 'Mobile scissor lift used for elevated sports net installation | Cereburum Sports',
      },
      {
        url: '/images/guides/mobile-scissor-lift/gallery/mobile-scissor-lift-02.webp',
        alt: 'Worker on elevated scissor lift installing netting around a cricket enclosure | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/mobile-scissor-lift/gallery/mobile-scissor-lift-03.mp4',
        poster: '/images/guides/mobile-scissor-lift/gallery/mobile-scissor-lift-02.webp',
        alt: 'Mobile scissor lift demonstration during sports net installation | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/mobile-scissor-lift/gallery/mobile-scissor-lift-04.mp4',
        poster: '/images/guides/mobile-scissor-lift/gallery/mobile-scissor-lift-01.webp',
        alt: 'Scissor lift providing elevated working access for net installation | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/mobile-scissor-lift/gallery/mobile-scissor-lift-05.mp4',
        poster: '/images/guides/mobile-scissor-lift/gallery/mobile-scissor-lift-02.webp',
        alt: 'Using a mobile scissor lift for sports net maintenance and adjustments | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Hydraulic Lifting Platform',
        'Stable Elevated Workspace',
        'Movable Between Work Areas',
        'Adjustable Working Height',
        'Platform Safety Guardrails',
      ],
    },
    applications: {
      items: [
        'Cricket Box Net Installation',
        'Sports Enclosure Maintenance',
        'Side Net Installation',
        'Roof Net Adjustments',
        'Lighting Maintenance',
        'Supporting Wire Connections',
      ],
    },
    materials: {
      items: [],
      images: [],
    },
    installation: {
      steps: [
        'Mobile scissor lifts are useful when workers need to reach elevated areas of cricket boxes and sports netting structures. They provide a working platform for tasks that are difficult to perform using ordinary ladders.',
        'Before using a scissor lift, inspect the working area and check that the ground is firm, level, and suitable for the equipment. Make sure there are no obstacles or overhead electrical hazards.',
        'Position the scissor lift near the section where the net needs to be installed. Follow the manufacturer’s instructions for positioning, operating, and stabilizing the equipment.',
        'A trained worker can enter the platform and raise it to the required working height while remaining within the equipment’s rated capacity and operating limits.',
        'Once at the required height, the worker can attach the net border to the supporting poles or wires. The elevated platform provides space to work on net connections and adjust their positioning.',
        'Scissor lifts are also helpful when installing roof nets, connecting supporting ropes, and adjusting net tension. Workers can reach the upper sections without repeatedly climbing a ladder.',
        'After completing one section, the platform can be lowered and the lift moved to another working position. Driving while elevated is permitted only when the equipment and ground conditions allow it under the manufacturer’s instructions.',
        'Scissor lifts can also be used for future maintenance, including repairing damaged nets, replacing connections, and servicing lights installed at elevated positions.',
      ],
    },
    benefits: {
      items: [
        'Stable Working Platform',
        'Safer Elevated Access When Used Correctly',
        'Easy Height Adjustment',
        'Useful for Installation and Maintenance',
        'Reduces Repeated Ladder Climbing',
        'Can Be Relocated Between Work Areas',
      ],
    },
  },  
  {
    id: 'portable-scaffolding',
    title: 'Portable Scaffolding for Sports Net Installation',
    category: 'scaffolding-and-equipment',
    image: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-01.webp',
    imageAlt: 'Detachable portable scaffolding used for cricket net installation and maintenance | Cereburum Sports',
    desc: 'Learn how portable scaffolding helps workers install and maintain sports nets at different heights. Its detachable sections make it easy to transport, assemble, and adjust according to the structure. Portable scaffolding is also available with wheels and can be rented for temporary installation work.',    
    images: [
      {
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-01.webp',
        alt: 'Portable metal scaffolding used for sports net installation',
      },
      {
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-02.webp',
        alt: 'Tall portable scaffolding assembled inside a cricket practice ground',
      },
      {
        type: 'video',
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-03.mp4',
        alt: 'Portable scaffolding setup for elevated sports net installation',
      },
      {
        type: 'video',
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-04.mp4',
        alt: 'Using portable scaffolding during cricket net installation work',
      },
      {
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-05.webp',
        alt: 'Detachable metal scaffolding structure for sports ground maintenance',
      },
      {
        type: 'video',
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-06.mp4',
        alt: 'Portable scaffolding used to access elevated net installation areas',
      },
      {
        type: 'video',
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-07.mp4',
        alt: 'Scaffolding equipment used for installing high sports nets',
      },
      {
        type: 'video',
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-08.mp4',
        alt: 'Portable scaffolding arrangement for cricket box net installation',
      },
      {
        type: 'video',
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-09.mp4',
        alt: 'Adjustable portable scaffolding used for sports net maintenance',
      },
      {
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-10.webp',
        alt: 'Portable scaffolding with detachable metal frames at a cricket ground',
      },
      {
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-11.webp',
        alt: 'Metal scaffolding tower for elevated net installation and repair',
      },
      {
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-12.webp',
        alt: 'Portable scaffolding structure with adjustable working platforms',
      },
      {
        type: 'video',
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-13.mp4',
        alt: 'Using detachable scaffolding sections for sports net installation',
      },
      {
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-14.webp',
        alt: 'Portable metal scaffolding positioned beside a cricket net enclosure',
      },
      {
        type: 'video',
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-15.mp4',
        alt: 'Portable scaffolding used for maintenance of overhead cricket nets',
      },
      {
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-16.webp',
        alt: 'Tall portable scaffolding tower inside a sports net enclosure at night',
      },
      {
        type: 'video',
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-17.mp4',
        alt: 'Portable scaffolding used for elevated sports net installation work',
      },
      {
        type: 'video',
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-18.mp4',
        alt: 'Workers using portable scaffolding for sports net installation',
      },
      {
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-19.webp',
        alt: 'Adjustable metal scaffolding for cricket ground net maintenance',
      },
      {
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-20.webp',
        alt: 'Portable scaffolding assembled for high roof net installation',
      },
      {
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-21.webp',
        alt: 'Detachable scaffolding frame used in sports facility maintenance',
      },
      {
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-22.webp',
        alt: 'Portable scaffolding tower with working platforms and support braces',
      },
      {
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-23.webp',
        alt: 'Metal scaffolding equipment for installation of cricket enclosure nets',
      },
      {
        type: 'video',
        url: '/images/guides/portable-scaffolding/gallery/portable-scaffolding-24.mp4',
        alt: 'Portable scaffolding demonstration for sports net installation and maintenance',
      },
    ],
    features: {
      items: [
        'Detachable Scaffolding Sections',
        'Adjustable Working Height',
        'Easy Assembly and Dismantling',
        'Optional Wheels for Movement',
        'Reusable for Different Projects',
        'Available for Rental',
      ],
    },
    applications: {
      items: [
        'Cricket Box Net Installation',
        'Sports Ground Net Installation',
        'Roof Net Installation',
        'Side Net Installation',
        'Net Repair and Maintenance',
        'Lighting Installation and Maintenance',
      ],
    },
    materials: {
      items: [],
      images: [],
    },
    installation: {
      steps: [
        'Portable scaffolding is commonly used when workers need temporary access to elevated areas during sports net installation. Unlike fixed scaffolding, its sections can be detached and assembled again at another location.',
        'The scaffolding is made from separate metal frames, connecting pipes, braces, and working platforms. These components can be transported to the installation site and assembled according to the required height.',
        'Before assembly, inspect all components and select a firm, level working surface. Follow the manufacturer’s instructions for bracing, stabilizers, platforms, and safe assembly.',
        'The height of portable scaffolding can be adjusted by adding or removing compatible sections. This makes it useful for cricket boxes and sports structures of different heights.',
        'Some portable scaffolding systems are available with wheels, making them easier to move between working areas. Wheels must be properly locked during use, and the scaffold must not be moved while workers are on it.',
        'Once the scaffolding is correctly assembled and inspected, workers can use its secured working platform to attach net borders, connect supporting wires, and adjust net positioning.',
        'Portable scaffolding is also helpful for installing roof nets and repairing damaged netting. Workers can reach different sections of the structure without building permanent access equipment.',
        'After completing the work, the scaffolding can be dismantled into separate sections and transported to another location. It can also be rented when required for temporary installation or maintenance projects.',
      ],
    },
    benefits: {
      items: [
        'Easy to Detach and Transport',
        'Adjustable Height for Different Structures',
        'Optional Wheels for Easy Movement',
        'Suitable for Temporary Installation Work',
        'Can Be Rented When Required',
        'Reusable Across Multiple Projects',
        'Useful for Net and Lighting Maintenance',
      ],
    },
  },  
  {
    id: 'height-measurement',
    title: 'How to Measure Height for Sports Net Installation',
    category: 'measurement-and-planning',
    image: '/images/guides/height-measurement/gallery/height-measurement-01.webp',
    imageAlt: 'Measuring the height of a steel pole for sports net installation | Cereburum Sports',
    desc: 'Learn how to measure the correct height for cricket cages and sports netting enclosures. Measure from the top of the pole to the ground and keep extra margin for proper net fall and coverage.',
    images: [
      {
        url: '/images/guides/height-measurement/gallery/height-measurement-01.webp',
        alt: 'Measuring tape extended along a tall steel pole to measure sports net installation height | Cereburum Sports',
      },
      {
        url: '/images/guides/height-measurement/gallery/height-measurement-02.webp',
        alt: 'Height measurement guide showing the measuring direction from the top of the pole to the ground and extra margin for net fall | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/height-measurement/gallery/height-measurement-03.mp4',
        poster: '/images/guides/height-measurement/gallery/height-measurement-01.webp',
        alt: 'Video guide demonstrating how to measure pole height for cricket net installation | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/height-measurement/gallery/height-measurement-04.mp4',
        poster: '/images/guides/height-measurement/gallery/height-measurement-01.webp',
        alt: 'Measuring vertical height of a sports net structure using a measuring tape | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/height-measurement/gallery/height-measurement-05.mp4',
        poster: '/images/guides/height-measurement/gallery/height-measurement-02.webp',
        alt: 'Checking sports net height measurements and allowing extra length for proper net fall | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Accurate Height Measurement',
        'Top-to-Ground Measurement',
        'Extra Net Fall Margin',
        'Suitable for Different Structures',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Football Net Enclosures',
        'Sports Arenas',
        'Rooftop Net Enclosures',
      ],
    },
    materials: {
      items: [
        '100 ft Measuring Tape',
      ],
      images: [
        { 
          url: '/images/guides/height-measurement/materials/height-measurement-01.webp', 
          alt: 'Measuring tape extended along a tall steel pole to measure sports net installation height | Cereburum Sports' 
        }
      ],
    },
    installation: {
      steps: [
        'Identify the top of the pole where the sports net will be attached. This will be the starting point for measuring the height.',
        'Place the measuring tape at the top attachment point and extend it vertically down along the pole until the tape touches the ground.',
        'Keep the measuring tape straight while taking the measurement. Avoid bending or pulling the tape sideways, as this can affect the accuracy.',
        'Record the measured height and keep some extra margin for net fall. This additional length allows the net to fall naturally and cover the bottom area properly.',
        'Repeat the measurement at other poles if their heights are different or the ground is uneven. Recheck all measurements before preparing or cutting the net.',
      ],
    },
  
    benefits: {
      items: [
        'Accurate Net Sizing',
        'Proper Ground Coverage',
        'Reduced Material Wastage',
        'Better Installation Planning',
      ],
    },
  },    
  {
    id: 'length-measurement',
    title: 'How to Measure Length for Sports Net Installation',
    category: 'measurement-and-planning',
    image: '/images/guides/length-measurement/gallery/length-measurement-01.webp',
    imageAlt: 'Measuring the distance between corner poles of a sports net enclosure using a measuring tape | Cereburum Sports',
    desc: 'Learn how to measure the correct length for cricket practice nets, football enclosures, and sports arenas. Measure from one corner pole to the opposite corner while keeping the measuring tape slightly loose. This helps provide enough net material for proper fitting and natural sag during installation.',
    images: [
      {
        url: '/images/guides/length-measurement/gallery/length-measurement-01.webp',
        alt: 'Measuring tape stretched between two steel poles across a grassy sports ground to measure net length | Cereburum Sports',
      },
      {
        url: '/images/guides/length-measurement/gallery/length-measurement-02.webp',
        alt: 'Annotated length measurement guide showing corner poles, measuring direction, and slightly loose tape for net fitting | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/length-measurement/gallery/length-measurement-03.mp4',
        poster: '/images/guides/length-measurement/gallery/length-measurement-01.webp',
        alt: 'Video demonstration of measuring the distance between corner poles for sports net installation | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/length-measurement/gallery/length-measurement-04.mp4',
        poster: '/images/guides/length-measurement/gallery/length-measurement-02.webp',
        alt: 'Sports net length measurement video showing how to position measuring tape between support poles | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/length-measurement/gallery/length-measurement-05.mp4',
        poster: '/images/guides/length-measurement/gallery/length-measurement-01.webp',
        alt: 'Checking the required length of a sports net enclosure using a measuring tape | Cereburum Sports',
      },
      {
        url: '/images/guides/length-measurement/gallery/length-measurement-06.webp',
        alt: 'Sports net enclosure length measurement reference showing the distance along the supporting structure | Cereburum Sports',
      },
      {
        url: '/images/guides/length-measurement/gallery/length-measurement-07.webp',
        alt: 'Annotated sports net length measurement along a brick boundary wall showing the starting pole, final pole, and loose measuring tape | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/length-measurement/gallery/length-measurement-08.mp4',
        poster: '/images/guides/length-measurement/gallery/length-measurement-07.webp',
        alt: 'Video showing length measurement along the boundary of a sports net structure with allowance for natural net sag | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/length-measurement/gallery/length-measurement-09.mp4',
        poster: '/images/guides/length-measurement/gallery/length-measurement-07.webp',
        alt: 'Practical demonstration of measuring sports net enclosure length from the starting corner to the final pole | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Corner-to-Corner Measurement',
        'Slightly Loose Measuring Tape',
        'Natural Net Sag Allowance',
        'Accurate Net Length Planning',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Football Net Enclosures',
        'Sports Arenas',
        'Rooftop Net Enclosures',
      ],
    },
    materials: {
      items: [
        '100 ft Measuring Tape',
      ],
      images: [
        {
          url: '/images/guides/length-measurement/materials/length-measurement-01.webp',
          alt: 'Measuring tape used to measure the distance between corner poles for sports net installation | Cereburum Sports',
        },
      ],
    },
    installation: {
      steps: [
        'Identify the starting corner pole of the sports net structure. This will be the starting point for measuring the required net length.',
        'Place the measuring tape at the starting corner pole and extend it towards the opposite corner or final pole along the side being measured.',
        'Keep the measuring tape slightly loose instead of pulling it completely tight. Allow a small natural curve in the tape to provide extra space for proper net fitting and sag.',
        'Continue measuring until the tape reaches the opposite corner pole. Make sure the tape follows the intended net installation direction.',
        'Record the total length shown on the measuring tape. This measurement will help determine the required net size, including the allowance for natural sag.',
        'Repeat the process for the remaining sides of the structure where required. Recheck the measurements before ordering, preparing, or cutting the sports net.',
      ],
    },
    benefits: {
      items: [
        'Proper Net Fitting',
        'Natural Net Sag',
        'Reduced Risk of Short Netting',
        'Better Installation Planning',
      ],
    },
  },    
  {
    id: 'poles-alignment',
    title: 'Good vs Bad Pole Alignment in Sports Net Structures',
    category: 'measurement-and-planning',
    image: '/images/guides/poles-alignment/gallery/poles-alignment-01.webp',
    imageAlt: 'Comparison of original and annotated sports net support poles showing poor alignment | Cereburum Sports',
    desc: 'See real examples of properly aligned and badly aligned poles in sports net structures. Poles should follow a straight line along the length and width of the enclosure. These images highlight correct alignment in green and incorrect alignment in red, helping you understand how pole positioning affects the overall structure and net fitting.',
    images: [
      {
        url: '/images/guides/poles-alignment/gallery/poles-alignment-01.webp',
        alt: 'Original and annotated comparison showing badly aligned support poles in a sports net enclosure | Cereburum Sports',
      },
      {
        url: '/images/guides/poles-alignment/gallery/poles-alignment-02.webp',
        alt: 'Sports net structure showing green lines for properly aligned poles and a red line highlighting incorrect alignment | Cereburum Sports',
      },
      {
        url: '/images/guides/poles-alignment/gallery/poles-alignment-03.webp',
        alt: 'Night view of a sports net enclosure with green lines showing correctly aligned length and width supports | Cereburum Sports',
      },
      {
        url: '/images/guides/poles-alignment/gallery/poles-alignment-04.webp',
        alt: 'Completed sports net enclosure at night showing straight and properly aligned upper support lines | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/poles-alignment/gallery/poles-alignment-05.mp4',
        poster: '/images/guides/poles-alignment/gallery/poles-alignment-03.webp',
        alt: 'Video reference demonstrating pole alignment along the length and width of a sports net enclosure | Cereburum Sports',
      },
      {
        url: '/images/guides/poles-alignment/gallery/poles-alignment-06.webp',
        alt: 'Side-by-side night photographs with numbered poles and green and red lines showing aligned and misaligned sections | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/poles-alignment/gallery/poles-alignment-07.mp4',
        poster: '/images/guides/poles-alignment/gallery/poles-alignment-06.webp',
        alt: 'Video reference comparing correctly positioned and misaligned support poles along a sports net boundary | Cereburum Sports',
      },
      {
        url: '/images/guides/poles-alignment/gallery/poles-alignment-08.webp',
        alt: 'Original and annotated close-up showing aligned, badly aligned, and very badly aligned sports net support poles | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/poles-alignment/gallery/poles-alignment-09.mp4',
        poster: '/images/guides/poles-alignment/gallery/poles-alignment-08.webp',
        alt: 'Video reference showing differences in pole straightness and positioning within a sports net structure | Cereburum Sports',
      },
      {
        url: '/images/guides/poles-alignment/gallery/poles-alignment-10.webp',
        alt: 'Original and annotated comparison showing a curved red line highlighting badly aligned poles | Cereburum Sports',
      },
      {
        url: '/images/guides/poles-alignment/gallery/poles-alignment-11.webp',
        alt: 'Sports net enclosure showing the positioning of support poles for alignment comparison | Cereburum Sports',
      },
      {
        url: '/images/guides/poles-alignment/gallery/poles-alignment-12.webp',
        alt: 'Reference photograph showing vertical sports net poles for checking their alignment and straightness | Cereburum Sports',
      },
      {
        url: '/images/guides/poles-alignment/gallery/poles-alignment-13.webp',
        alt: 'Sports net structure showing the arrangement of supporting poles along the enclosure boundary | Cereburum Sports',
      },
      {
        url: '/images/guides/poles-alignment/gallery/poles-alignment-14.webp',
        alt: 'Pole alignment reference showing support pole positions in a sports net enclosure | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Good Alignment Examples',
        'Bad Alignment Examples',
        'Length and Width Alignment',
        'Visual Comparisons',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Football Net Enclosures',
        'Sports Arenas',
        'Rooftop Net Enclosures',
      ],
    },
    materials: {
      items: [],
      images: [],
    },
    installation: {
      steps: [
        'Look at the poles along the length of the sports net structure. Properly aligned poles should follow the same straight line from one corner to the other.',
        'Check the poles along the width of the enclosure. The upper ends of the poles should follow the intended straight support line without unnecessary inward or outward deviations.',
        'Observe the examples marked with green lines. These show how correctly positioned poles form a straight and consistent alignment across the structure.',
        'Compare them with the examples marked in red. These highlight poles that are bent, leaning, or positioned away from the intended alignment line.',
        'Notice that some poles may be slightly misaligned while others may show significant deviations. Even small alignment problems can affect the appearance and fitting of the net.',
        'Compare the original and annotated photographs to understand the difference between good and bad pole alignment. Properly aligned poles help maintain a balanced structure and allow the net to fit more evenly.',
      ],
    },
    benefits: {
      items: [
        'Better Pole Positioning',
        'Proper Net Fitting',
        'Straight Structure Lines',
        'Improved Appearance',
      ],
    },
  },  
  {
    id: 'size-checking',
    title: 'Sports Net Size Verification and Final Packing',
    category: 'measurement-and-planning',
    image: '/images/guides/size-checking/gallery/size-checking-01.webp',
    imageAlt: 'Sports net bundles with size and quality tags after final verification and packing | Cereburum Sports',
    desc: 'See how we verify the dimensions and quality of every sports net before final packing. Each net is carefully rechecked, folded, and packed separately with an identification tag showing its size and installation section. This process ensures that all net packets are properly identified, organized, and ready for delivery and installation.',
    images: [
      {
        url: '/images/guides/size-checking/gallery/size-checking-01.webp',
        alt: 'Three white sports net packets secured with blue ropes and labeled with size and quality identification tags | Cereburum Sports',
      },
      {
        url: '/images/guides/size-checking/gallery/size-checking-02.webp',
        alt: 'Close-up of folded sports net packets showing handwritten dimensions and installation side labels attached to each bundle | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/size-checking/gallery/size-checking-03.mp4',
        poster: '/images/guides/size-checking/gallery/size-checking-01.webp',
        alt: 'Sports net size verification process before final packing | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/size-checking/gallery/size-checking-04.mp4',
        poster: '/images/guides/size-checking/gallery/size-checking-02.webp',
        alt: 'Checking sports net dimensions and preparing individual net packets for identification | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/size-checking/gallery/size-checking-05.mp4',
        poster: '/images/guides/size-checking/gallery/size-checking-01.webp',
        alt: 'Final sports net packing and identification tag checking before delivery | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Size Rechecking',
        'Quality Verification',
        'Individual Packet Tagging',
        'Secure Packing',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Football Net Enclosures',
        'Sports Arenas',
        'Custom Sports Netting',
      ],
    },
    materials: {
      items: [
        'Measuring Tape',
        'Size and Quality Tags',
        'Packing Rope',
      ],
      images: [
        {
          url: '/images/guides/size-checking/materials/size-checking-01.webp',
          alt: 'Measuring tape used to verify sports net dimensions before final packing | Cereburum Sports',
        },
      ],
    },
    installation: {
      steps: [
        'Before final packing, we recheck the length and width of each prepared sports net using a measuring tape. The measurements are compared with the required dimensions to ensure the correct size.',
        'We inspect each net for quality, checking the mesh, threads, and overall condition to identify any visible damage or defects.',
        'After size and quality verification, we carefully fold each net into a separate packet. This keeps the net organized and helps prevent tangling during transportation.',
        'We prepare an identification tag for every net packet. Each tag includes the verified net size and its installation section, such as left side, right side, or middle section.',
        'Each folded net packet is securely tied using packing rope. The identification tag is attached where it can be easily seen without opening the packet.',
        'Finally, we recheck all packed nets and their identification tags to confirm that the correct sizes and sections are ready for delivery and installation.',
      ],
    },
    benefits: {
      items: [
        'Accurate Net Dimensions',
        'Quality Assurance',
        'Easy Identification',
        'Organized Delivery',
      ],
    },
  },  
  {
    id: 'center-door',
    title: 'Center Doors for Sports Net Enclosures: Types, Uses and Benefits',
    category: 'doors-and-access',
    image: '/images/guides/center-door/gallery/center-door-01.webp',
    imageAlt: 'Center entrance door with steel frame and netting in a sports enclosure | Cereburum Sports',
    desc: 'Explore different center door designs used in cricket practice nets, football enclosures, and sports arenas. Center doors provide a convenient entrance and exit without requiring people to move or lift the surrounding netting. This guide shows real examples of center doors, their construction, benefits, and where they are commonly used.',
    images: [
      {
        url: '/images/guides/center-door/gallery/center-door-01.webp',
        alt: 'Front view of a center door integrated into white sports netting with a black steel support frame | Cereburum Sports',
      },
      {
        url: '/images/guides/center-door/gallery/center-door-02.webp',
        alt: 'Open center entrance door with rectangular steel frame and white netting attached to the door | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/center-door/gallery/center-door-03.mp4',
        poster: '/images/guides/center-door/gallery/center-door-02.webp',
        alt: 'Video reference showing a center door used for entering and exiting a sports net enclosure | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/center-door/gallery/center-door-04.mp4',
        poster: '/images/guides/center-door/gallery/center-door-02.webp',
        alt: 'Video demonstration of a center entrance door in a sports netting structure | Cereburum Sports',
      },
      {
        url: '/images/guides/center-door/gallery/center-door-05.webp',
        alt: 'Black steel center door with chain-link mesh opening into an enclosed football playing area | Cereburum Sports',
      },
      {
        url: '/images/guides/center-door/gallery/center-door-06.webp',
        alt: 'Center access door with black steel frame and chain-link mesh in an outdoor sports enclosure | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/center-door/gallery/center-door-07.mp4',
        poster: '/images/guides/center-door/gallery/center-door-05.webp',
        alt: 'Video reference showing a center door with steel frame and chain-link mesh for sports ground access | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/center-door/gallery/center-door-08.mp4',
        poster: '/images/guides/center-door/gallery/center-door-06.webp',
        alt: 'Video showing the design and use of a center entrance door in a sports enclosure | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/center-door/gallery/center-door-09.mp4',
        poster: '/images/guides/center-door/gallery/center-door-06.webp',
        alt: 'Video reference demonstrating center door access in a sports netting enclosure | Cereburum Sports',
      },
      {
        url: '/images/guides/center-door/gallery/center-door-10.webp',
        alt: 'Center door design reference for convenient entrance and exit in a sports net enclosure | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Central Entrance',
        'Hinged Door Design',
        'Steel Frame Construction',
        'Netting or Chain-Link Mesh',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Football Grounds',
        'Sports Arenas',
        'Training Facilities',
      ],
    },
    materials: {
      items: [
        'Steel Door Frame',
        'Heavy-Duty Hinges',
        'Sports Netting or Chain-Link Mesh',
        'Tying Twine',
        'Protective Paint',
      ],
      images: [
        {
          url: '/images/guides/center-door/materials/center-door-01.webp',
          alt: 'Material reference for center door construction in sports net enclosures | Cereburum Sports',
        },
        {
          url: '/images/guides/center-door/materials/center-door-02.webp',
          alt: 'Material used for preparing and securing center doors in sports netting structures | Cereburum Sports',
        },
        {
          url: '/images/guides/center-door/materials/center-door-03.webp',
          alt: 'Iron rods used to secure the center door frame to the supporting pole | Cereburum Sports',
        },
        {
          url: '/images/guides/center-door/materials/center-door-04.webp',
          alt: 'Hinges used to attach the center door frame to the supporting pole | Cereburum Sports',
        },
        {
          url: '/images/guides/center-door/materials/center-door-05.webp',
          alt: 'Anti-rust coating applied to the steel door frame | Cereburum Sports',
        },
      ],
    },
    installation: {
      steps: [
        'A center door is an entrance placed along the side of a sports net enclosure rather than at the corner. It allows players, coaches, and maintenance workers to enter and exit the playing area conveniently.',
        'Center doors are commonly made using rectangular steel frames with hinges. The door frame is attached to a supporting post so it can open and close without disturbing the surrounding enclosure.',
        'Different center door designs are available. Some doors use the same white sports netting as the surrounding enclosure, while others use chain-link mesh attached to a steel frame.',
        'Net-covered center doors are suitable for cricket practice nets and similar enclosures where maintaining a continuous netting appearance is important. The net is secured around the door frame using strong tying twine.',
        'Chain-link mesh center doors are commonly used in football grounds and multi-purpose sports arenas. They provide a more rigid entrance panel that can handle frequent opening and closing.',
        'A center door is useful when players need regular access from the side of the enclosure. It can be positioned near the main walking path or another convenient entry point.',
        'The door should have enough clearance to open and close smoothly. Its hinges, frame, and fastening points should be properly secured, and the surrounding netting should not obstruct movement.',
        'The reference images and videos show different center door examples. Choose a design based on the type of sports enclosure, available entrance space, frequency of use, and preferred netting or mesh material.',
      ],
    },
    benefits: {
      items: [
        'Easy Entry and Exit',
        'Convenient Side Access',
        'Protects Surrounding Netting',
        'Suitable for Frequent Use',
      ],
    },
  },  
  {
    id: 'corner-door',
    title: 'Corner Doors for Sports Net Enclosures: Types, Uses and Benefits',
    category: 'doors-and-access',
    image: '/images/guides/corner-door/gallery/corner-door-01.webp',
    imageAlt: 'Corner entrance door with black steel frame and white sports netting in a cricket practice enclosure | Cereburum Sports',
    desc: 'Explore corner door designs used in cricket practice nets, football enclosures, and sports arenas. Corner doors provide convenient entry and exit at the edge of a netting structure without disturbing the surrounding net. This guide shows real examples of corner doors, their construction, benefits, and situations where corner entrances are a practical choice.',
    images: [
      {
        url: '/images/guides/corner-door/gallery/corner-door-01.webp',
        alt: 'Corner door reference showing a steel entrance frame integrated into the netting of a sports enclosure | Cereburum Sports',
      },
      {
        url: '/images/guides/corner-door/gallery/corner-door-02.webp',
        alt: 'Open corner entrance door with black tubular steel frame and white netting secured around its edges | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/corner-door/gallery/corner-door-03.mp4',
        poster: '/images/guides/corner-door/gallery/corner-door-02.webp',
        alt: 'Video demonstration of a hinged corner door with white sports netting and steel support frame | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/corner-door/gallery/corner-door-04.mp4',
        poster: '/images/guides/corner-door/gallery/corner-door-02.webp',
        alt: 'Video reference showing corner entrance door design and access within a sports net enclosure | Cereburum Sports',
      },
      {
        url: '/images/guides/corner-door/gallery/corner-door-05.webp',
        alt: 'Corner entrance opening in a tall outdoor cricket net enclosure with black steel posts and white protective netting | Cereburum Sports',
      },
      {
        url: '/images/guides/corner-door/gallery/corner-door-06.webp',
        alt: 'Corner door design reference showing the entrance position and surrounding netting structure | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Corner Entrance Design',
        'Hinged Steel Frame',
        'Integrated Sports Netting',
        'Space-Saving Access',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Football Net Enclosures',
        'Sports Arenas',
        'Training Facilities',
        'Rooftop Net Enclosures',
      ],
    },
    materials: {
      items: [
        'Steel Door Frame',
        'Heavy-Duty Hinges',
        'High-Tensile Sports Netting',
        'Netting Tying Twine',
        'Protective Paint',
      ],
      images: [
        {
          url: '/images/guides/corner-door/materials/cornerr-door-01.webp',
          alt: 'Material reference for constructing and securing a corner entrance door in a sports net enclosure | Cereburum Sports',
        },
        {
          url: '/images/guides/corner-door/materials/corner-door-02.webp',
          alt: 'Material reference for attaching sports netting to a steel corner door frame | Cereburum Sports',
        },
        {
          url: '/images/guides/corner-door/materials/corner-door-03.webp',
          alt: 'Iron rods used to secure the corner door frame to the supporting pole | Cereburum Sports',
        },
        {
          url: '/images/guides/corner-door/materials/corner-door-04.webp',
          alt: 'Hinges used to attach the corner door frame to the supporting pole | Cereburum Sports',
        },
        {
          url: '/images/guides/corner-door/materials/corner-door-05.webp',
          alt: 'Anti-rust coating applied to the steel door frame | Cereburum Sports',
        },
      ],
    },
    installation: {
      steps: [
        'A corner door is an entrance positioned near the corner of a sports net enclosure. It allows players, coaches, and maintenance workers to enter and exit without lifting or moving the surrounding netting.',
        'Corner doors are commonly made using rectangular steel frames attached to a supporting pole with hinges. The frame provides a defined entrance while keeping the surrounding netting structure in place.',
        'The door frame is usually covered with the same sports netting used in the enclosure. The net is tied around the steel frame using strong tying twine to maintain a consistent appearance.',
        'Corner doors are particularly useful when the main entrance is located near the boundary of the playing area. They allow people to enter from the side without placing an entrance in the middle of the enclosure.',
        'In cricket practice nets, a corner door can provide convenient access while keeping the main practice area enclosed. It is also suitable for football grounds and other sports facilities where entry is preferred near the edge.',
        'The door should be positioned where it has enough space to open and close without hitting nearby poles, walls, or other structures. The hinges and supporting frame should be properly secured.',
        'The surrounding netting should be attached neatly around the entrance. This helps reduce unwanted gaps and prevents the net from becoming loose when the door is opened or closed.',
        'The reference images and videos show corner door designs in real sports netting installations. Choose a corner entrance when the enclosure layout, available space, and walking path make corner access more convenient than a center door.',
      ],
    },
    benefits: {
      items: [
        'Convenient Corner Access',
        'Keeps Main Netting Intact',
        'Better Space Utilization',
        'Easy Entry and Exit',
        'Suitable for Different Sports',
      ],
    },
  },  
  {
    id: 'netting-age',
    title: 'Sports Netting Age: New vs Old Net Comparison',
    category: 'maintenance-and-issues',
    image: '/images/guides/netting-age/gallery/netting-age-01.webp',
    imageAlt: 'Comparison of new white netting thread and four-year-old thread showing visible aging and discoloration | Cereburum Sports',
    desc: 'See how sports netting changes after years of outdoor use. This guide compares newly installed netting with older netting, including a four-year-old thread example. Real images and videos highlight differences in thread color, surface condition, knots, and signs of wear. Learn how to recognize aging netting and understand when maintenance, repair, or replacement may be required.',
    images: [
      {
        url: '/images/guides/netting-age/gallery/netting-age-01.webp',
        alt: 'Close-up comparison of newly installed white netting thread and four-year-old discolored thread | Cereburum Sports',
      },
      {
        url: '/images/guides/netting-age/gallery/netting-age-02.webp',
        alt: 'Sports netting thread comparison showing differences between fresh white thread and older weathered thread | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/netting-age/gallery/netting-age-03.mp4',
        poster: '/images/guides/netting-age/gallery/netting-age-01.webp',
        alt: 'Video reference comparing new sports netting thread with older thread after years of use | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/netting-age/gallery/netting-age-04.mp4',
        poster: '/images/guides/netting-age/gallery/netting-age-02.webp',
        alt: 'Video demonstration showing visible differences in the condition of new and aged sports netting | Cereburum Sports',
      },
      {
        url: '/images/guides/netting-age/gallery/netting-age-05.webp',
        alt: 'Close-up view of tangled and weathered old sports netting showing thread discoloration and signs of extended use | Cereburum Sports',
      },
      {
        url: '/images/guides/netting-age/gallery/netting-age-06.webp',
        alt: 'Close-up inspection of an old sports net border showing worn fabric edging and weathered netting threads | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/netting-age/gallery/netting-age-07.mp4',
        poster: '/images/guides/netting-age/gallery/netting-age-05.webp',
        alt: 'Video inspection of aged sports netting showing thread condition and visible wear after prolonged use | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/netting-age/gallery/netting-age-08.mp4',
        poster: '/images/guides/netting-age/gallery/netting-age-06.webp',
        alt: 'Video reference showing the condition of old sports netting and its border after years of outdoor exposure | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'New vs Old Net Comparison',
        'Four-Year-Old Thread Example',
        'Thread Wear Identification',
        'Netting Condition Inspection',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Football Net Enclosures',
        'Sports Arenas',
        'Outdoor Training Facilities',
        'Rooftop Net Enclosures',
      ],
    },
    materials: {
      items: [],
      images: [],
    },
    installation: {
      steps: [
        'Sports netting changes over time due to sunlight, rain, dust, wind, and regular use. The rate of aging depends on the net material, quality, weather conditions, and maintenance.',
        'Newly installed netting usually has a cleaner appearance, with fresh threads and properly formed knots. The reference images show new white thread alongside older thread for comparison.',
        'After several years of outdoor exposure, netting threads may become discolored, rough, or worn. The four-year-old thread example shows visible differences compared with the new thread.',
        'Inspect the threads closely for fraying, thinning, broken strands, and damaged knots. These signs can indicate that the net has experienced wear and may require maintenance.',
        'Check the border and edges of the net. Older netting may show damaged border stitching, worn fabric edging, or loose attachment points, particularly in areas exposed to frequent movement.',
        'Compare the condition of different sections of the same net. Areas exposed to direct sunlight, strong wind, or repeated ball impact may show more wear than protected sections.',
        'Do not judge net strength by color alone. A discolored net may still be usable, while a clean-looking net may have weakened threads. Check the actual condition of the material and its connections.',
        'Repair small damaged sections where practical. If the net has widespread broken threads, weak knots, damaged borders, or significant deterioration, consider replacing the affected section or the complete net.',
        'The reference images and videos demonstrate how old sports netting can look after years of use. Regular inspections help identify problems early and support decisions about repair or replacement.',
      ],
    },
    benefits: {
      items: [
        'Understand Netting Aging',
        'Identify Worn Threads',
        'Detect Maintenance Issues',
        'Plan Timely Replacement',
        'Maintain Safer Enclosures',
      ],
    },
  },
  {
    id: 'pole-bending',
    title: 'Pole Bending in Sports Netting Structures: Causes and Examples',
    category: 'maintenance-and-issues',
    image: '/images/guides/pole-bending/gallery/pole-bending-01.webp',
    imageAlt: 'Sports net enclosure showing a bent corner support pole highlighted with a red vertical reference line | Cereburum Sports',
    desc: 'Learn how to identify bent poles in cricket practice nets, football enclosures, and sports arenas. This guide uses real photographs and videos to show how supporting poles can bend or lean away from their original position. Understand possible causes, including excessive net tension, wind pressure, and structural weaknesses, and learn why bent poles should be inspected and corrected to maintain a safe and properly supported netting structure.',
    images: [
      {
        url: '/images/guides/pole-bending/gallery/pole-bending-01.webp',
        alt: 'Wide view of a sports net enclosure with a red dashed vertical line highlighting bending in a tall corner support pole | Cereburum Sports',
      },
      {
        url: '/images/guides/pole-bending/gallery/pole-bending-02.webp',
        alt: 'Reference photograph showing pole bending and positioning in a sports netting support structure | Cereburum Sports',
      },
      {
        url: '/images/guides/pole-bending/gallery/pole-bending-03.webp',
        alt: 'Close-up of a tall white and green sports net support pole bending away from a straight red vertical reference line | Cereburum Sports',
      },
      {
        url: '/images/guides/pole-bending/gallery/pole-bending-04.webp',
        alt: 'Sports net enclosure support pole reference showing visible bending or deviation from its intended position | Cereburum Sports',
      },
      {
        url: '/images/guides/pole-bending/gallery/pole-bending-05.webp',
        alt: 'Example of pole positioning and bending in a sports netting enclosure | Cereburum Sports',
      },
      {
        url: '/images/guides/pole-bending/gallery/pole-bending-06.webp',
        alt: 'Sports enclosure pole condition reference for identifying structural bending and misalignment | Cereburum Sports',
      },
      {
        url: '/images/guides/pole-bending/gallery/pole-bending-07.webp',
        alt: 'Reference image showing the condition of supporting poles in a sports netting structure | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/pole-bending/gallery/pole-bending-08.mp4',
        poster: '/images/guides/pole-bending/gallery/pole-bending-01.webp',
        alt: 'Video reference demonstrating pole bending in a sports net enclosure and its effect on structural alignment | Cereburum Sports',
      },
      {
        url: '/images/guides/pole-bending/gallery/pole-bending-09.webp',
        alt: 'Night view of a sports net enclosure showing a bent vertical support pole highlighted against a straight red reference line | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/pole-bending/gallery/pole-bending-10.mp4',
        poster: '/images/guides/pole-bending/gallery/pole-bending-09.webp',
        alt: 'Video reference showing bending in a tall sports net support pole at an outdoor sports facility | Cereburum Sports',
      },
      {
        url: '/images/guides/pole-bending/gallery/pole-bending-11.webp',
        alt: 'Additional sports netting support pole reference for examining bending and structural positioning | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Pole Bending Examples',
        'Vertical Alignment Comparison',
        'Structural Weakness Identification',
        'Pole Condition Inspection',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Football Net Enclosures',
        'Sports Arenas',
        'Rooftop Net Enclosures',
        'Outdoor Training Facilities',
      ],
    },
    materials: {
      items: [],
      images: [],
    },
    installation: {
      steps: [
        'Supporting poles are an important part of a sports netting structure. They hold the net in position and help maintain the intended height, shape, and stability of the enclosure.',
        'Pole bending occurs when a supporting pole curves or moves away from its intended straight position. This may happen gradually over time or suddenly due to excessive force.',
        'Common possible causes include strong winds, excessive net tension, insufficient pole strength, weak foundations, corrosion, and improper installation. The actual cause should be determined through inspection.',
        'Observe the pole from a suitable distance and compare its position with a straight vertical reference line. The reference images use red lines to make bending easier to identify.',
        'Inspect the upper section of the pole carefully. In some examples, the lower section appears relatively straight while the upper section bends away from the intended vertical position.',
        'Check the corner poles and intermediate supporting poles. Corner poles may experience forces from netting and support cables in multiple directions, making their condition especially important.',
        'Look for additional warning signs such as cracked welds, loose connections, damaged foundations, corrosion, or unusual movement. These problems may indicate that the pole requires structural attention.',
        'Bent poles can affect the overall shape of the enclosure, create uneven net tension, and place additional stress on connected supports. Significant bending may also create a safety risk.',
        'If a pole shows noticeable or increasing bending, restrict access to the affected area and arrange an inspection by a qualified professional. Do not attempt to straighten a loaded pole or adjust tension cables without appropriate expertise and equipment.',
        'After the cause has been identified and any necessary repair or replacement has been completed, check the alignment of the supporting poles and the condition of the netting connections before returning the enclosure to use.',
      ],
    },
    benefits: {
      items: [
        'Early Bending Detection',
        'Improved Structural Safety',
        'Better Pole Alignment',
        'Reduced Netting Stress',
        'Timely Maintenance Planning',
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
