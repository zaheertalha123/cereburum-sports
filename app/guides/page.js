import ClientGuidesPage from './ClientGuidesPage';

export const metadata = {
  title: 'Guides — Sports Net Installation & Facility Setup | Cereburum Sports',
  description:
    'Step-by-step guides for sports net installation, net manufacturing, floodlight setup, and ground preparation — from the experts at Cereburum Sports.',
};

const guides = [
  // ── INSTALLATION ─────────────────────────────────────────
  {
    id: 'cricket-net-installation',
    title: 'Cricket Net Installation',
    category: 'Installation',
    image: '/images/works/cricket-arena-nowshera/cricket-arena-nowshera-cover.jpg',
    desc: 'A step-by-step walkthrough for setting up a full cricket arena net enclosure from pole placement to final tensioning.',
    steps: [
      'Mark the ground perimeter and identify pole placement points every 10–12 ft.',
      'Erect steel or iron poles, ensuring vertical alignment with a spirit level.',
      'Thread galvanized wire rope through the top eyelets to form the upper boundary line.',
      'Attach the net to the wire rope using D-shackles or nylon cable ties at regular intervals.',
      'Tension the lower edge and stake or pin it flush to the ground to eliminate gaps.',
    ],
  },
  {
    id: 'rooftop-net-installation',
    title: 'Rooftop Net Installation',
    category: 'Installation',
    image: '/images/works/roof-top-net-sialkot/roof-top-net-sialkot-cover.jpg',
    desc: 'Guidance on converting a flat rooftop into a safe, ball-retaining sports area using lightweight netting and a support frame.',
    steps: [
      'Assess roof load-bearing capacity before committing to a frame type (bamboo vs. iron).',
      'Install perimeter uprights anchored to parapet walls or roof surface with expansion bolts.',
      'Span horizontal wire rope across uprights at the required height (typically 15–20 ft).',
      'Drape and secure Parachute 24 net across the roof frame, starting from one long side.',
      'Inspect all anchor points and apply weatherproof sealant around bolt penetrations.',
    ],
  },
  {
    id: 'football-goal-net-setup',
    title: 'Football Goal Net Setup',
    category: 'Installation',
    image: '/images/works/sports-arena-gujranwala/sports-arena-gujranwala-cover.jpg',
    desc: 'How to correctly attach and tension a goal net onto a standard football or futsal goal frame for match-ready use.',
    steps: [
      'Lay the net flat and identify the top edge — it will have the smallest loop openings.',
      'Hook the top edge mesh onto the crossbar clips or net hooks, spacing evenly.',
      'Attach each side of the net to the goal post hooks, working front to back.',
      'Secure the rear ground bar using pegs or weighted rings to maintain net shape.',
      'Tug-test the net at multiple points — all attachment points must hold firm before play.',
    ],
  },

  // ── MAKING ───────────────────────────────────────────────
  {
    id: 'how-nets-are-manufactured',
    title: 'How Sports Nets Are Made',
    category: 'Making',
    image: '/images/products/parachute-36.jpg',
    desc: 'An inside look at how high-quality sports nets go from raw yarn to finished product — the Cereburum Sports manufacturing process.',
    steps: [
      'Raw yarn (parachute, polyester, or nylon) is loaded onto industrial knitting machines.',
      'Machines knit the yarn into the specified mesh box size (1.75", 3", or custom) using a locking-knot pattern.',
      'The finished sheet is measured, cut to ordered dimensions with a heat-seal finish on edges.',
      'Selvedge ropes are inserted along all four borders and knotted or crimped for strength.',
      'Final QC involves pull-testing a sample section before bundling for dispatch or installation.',
    ],
  },
  {
    id: 'custom-net-sizing',
    title: 'Custom Net Sizing Guide',
    category: 'Making',
    image: '/images/products/custom-net.jpg',
    desc: 'How to measure your space and communicate dimensions accurately for a perfect-fit custom net order.',
    steps: [
      'Measure the full length, width, and height of the enclosure — include any slope or pitch.',
      'Note any obstructions (poles, walls, doors) that need cutouts or special edge treatment.',
      'Decide mesh box size based on sport: 1.75" for cricket, 3" for football, 1" for badminton.',
      'Confirm the material grade based on impact level, weather exposure, and budget.',
      'Share a rough sketch or photo with your measurements — we will confirm the cutting plan.',
    ],
  },

  // ── LIGHTS ───────────────────────────────────────────────
  {
    id: 'floodlight-cricket-installation',
    title: 'Floodlight Setup for Cricket Grounds',
    category: 'Lights',
    image: '/images/works/sports-arena-khariyan/sports-arena-khariyan-cover.jpg',
    desc: 'Key considerations for planning and installing floodlights on an enclosed cricket practice ground for safe evening play.',
    steps: [
      'Determine lux requirements: 200–300 lux for practice, 500+ for competitive matches.',
      'Position poles at the four corners — set back from the net to avoid glare into the batting crease.',
      'Use 100W–200W LED flood heads per pole; tilt angle should avoid direct line-of-sight to batsmen.',
      'Run armoured cable underground or along existing pole framework to keep the field clear.',
      'Test light uniformity by standing at all batting positions before the facility opens.',
    ],
  },
  {
    id: 'led-lighting-indoor-sports',
    title: 'LED Lighting for Indoor Sports Arenas',
    category: 'Lights',
    image: '/images/works/sports-arena-peshawar/sports-arena-peshawar-cover.jpg',
    desc: 'Planning and specifying LED overhead lighting for multi-sport indoor facilities to eliminate shadows and flicker.',
    steps: [
      'Map the court layout and calculate fixture count for even distribution (one fixture per 20–25 sq ft).',
      'Choose high-CRI (80+) LED panels — minimum 4000K colour temperature for ball visibility.',
      'Mount fixtures at height appropriate to the sport (8–12 ft for futsal, 18+ ft for cricket).',
      'Install on a RCBO-protected circuit with a manual dimmer for multi-use flexibility.',
      'Replace fluorescent or metal halide fittings with equivalent LED — expect 60% energy savings.',
    ],
  },

  // ── GROUND ───────────────────────────────────────────────
  {
    id: 'cricket-pitch-preparation',
    title: 'Cricket Pitch Preparation',
    category: 'Ground',
    image: '/images/works/cricket-pitch-layyah/cricket-pitch-layyah-cover.jpg',
    desc: 'How to prepare and maintain a cricket pitch inside an enclosed practice ground for consistent bounce and pace.',
    steps: [
      'Level the pitch strip (22 yards × 10 ft) with a roller — aim for zero gradient end to end.',
      'Use red or black clay soil compacted in 2-inch layers, each rolled and dried before the next.',
      'Apply a final layer of fine loam, roll to a firm surface, and allow 48 hours to cure.',
      'Mark the crease lines with white line-marking paint using a regulation template.',
      'Keep the pitch covered with a tarpaulin when not in use to protect against moisture.',
    ],
  },
  {
    id: 'futsal-court-setup',
    title: 'Futsal Court Setup & Marking',
    category: 'Ground',
    image: '/images/works/sports-complex-sahiwal/sports-complex-sahiwal-cover.jpeg',
    desc: 'Setting up a regulation futsal court inside a sports arena: surface, markings, and goal placement.',
    steps: [
      'Lay interlocking rubber or polypropylene sports tiles over a flat, clean concrete base.',
      'Mark boundary lines (40 m × 20 m for full-size) using waterproof floor paint or pre-cut tape.',
      'Paint the centre circle (3 m radius), penalty spots (6 m), and goalkeeper area (6 m × 3 m).',
      'Anchor futsal goals (3 m × 2 m) using built-in anchor plates and ground pins.',
      'Attach Nylon 106 or Parachute 104 goal nets and verify all attachment points before play.',
    ],
  },
];

export default function GuidesPage() {
  return <ClientGuidesPage guides={guides} />;
}
