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
    title: 'How to Install Bamboo Supports for Sports Netting',
    category: 'installation-and-techniques',
    image: '/images/guides/bamboos/gallery/bamboos-01.webp',
    imageAlt: 'Bamboo support structure with sports netting installed around a cricket practice enclosure | Cereburum Sports',
    desc: 'Step-by-step guide to installing bamboo supports for cricket practice nets and sports enclosures. Learn how to measure the area, position bamboo poles, secure the netting, and build a simple and affordable practice setup.',
    images: [
      {
        url: '/images/guides/bamboos/gallery/bamboos-01.webp',
        alt: 'Bamboo poles supporting a cricket practice net enclosure | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos-02.webp',
        alt: 'Bamboo support installation showing a 42 ft length and 20 ft width with four bamboo positions | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos-03.webp',
        alt: 'Bamboo netting installation showing a 35 ft length and 22 ft width with four bamboo supports | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos-04.webp',
        alt: 'Completed bamboo-supported cricket practice enclosure with netting on the sides and roof | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/bamboos/gallery/bamboos-05.mp4',
        poster: '/images/guides/bamboos/gallery/bamboos-01.webp',
        alt: 'Bamboo support and sports netting installation video | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/bamboos/gallery/bamboos-06.mp4',
        poster: '/images/guides/bamboos/gallery/bamboos-01.webp',
        alt: 'Bamboo-supported cricket practice net setup walkthrough | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos-07.webp',
        alt: 'Bamboo support arrangement for sports netting installation | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos08.webp',
        alt: 'Bamboo poles and netting connections in a cricket practice enclosure | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos-09.webp',
        alt: 'Sports netting supported by bamboo poles around a practice area | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos-10.webp',
        alt: 'Bamboo support and netting installation detail | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos-11.webp',
        alt: 'Bamboo poles and netting materials used for cricket practice enclosures | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos-12.webp',
        alt: 'Bamboo netting support installation detail | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos-13.webp',
        alt: 'Sports netting material for bamboo-supported enclosures | Cereburum Sports',
      },
      {
        url: '/images/guides/bamboos/gallery/bamboos-14.webp',
        alt: 'Bamboo-supported cricket practice net enclosure | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/bamboos/gallery/bamboos-15.mp4',
        poster: '/images/guides/bamboos/gallery/bamboos-01.webp',
        alt: 'Bamboo netting installation and support arrangement video | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Bamboo Supports',
        'Custom Sizes',
        'Roof & Side Netting',
        'Simple Installation',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Home Practice Areas',
        'Rooftop Net Enclosures',
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
          alt: 'Bamboo poles used to support sports netting | Cereburum Sports' 
        },
        { 
          url: '/images/guides/bamboos/materials/bamboos-02.webp', 
          alt: 'Strong ropes used to support the roof netting | Cereburum Sports' 
        },
        { 
          url: '/images/guides/bamboos/materials/bamboos-03.webp', 
          alt: 'Tying twine used to secure the netting to the bamboo poles | Cereburum Sports' 
        }
      ],
    },
    installation: {
      steps: [
        'Measure the length and width of the area where the netting will be installed. For example, one setup measures 42 ft by 20 ft, while another measures 35 ft by 22 ft.',
        'Mark the positions for the bamboo poles according to the measurements. Place the poles at suitable points to support the sides and roof of the netting.',
        'Install the bamboo poles vertically and secure them properly. Make sure the poles are stable and strong enough to support the netting.',
        'Connect strong ropes between the bamboo poles to create support for the roof netting. Tie the ropes securely and check their alignment.',
        'Spread the sports netting across the roof and sides. Tie the netting to the bamboo poles and supporting ropes, keeping it properly aligned without pulling it too tightly.',
        'Check all bamboo supports, ropes, and netting connections. Make sure the structure is stable, the netting covers the required area, and there are no large gaps.',
      ],
    },
    benefits: {
      items: [
        'Affordable Setup',
        'Easy Installation',
        'Custom Fit',
        'Practical for Small Areas',
      ],
    },
  },
  {
    id: 'net-extension-joint',
    title: 'How to Make a Net Extension Joint for Sports Netting',
    category: 'installation-and-techniques',
    image: '/images/guides/net-extension-joint/gallery/net-extension-joint-01.webp',
    imageAlt: 'Net Extension Joint - joining two sports nets using thread and a wooden netting needle | Cereburum Sports',
    desc: 'Step-by-step guide to joining two sports nets using an extension joint. Learn how to align net edges, use a wooden netting needle, and connect meshes with strong joining thread to extend net length or width.',
    images: [
      {
        url: '/images/guides/net-extension-joint/gallery/net-extension-joint-01.webp',
        alt: 'Net Extension Joint gallery 1 - joining thread wrapped around a wooden netting needle to connect two nets | Cereburum Sports',
      },
      {
        url: '/images/guides/net-extension-joint/gallery/net-extension-joint-02.webp',
        alt: 'Net Extension Joint gallery 2 - close-up of joining thread passing through aligned net meshes | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-extension-joint/gallery/net-extension-joint-03.mp4',
        poster: '/images/guides/net-extension-joint/gallery/net-extension-joint-01.webp',
        alt: 'Net Extension Joint video 1 - demonstration of joining sports net edges using thread and a netting needle | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-extension-joint/gallery/net-extension-joint-04.mp4',
        poster: '/images/guides/net-extension-joint/gallery/net-extension-joint-02.webp',
        alt: 'Net Extension Joint video 2 - connecting matching net meshes while maintaining proper alignment | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-extension-joint/gallery/net-extension-joint-05.mp4',
        poster: '/images/guides/net-extension-joint/gallery/net-extension-joint-01.webp',
        alt: 'Net Extension Joint video 3 - extending sports netting by joining two net sections | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Strong Joint',
        'Seamless Extension',
        'Flexible Connection',
        'Durable Stitching',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Football Ground Netting',
        'Sports Arenas',
        'Net Extensions & Repairs',
      ],
    },
    materials: {
      items: [
        'Joining Thread',
        'Wooden Netting Needle',
        'Sports Netting',
      ],
      images: [
        { 
          url: '/images/guides/net-extension-joint/materials/net-extension-joint-01.webp', 
          alt: 'Thread used to join the nets | Cereburum Sports' 
        },
        { 
          url: '/images/guides/net-extension-joint/materials/net-extension-joint-02.webp', 
          alt: 'Joining thread wrapped around a wooden netting needle to connect two nets | Cereburum Sports' 
        }
      ],
    },
    installation: {
      steps: [
        'Place both nets next to each other and identify the edges that need to be joined. Make sure the nets are properly spread out without twists or folds.',
        'Align the border meshes of both nets so that the joining line remains straight and the mesh pattern matches properly.',
        'Wind strong joining thread around a wooden netting needle. Secure the thread at the starting point of the extension joint.',
        'Pass the netting needle through the matching edge meshes of both nets. Continue joining one mesh at a time while keeping the thread tension even.',
        'Continue the extension joint along the entire joining line. Avoid pulling the thread too tightly, as this may distort the net meshes.',
        'Secure the joining thread at the finishing point. Check the complete joint for loose knots, missed meshes, and uneven connections before installing the extended net.',
      ],
    },
    benefits: {
      items: [
        'Increases Net Size',
        'Strong Connection',
        'Cost Effective',
        'Easy Net Repairs',
      ],
    },
  },  
  {
    id: 'net-packing',
    title: 'How to Fold, Pack, and Label Sports Netting',
    category: 'installation-and-techniques',
    image: '/images/guides/net-packing/gallery/net-packing-01.webp',
    imageAlt: 'Sports netting folded and packed into a compact bundle | Cereburum Sports',
    desc: 'Step-by-step guide to folding, packing, securing, and labeling sports netting for safe storage and transportation. Learn how to arrange large nets into compact bundles, tie them with rope, and mention the correct net size on each package for easy identification during installation.',
    images: [
      {
        url: '/images/guides/net-packing/gallery/net-packing-01.webp',
        alt: 'Net Packing gallery 1 - folded sports netting prepared for packing | Cereburum Sports',
      },
      {
        url: '/images/guides/net-packing/gallery/net-packing-02.webp',
        alt: 'Net Packing gallery 2 - packed white sports net tied with blue rope and labeled with its size | Cereburum Sports',
      },
      {
        url: '/images/guides/net-packing/gallery/net-packing-03.webp',
        alt: 'Net Packing gallery 3 - compact bundle of white sports netting secured with blue rope | Cereburum Sports',
      },
      {
        url: '/images/guides/net-packing/gallery/net-packing-04.webp',
        alt: 'Net Packing gallery 4 - sports netting packing and bundle preparation | Cereburum Sports',
      },
      {
        url: '/images/guides/net-packing/gallery/net-packing-05.webp',
        alt: 'Net Packing gallery 5 - multiple packed sports nets arranged with size identification labels | Cereburum Sports',
      },
      {
        url: '/images/guides/net-packing/gallery/net-packing-06.webp',
        alt: 'Net Packing gallery 6 - packed netting bundles ready for storage or delivery | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-packing/gallery/net-packing-07.mp4',
        poster: '/images/guides/net-packing/gallery/net-packing-01.webp',
        alt: 'Net Packing video 1 - sports netting packing demonstration | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-packing/gallery/net-packing-08.mp4',
        poster: '/images/guides/net-packing/gallery/net-packing-02.webp',
        alt: 'Net Packing video 2 - folding and arranging sports netting for packing | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-packing/gallery/net-packing-09.mp4',
        poster: '/images/guides/net-packing/gallery/net-packing-03.webp',
        alt: 'Net Packing video 3 - preparing a compact sports netting bundle | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-packing/gallery/net-packing-10.mp4',
        poster: '/images/guides/net-packing/gallery/net-packing-04.webp',
        alt: 'Net Packing video 4 - sports net folding and packing technique | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-packing/gallery/net-packing-11.mp4',
        poster: '/images/guides/net-packing/gallery/net-packing-05.webp',
        alt: 'Net Packing video 5 - handling and securing sports netting during packing | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-packing/gallery/net-packing-12.mp4',
        poster: '/images/guides/net-packing/gallery/net-packing-06.webp',
        alt: 'Net Packing video 6 - preparing packed sports netting for transportation | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-packing/gallery/net-packing-13.mp4',
        poster: '/images/guides/net-packing/gallery/net-packing-01.webp',
        alt: 'Net Packing video 7 - sports net packing and final bundle preparation | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Compact Folding',
        'Secure Rope Tying',
        'Size Labeling',
        'Easy Transportation',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Football Goal Nets',
        'Sports Arenas',
        'Net Storage and Delivery',
      ],
    },
    materials: {
      items: [
        'Sports Netting',
        'Packing Rope',
        'Size Labels',
        'Marker Pen',
      ],
      images: [
        { 
          url: '/images/guides/net-packing/materials/net-packing-01.webp', 
          alt: 'nylon rope used to tie the packed nets | Cereburum Sports' 
        },
        { 
          url: '/images/guides/net-packing/materials/net-packing-02.webp', 
          alt: 'Size labels used to identify the packed nets | Cereburum Sports' 
        }
      ],
    },
    installation: {
      steps: [
        'Before packing, spread out the sports net and check its overall condition. Make sure the net is clean, dry, and free from unnecessary tangles. Confirm its length and width according to the required measurements.',
        'Fold the net carefully from one side to the other. Keep the netting properly aligned during folding so that it does not become tangled. Continue folding until the net forms a manageable shape.',
        'Arrange the folded net into a compact bundle. Keep the loose edges inside the bundle and avoid pulling the netting too tightly, as this may affect the shape of the net.',
        'Use strong packing rope to tie the folded net securely. Wrap the rope around the bundle and make firm knots to prevent it from opening during handling, storage, or transportation.',
        'After packing, mention the net size on a label using a marker pen. Write the length and width clearly, such as 105 × 35 ft, and attach the label securely to the bundle so it can be identified without opening the package.',
        'Recheck the packed bundle to confirm that the rope is properly tied and the size label is correct. Arrange the completed bundles in a clean, dry place, ready for storage, delivery, or installation.',
      ],
    },
    benefits: {
      items: [
        'Easy Identification',
        'Tangle Prevention',
        'Space Saving',
        'Safe Handling',
      ],
    },
  },  
  {
    id: 'net-stitching',
    title: 'How to Stitch Sports Netting Borders Together',
    category: 'installation-and-techniques',
    image: '/images/guides/net-stitching/gallery/net-stitching-01.webp',
    imageAlt: 'Sports netting borders stitched together using white tying twine | Cereburum Sports',
    desc: 'Step-by-step guide to joining and stitching sports netting borders to form a single continuous border. Learn how to align adjoining net sections, secure their reinforced edges using strong tying twine, and maintain a proper connection for cricket practice nets, sports arenas, and other netting enclosures.',
    images: [
      {
        url: '/images/guides/net-stitching/gallery/net-stitching-01.webp',
        alt: 'Net Stitching gallery 1 - close-up of white sports netting attached to a black reinforced border using tying twine | Cereburum Sports',
      },
      {
        url: '/images/guides/net-stitching/gallery/net-stitching-02.webp',
        alt: 'Net Stitching gallery 2 - two reinforced net borders stitched together to form a single continuous border | Cereburum Sports',
      },
      {
        url: '/images/guides/net-stitching/gallery/net-stitching-03.webp',
        alt: 'Net Stitching gallery 3 - front view of joined sports netting sections with aligned mesh and a continuous upper border | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-stitching/gallery/net-stitching-04.mp4',
        poster: '/images/guides/net-stitching/gallery/net-stitching-01.webp',
        alt: 'Net Stitching video 1 - demonstration of stitching sports netting borders together | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/net-stitching/gallery/net-stitching-05.mp4',
        poster: '/images/guides/net-stitching/gallery/net-stitching-03.webp',
        alt: 'Net Stitching video 2 - joining adjacent sports net sections and securing their reinforced borders | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Continuous Border',
        'Strong Stitching',
        'Aligned Netting',
        'Secure Connection',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Sports Arenas',
        'Football Netting',
        'Large Net Enclosures',
      ],
    },
    materials: {
      items: [
        'Sports Netting',
        'Reinforced Net Borders',
        'High-Strength Tying Twine',
        'Wooden Netting Needle',
      ],
      images: [
        { 
          url: '/images/guides/net-stitching/materials/net-stitching-01.webp', 
          alt: 'Parachute border sewn with the netting thread | Cereburum Sports' 
        },
        { 
          url: '/images/guides/net-stitching/materials/net-stitching-02.webp', 
          alt: 'Parachute thread used to stitch the netting borders | Cereburum Sports' 
        },
        { 
          url: '/images/guides/net-stitching/materials/net-stitching-03.webp', 
          alt: 'Wooden netting needle used to join the nets | Cereburum Sports' 
        },
      ],
    },
    installation: {
      steps: [
        'Identify the two sports netting sections that need to be joined. Spread out the nets and check that their reinforced borders are clean, properly positioned, and free from tangles.',
        'Bring the two reinforced borders together and align them carefully. Make sure both borders follow the same line so they can be stitched together to form a single continuous border.',
        'Prepare strong tying twine and wind it around a wooden netting needle. Keep enough twine available to complete the stitching without unnecessary interruptions.',
        'Start stitching from one end of the joined borders. Pass the tying twine through or around both reinforced edges and secure it with a firm knot. Continue stitching along the borders at regular intervals to hold them together.',
        'While stitching, maintain even tension on the tying twine. Keep both borders aligned and avoid pulling too tightly, as excessive tension may cause the netting to bend or become uneven.',
        'After joining the borders, check the connection between the adjoining net sections. Make sure the mesh remains properly aligned and there are no large gaps or loose sections along the joint.',
        'Finish the stitching with secure knots and trim any unnecessary loose twine. Inspect the completed joint to confirm that both borders are firmly connected and form a single continuous border.',
      ],
    },
    benefits: {
      items: [
        'Strong Net Connection',
        'Continuous Border',
        'Reduced Gaps',
        'Neat Finish',
      ],
    },
  },  
  {
    id: 'pre-installation-setup',
    title: 'How to Prepare Sports Netting Before Installation',
    category: 'installation-and-techniques',
    image: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-01.webp',
    imageAlt: 'Pre-installation setup of a sports netting enclosure with steel poles, support wires, and workers preparing the structure | Cereburum Sports',
    desc: 'Step-by-step guide to preparing sports netting before installation. Learn how to inspect the supporting structure, arrange and unfold netting, identify reinforced borders, check measurements, and position the net correctly before lifting and securing it to cricket cages and sports arenas.',
    images: [
      {
        url: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-01.webp',
        alt: 'Pre-Installation Setup gallery 1 - steel sports enclosure frame with overhead support wires and scaffolding prepared for net installation | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-02.mp4',
        poster: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-01.webp',
        alt: 'Pre-Installation Setup video 1 - preparing sports netting and installation equipment | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-03.mp4',
        poster: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-01.webp',
        alt: 'Pre-Installation Setup video 2 - arranging netting before installation on a sports enclosure | Cereburum Sports',
      },
      {
        url: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-04.webp',
        alt: 'Pre-Installation Setup gallery 4 - worker spreading and preparing white sports netting along the ground beside a sports field | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-05.mp4',
        poster: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-04.webp',
        alt: 'Pre-Installation Setup video 3 - preparing and positioning sports netting before lifting | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-06.mp4',
        poster: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-04.webp',
        alt: 'Pre-Installation Setup video 4 - handling and arranging large sports netting sections | Cereburum Sports',
      },
      {
        url: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-07.webp',
        alt: 'Pre-Installation Setup gallery 7 - folded white sports netting with black reinforced borders arranged on the ground before installation | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-08.mp4',
        poster: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-07.webp',
        alt: 'Pre-Installation Setup video 5 - demonstration of preparing sports netting for installation | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-09.mp4',
        poster: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-07.webp',
        alt: 'Pre-Installation Setup video 6 - arranging netting sections and preparing reinforced borders | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-10.mp4',
        poster: '/images/guides/pre-installation-setup/gallery/pre-installation-setup-01.webp',
        alt: 'Pre-Installation Setup video 7 - sports netting preparation and setup before final installation | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Structure Inspection',
        'Net Arrangement',
        'Border Alignment',
        'Installation Preparation',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Sports Arenas',
        'Football Enclosures',
        'Rooftop Netting',
      ],
    },
    materials: {
      items: [
        'Sports Netting',
        'Reinforced Net Borders',
        'Support Ropes and Wires',
        'Tying Twine',
        'Measuring Tape',
        'Cable Ties',
      ],
      images: [
        { 
          url: '/images/guides/pre-installation-setup/materials/pre-installation-setup-01.webp', 
          alt: 'Border sewn with the netting thread | Cereburum Sports' 
        },
        { 
          url: '/images/guides/pre-installation-setup/materials/pre-installation-setup-02.webp', 
          alt: 'Nylon Rope used to tie the netting sections | Cereburum Sports' 
        },
        { 
          url: '/images/guides/pre-installation-setup/materials/pre-installation-setup-03.webp', 
          alt: 'Parachute thread used to stitch the netting borders | Cereburum Sports' 
        },
        { 
          url: '/images/guides/pre-installation-setup/materials/pre-installation-setup-04.webp', 
          alt: 'Wooden netting needle used to join the nets | Cereburum Sports' 
        },
        { 
          url: '/images/guides/pre-installation-setup/materials/pre-installation-setup-05.webp', 
          alt: 'Measuring tape to confirm and verify sizes before final installation | Cereburum Sports' 
        },
        { 
          url: '/images/guides/pre-installation-setup/materials/pre-installation-setup-06.webp', 
          alt: 'Cable Ties to attach net border with the poles | Cereburum Sports' 
        },
      ],
    },
    installation: {
      steps: [
        'Inspect the sports enclosure before starting the net installation. Check that the steel poles, upper support pipes, and support wires are properly installed and securely connected.',
        'Measure the length, width, and height of the enclosure. Compare these measurements with the prepared netting to confirm that the net size matches the installation area.',
        'Clear the installation area of sharp objects, stones, and other materials that could damage the net. Choose a clean and open space where the netting can be unfolded and arranged safely.',
        'Remove the sports netting from its packaging and carefully spread it on the ground. Unfold the net gradually to avoid tangling the mesh or twisting the reinforced borders.',
        'Identify the reinforced borders of each netting section. Arrange the net so that the upper, lower, and side borders face their correct installation positions.',
        'Check the netting for tangled sections, damaged mesh, loose stitching, or twisted borders. Straighten the net and correct any problems before installation begins.',
        'Position the netting near the enclosure where it will be installed. Arrange the sections in the correct order and keep the reinforced borders accessible for attaching ropes and securing the net to the supporting structure.',
        'Prepare the required tying twine, support ropes, and installation tools. Make sure the workers understand the installation sequence and that suitable ladders or scaffolding are safely positioned where needed.',
        'Before lifting the net, perform a final check of its direction, measurements, and border alignment. Make sure the net is free from tangles and ready to be raised and secured to the enclosure.',
      ],
    },
    benefits: {
      items: [
        'Faster Installation',
        'Reduced Net Damage',
        'Proper Alignment',
        'Organized Workflow',
      ],
    },
  },  
  {
    id: 'rings',
    title: 'How to Install Rings on Sports Netting Borders',
    category: 'installation-and-techniques',
    image: '/images/guides/rings/gallery/rings-01.webp',
    imageAlt: 'Metal rings fitted into black border of green sports netting | Cereburum Sports',
    desc: 'Step-by-step guide to installing metal rings on sports netting borders for cricket cages, football nets, and sports enclosures. Learn how rings provide strong attachment points for hooks, ropes, and clips while helping keep the net securely installed.',
    images: [
      {
        url: '/images/guides/rings/gallery/rings-01.webp',
        alt: 'Sports netting with metal rings installed along the black border | Cereburum Sports',
      },
      {
        url: '/images/guides/rings/gallery/rings-02.webp',
        alt: 'Close-up of metal ring and spring clip attached to sports netting border | Cereburum Sports',
      },
      {
        url: '/images/guides/rings/gallery/rings-03.webp',
        alt: 'Metal rings positioned along reinforced black netting border | Cereburum Sports',
      },
      {
        url: '/images/guides/rings/gallery/rings-04.webp',
        alt: 'Metal ring attachment on green sports netting | Cereburum Sports',
      },
      {
        url: '/images/guides/rings/gallery/rings-05.webp',
        alt: 'Ring installation detail on reinforced sports net border | Cereburum Sports',
      },
      {
        url: '/images/guides/rings/gallery/rings-06.webp',
        alt: 'Close view of ring placement for securing sports netting | Cereburum Sports',
      },
      {
        url: '/images/guides/rings/gallery/rings-07.webp',
        alt: 'Sports net border with metal rings for installation and attachment | Cereburum Sports',
      },
      {
        type: 'video',
        url: '/images/guides/rings/gallery/rings-08.mp4',
        poster: '/images/guides/rings/gallery/rings-01.webp',
        alt: 'Rings installation demonstration for sports netting borders | Cereburum Sports',
      },
    ],
    features: {
      items: [
        'Metal Rings',
        'Reinforced Border',
        'Secure Attachment',
        'Easy Installation',
      ],
    },
    applications: {
      items: [
        'Cricket Practice Nets',
        'Football Nets',
        'Sports Arenas',
        'Rooftop Net Enclosures',
      ],
    },
    materials: {
      items: [
        'Metal Rings',
        'Reinforced Border Tape',
        'Ring Installation Tool',
        'Measuring Tape',
      ],
      images: [
        { 
          url: '/images/guides/rings/materials/rings-01.webp', 
          alt: 'Metal rings fitted into black border of sports netting | Cereburum Sports' 
        },
        { 
          url: '/images/guides/rings/materials/rings-02.webp', 
          alt: 'Parachute border sewn with the netting thread | Cereburum Sports' 
        },
        { 
          url: '/images/guides/rings/materials/rings-03.webp', 
          alt: 'Ring installation tool with yellow and black handles and metal rings for sports netting borders | Cereburum Sports',
        }
      ],
    },
    installation: {
      steps: [
        'Spread the sports net on a clean and flat surface. Check that the black border tape is properly stitched around the edges of the net.',
        'Measure and mark the positions where the rings will be installed. Keep suitable spacing between rings so the net can be attached evenly to the supporting structure.',
        'Place each metal ring at the marked position on the reinforced border. Make sure the ring is positioned within the border tape and does not damage the net threads.',
        'Use a suitable ring installation tool to fix the ring firmly into the border. Check that the ring is properly secured and its edges are smooth.',
        'Repeat the process along the required sides of the net. After installing all rings, check their alignment and attachment strength. The net can then be connected to the supporting structure using suitable hooks, clips, or ropes.',
      ],
    },
    benefits: {
      items: [
        'Strong Attachment',
        'Easy Net Removal',
        'Even Support',
        'Long-Lasting Use',
      ],
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
