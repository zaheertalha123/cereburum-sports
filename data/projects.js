import { mediaUrl } from '../lib/mediaUrl';

/*
TODO(owner): Add any of these fields to a project only when the fact is known.
They stay hidden until filled: clientType, challenge, solution, netSpec, frame, timeline, clientQuote.
Still needed for:
- cricket-arena-nowshera
- sports-complex-sahiwal
- folding-net-islamabad
- sports-arena-gujranwala
- cricket-pitch-layyah
- sports-complex-peshawar
- practice-ground-gujranwala
- roof-top-net-sialkot
- sports-arena-khariyan
- sports-arena-wazirabad
- roof-top-net-sialkot-daska-road
- mian-indoor-cricket-club-pasrur
- cricket-arena-mirpur
- bloomfield-hall-school-khariyan
- sports-complex-mardan
- house-roof-top-net-sialkot
- cricket-pitch-bharth-sialkot
- k-cricket-arena-sialkot
- futsal-ground-fast-islamabad
- home-roof-top-net-sialkot
- sports-complex-nowshera
- cricket-arena-sialkot-cant
- cricket-arena-barnala
*/

const rawProjects = [
  {
    id: 'cricket-arena-nowshera',
    title: 'Professional Cricket Arena, Nowshera',
    category: 'Sports Arena',
    type: 'Sports Arena',
    location: 'Nowshera, Pakistan',
    desc: 'A full-scale professional sports arena installation featuring premium Parachute 36 customized netting. Our team executed a rapid-response deployment, completing the complex installation in just 8 hours for a 90ft x 60ft facility.',
    highlights: ['Parachute 36 Premium Mesh', '35-ft Vertical Height Clearance', '5,400 sq ft Ground Coverage', 'Rapid 8-Hour Expert Installation'],
    year: '2025',
    badge: 'Featured',
    gradient: 'linear-gradient(135deg, rgba(18,17,74,0.9), rgba(7,5,26,0.95))',
    coverImage: '/images/works/cricket-arena-nowshera/cricket-arena-nowshera-cover.webp',
    coverImageAlt: 'Cricket arena netting installation in Nowshera, Pakistan — sports net manufacturer Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/cricket-arena-nowshera/cricket-arena-nowshera-cover.webp', alt: 'Cricket ground netting installation in Nowshera — net manufacturer Pakistan' },
      { type: 'image', url: '/images/works/cricket-arena-nowshera/cricket-arena-nowshera-1.webp', alt: 'Parachute 36 cricket practice net enclosure installed in Nowshera Virkan, Pakistan' },
      { type: 'image', url: '/images/works/cricket-arena-nowshera/cricket-arena-nowshera-2.webp', alt: 'Custom sports net installation with steel pole structure — net maker Pakistan' },
      { type: 'image', url: '/images/works/cricket-arena-nowshera/cricket-arena-nowshera-3.webp', alt: 'Cricket cage perimeter netting for sports facility in Nowshera, Pakistan' },
      { type: 'image', url: '/images/works/cricket-arena-nowshera/cricket-arena-nowshera-4.webp', alt: 'indoor cricket ground nowshera — night cricket practice — custom net maker Cereburum Sports' },
      { type: 'image', url: '/images/works/cricket-arena-nowshera/cricket-arena-nowshera-5.webp', alt: 'cricker indoor net — cricket indoor netting entry - indoor cricket net natural grass ground — sports barrier netting installation Pakistan' },
      { type: 'image', url: '/images/works/cricket-arena-nowshera/cricket-arena-nowshera-6.webp', alt: 'indoor cricket net ground with height - Indoor cricket ground installation in Nowshera, Pakistan' }
    ]
  },
  {
    id: 'sports-complex-sahiwal',
    title: 'Sports Complex, Sahiwal',
    category: 'Sports Complex',
    type: 'Sports Complex',
    location: 'Sahiwal, Pakistan',
    desc: 'A massive three-ground sports complex development featuring custom-manufactured Parachute 24 netting. We managed the end-to-end process of manufacturing and delivering the nets for all facilities.',
    highlights: ['Triple Ground Inventory Delivery', 'Parachute 24 Durable Mesh', '35-ft Vertical Height Clearance', 'Rapid 6-Hour Prime Installation'],
    year: '2024',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/sports-complex-sahiwal/sports-complex-sahiwal-cover.webp',
    coverImageAlt: 'Sports complex netting installation in Sahiwal, Punjab — net manufacturer Pakistan | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/sports-complex-sahiwal/sports-complex-sahiwal-cover.webp', alt: 'Triple-ground sports complex — natural ground sports arena — netting project in Sahiwal, Pakistan — sports net manufacturer' },
      { type: 'image', url: '/images/works/sports-complex-sahiwal/sports-complex-sahiwal-1.webp', alt: 'net material packaging — cricket net bundle — Multi-ground sports facility net packing — custom net installation in Sahiwal, Punjab' },
      { type: 'image', url: '/images/works/sports-complex-sahiwal/sports-complex-sahiwal-2.webp', alt: 'Parachute 24 mesh package — parachute 24 bundle — net material packaging — net for cricket ground — cricket practice net in Sahiwal, Punjab — sports net maker Pakistan' },
      { type: 'image', url: '/images/works/sports-complex-sahiwal/sports-complex-sahiwal-3.webp', alt: 'cricket net with border — cricket net maetrial packaging — Parachute 24 Material— cricket ground perimeter fence netting installed in Sahiwal, Pakistan' },
      { type: 'image', url: '/images/works/sports-complex-sahiwal/sports-complex-sahiwal-4.webp', alt: 'cricket net with parachute 24 — cricket net material packaging — parachute net with parachute border — net installation in Sahiwal, Punjab, Pakistan' },
      { type: 'video', url: '/images/works/sports-complex-sahiwal/sports-complex-sahiwal-5.mp4', alt: 'Sports complex net night view — night time netting — indoor netting night view — Night cricket practice net in Sahiwal, Pakistan', poster: '/images/works/sports-complex-sahiwal/sports-complex-sahiwal-5-poster.webp' },
      { type: 'video', url: '/images/works/sports-complex-sahiwal/sports-complex-sahiwal-6.mp4', alt: 'multiple sports arena netting — night time cricket netting — multi-ground sports arena netting — night time sports complex in sahimal in pakistan — custom net maker Cereburum Sports', poster: '/images/works/sports-complex-sahiwal/sports-complex-sahiwal-6-poster.webp' },
    ]
  },
  {
    id: 'folding-net-islamabad',
    title: 'Folding Net, Islamabad',
    category: 'Folding Net',
    type: 'Folding Net',
    location: 'Islamabad, Pakistan',
    desc: 'A specialized 40ft x 80ft ground installation in Bahria Town, Islamabad, featuring a unique foldable net design. This custom-engineered system allows the 80ft and 40ft side sections to be retracted, offering maximum flexibility for multi-use spaces without compromising on security.',
    highlights: ['Dual-Side Foldable System', '20-ft Vertical Height Clearance', 'Retractable Perimeter Mesh', '3,200 sq ft Ground Coverage'],
    year: '2022',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/folding-net-islamabad/folding-net-islamabad-cover.webp',
    coverImageAlt: 'Foldable cricket practice net in residential courtyard, Bahria Town Islamabad — custom net manufacturer Pakistan | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/folding-net-islamabad/folding-net-islamabad-cover.webp', alt: 'folding cricket net — Retractable white mesh sports net over paved residential driveway — folding net installation Islamabad, Pakistan' },
      { type: 'image', url: '/images/works/folding-net-islamabad/folding-net-islamabad-1.webp', alt: 'folding sides for ease of use — Full-width foldable cricket practice net enclosure in home courtyard — sports net maker Bahria Town Islamabad' },
      { type: 'image', url: '/images/works/folding-net-islamabad/folding-net-islamabad-2.webp', alt: '2 customized folding net sides — Rooftop foldable sports net on steel pole structure with city skyline — custom net installation Islamabad Pakistan' },
      { type: 'image', url: '/images/works/folding-net-islamabad/folding-net-islamabad-3.webp', alt: 'Cricket folding net night view — Night rooftop cricket practice net with natural turf on sides and floodlights — folding net maker Pakistan' },
      { type: 'image', url: '/images/works/folding-net-islamabad/folding-net-islamabad-4.webp', alt: 'Cricket folding net night view with lights on — Floodlit outdoor sports court with retractable perimeter netting at night — foldable net manufacturer Islamabad' },
    ]
  },
  {
    id: 'sports-arena-gujranwala',
    title: 'Sports Arena, Gujranwala',
    category: 'Sports Arena',
    type: 'Sports Arena',
    location: 'Gujranwala, Pakistan',
    desc: 'A high-performance 90ft x 35ft ground installation in Gujranwala, featuring a hybrid material strategy. By utilizing heavy-duty Parachute 36 for the high-impact side walls and Parachute 24 for the roof, we delivered a structure that is both exceptionally durable and cost-effective.',
    highlights: ['Hybrid Material Engineering', 'Reinforced Parachute 36 Sides', 'Lightweight Parachute 24 Roof', '25-ft Vertical Height Clearance'],
    year: '2024',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/sports-arena-gujranwala/sports-arena-gujranwala-cover.webp',
    coverImageAlt: 'Floodlit cricket sports arena netting in Gujranwala, Punjab — custom net manufacturer Pakistan | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/sports-arena-gujranwala/sports-arena-gujranwala-cover.webp', alt: 'white mesh sports arena enclosure with LED floodlight poles at night — net installation Gujranwala, Pakistan' },
      { type: 'image', url: '/images/works/sports-arena-gujranwala/sports-arena-gujranwala-1.webp', alt: 'Indoor cricket ground netting — Empty concrete cricket court inside fully netted urban sports arena — hybrid parachute netting Gujranwala Pakistan' },
      { type: 'image', url: '/images/works/sports-arena-gujranwala/sports-arena-gujranwala-2.webp', alt: 'Cricket netting front view — Parachute 36 reinforced side wall netting with roof mesh on sports cage — cricket arena net maker Gujranwala' },
      { type: 'image', url: '/images/works/sports-arena-gujranwala/sports-arena-gujranwala-3.webp', alt: 'Cricket netting front view — Wide night view of boxed sports arena with perimeter floodlights and roof net — custom net installation Punjab Pakistan' },
      { type: 'image', url: '/images/works/sports-arena-gujranwala/sports-arena-gujranwala-4.webp', alt: 'cricket arena netting night view from outside — Exterior night view of illuminated cricket arena net beside residential apartments — sports net manufacturer Gujranwala' },
    ]
  },
  {
    id: 'cricket-pitch-layyah',
    title: 'Cricket Pitch, Layyah',
    category: 'Cricket Pitch',
    type: 'Cricket Pitch',
    location: 'Layyah, Pakistan',
    desc: 'A specialized single-lane cricket practice pitch installation in Layyah, utilizing ultra-strong Parachute 60 netting. This 75ft long enclosure was custom-designed for bamboo pole integration, providing a high-tenacity, professional-grade practice environment for local athletes.',
    highlights: ['Industrial-Grade Parachute 60', 'Custom Bamboo Pole Integration', '75-ft Professional Pitch Length'],
    year: '2023',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/cricket-pitch-layyah/cricket-pitch-layyah-cover.webp',
    coverImageAlt: 'Single-lane cricket practice pitch with bamboo pole netting in Layyah, Punjab — custom net manufacturer Pakistan | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/cricket-pitch-layyah/cricket-pitch-layyah-cover.webp', alt: 'Cricket pitch of heavy duty net — 75ft outdoor cricket practice net cage on bamboo pole frame — cricket pitch installation Layyah, Pakistan' },
      { type: 'image', url: '/images/works/cricket-pitch-layyah/cricket-pitch-layyah-1.webp', alt: 'Cricket practice pitch front view — Long rectangular cricket batting cage with concrete practice pitch on dirt ground — sports net maker Layyah Punjab' },
      { type: 'image', url: '/images/works/cricket-pitch-layyah/cricket-pitch-layyah-2.webp', alt: 'Long cricket pitch netting with bamboo pole frame — Bamboo pole cricket net structure with white side and roof mesh over pitch strip — Parachute netting installation Pakistan' },
      { type: 'image', url: '/images/works/cricket-pitch-layyah/cricket-pitch-layyah-3.webp', alt: 'Cricket practice pitch bowling side — Single-lane cricket practice enclosure with bamboo frame and reinforced white mesh — custom net installation Layyah' },
      { type: 'image', url: '/images/works/cricket-pitch-layyah/cricket-pitch-layyah-4.webp', alt: 'Cricket pitch net packaging — Stacked white cricket net bundles packaged with blue rope for Layyah project delivery — net manufacturer Pakistan' },
      { type: 'image', url: '/images/works/cricket-pitch-layyah/cricket-pitch-layyah-5.webp', alt: 'Custom cricket net packaging with labels — Labeled Parachute cricket net panels marked for left, right and mid sides — custom net maker Layyah Punjab' },
      { type: 'image', url: '/images/works/cricket-pitch-layyah/cricket-pitch-layyah-6.webp', alt: 'Custom cricket net packaging with size tags — Hybrid Parachute 24 and Parachute 36 net bundles with size tags for cricket pitch — sports net manufacturing Pakistan' },
      { type: 'image', url: '/images/works/cricket-pitch-layyah/cricket-pitch-layyah-7.webp', alt: 'Cricket net close shot with white parachute border — Close-up of high-tension Parachute 60 diamond weave cricket netting with reinforced border — net material Pakistan' },
    ]
  },
  {
    id: 'sports-complex-peshawar',
    title: 'Sports Complex, Peshawar',
    category: 'Sports Complex',
    type: 'Sports Complex',
    location: 'Peshawar, Pakistan',
    desc: 'An ambitious multi-ground development in Peshawar featuring three interconnected arenas installed at a towering 40-foot height. This project showcases our largest single-span roof installation—a massive 90ft x 112ft section—all manufactured and deployed using premium Parachute 36 netting.',
    highlights: ['Triple Interconnected Grounds', '90ft x 112ft Single Roof Span', 'Full Parachute 36 Construction', '48-Hour Non-Stop Rapid Deployment'],
    year: '2026',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/sports-arena-peshawar/sports-arena-peshawar-cover.webp',
    coverImageAlt: 'Triple-ground sports complex netting installation at night in Peshawar, KPK — net manufacturer Pakistan | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/sports-arena-peshawar/sports-arena-peshawar-cover.webp', alt: 'Multiple sports arena netting — Night construction of floodlit sports arena with crane installing roof netting — sports complex Peshawar, Pakistan' },
      { type: 'image', url: '/images/works/sports-arena-peshawar/sports-arena-peshawar-1.webp', alt: 'Cricket Net installation with crane — Tadano crane deploying Parachute 36 roof net on 40ft arena poles during rapid installation — net maker Peshawar KPK' },
      { type: 'image', url: '/images/works/sports-arena-peshawar/sports-arena-peshawar-2.webp', alt: 'Sports complex with concrete ground and night lights — Completed floodlit sports court enclosure with full roof mesh at night — custom net installation Peshawar Pakistan' },
      { type: 'image', url: '/images/works/sports-arena-peshawar/sports-arena-peshawar-3.webp', alt: 'Net installtions team after completing project— Youth athletes on completed floodlit sports arena after net installation — sports netting Peshawar, KPK Pakistan' },
      { type: 'image', url: '/images/works/sports-arena-peshawar/sports-arena-peshawar-4.webp', alt: 'Cricket net quality view after net installation — Side view of white perimeter sports netting with stadium floodlights at night — net manufacturer Peshawar' },
      { type: 'image', url: '/images/works/sports-arena-peshawar/sports-arena-peshawar-5.webp', alt: 'Cricket net quality view after net installation — Parachute 36 white mesh side netting on concrete sports court under floodlights — custom net installation KPK Pakistan' },
      { type: 'video', url: '/images/works/sports-arena-peshawar/sports-arena-peshawar-6.mp4', alt: 'Sports complex view during net installation — Sports complex roof net installation with crane at night — rapid 48-hour deployment video Peshawar, Pakistan' },
      { type: 'video', url: '/images/works/sports-arena-peshawar/sports-arena-peshawar-7.mp4', alt: 'Sports complex night view with lights on — Triple interconnected sports arena walkthrough under floodlights at night — net maker Peshawar KPK Pakistan' },
    ]
  },
  {
    id: 'practice-ground-gujranwala',
    title: 'Practice Ground, Gujranwala',
    category: 'Sports Arena',
    type: 'Sports Arena',
    location: 'Gujranwala, Pakistan',
    desc: 'A large-scale practice facility in Gujranwala featuring a 95ft x 74ft footprint and an impressive 30-foot vertical clearance. Our team demonstrated extreme efficiency by completing the full manufacturing and installation process within a tight 6-hour window.',
    highlights: ['7,030 sq ft Ground Coverage', '30-ft Vertical Height Clearance', 'Record 6-Hour Express Installation'], 
    year: '2023',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/practice-ground-gujranwala/practice-ground-gujranwala-cover.webp',
    coverImageAlt: 'Cricket net on steel wires and iron poles outer view — practice ground sports netting in Gujranwala, Punjab — custom net manufacturer Pakistan | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/practice-ground-gujranwala/practice-ground-gujranwala-cover.webp', alt: 'cricket practice net with wires on steel poles — sports practice white mesh on steel poles in urban Gujranwala — net installation Punjab Pakistan' },
      { type: 'video', url: '/images/works/practice-ground-gujranwala/practice-ground-gujranwala-1.mp4', alt: 'Cricket practice net installation with folding lift — Workers installing practice ground roof netting from scissor lift at height — rapid 6-hour deployment video Gujranwala Punjab' },
      { type: 'video', url: '/images/works/practice-ground-gujranwala/practice-ground-gujranwala-2.mp4', alt: 'Cricket net installation with folding siri— Installing practice ground netting walkthrough under clear sky — sports net maker Gujranwala Pakistan' },
    ]
  },
  {
    id: 'roof-top-net-sialkot',
    title: 'Roof Top Net, Gohadpur, Sialkot',
    category: 'Rooftop Net',
    type: 'Rooftop Net',
    location: 'Sialkot, Pakistan',
    desc: 'A precision-engineered rooftop installation in Sialkot, designed to maximize high-altitude playing space while ensuring total ball retention. Utilizing lightweight yet durable Parachute 24, we manufactured and installed this custom net to cover an 84ft x 38ft area with full 20-foot vertical protection.',
    highlights: ['Parachute 24 High-Tenacity Mesh', '3,192 sq ft Playing Area', '20-ft Full-Perimeter Enclosure'],
    year: '2025',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/roof-top-net-gohadpur-sialkot/roof-top-net-sialkot-cover.webp',
    coverImageAlt: 'Rooftop sports net installation with ceiling mesh in Gohadpur, Sialkot — custom net manufacturer Pakistan | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/roof-top-net-gohadpur-sialkot/roof-top-net-sialkot-cover.webp', alt: 'rooftop cricket net night view outside — Night rooftop sports enclosure with full perimeter and ceiling netting on steel poles — net installation Sialkot, Pakistan' },
      { type: 'image', url: '/images/works/roof-top-net-gohadpur-sialkot/roof-top-net-sialkot-1.webp', alt: 'rooftop cricket net night view with lights on — Floodlit rooftop perimeter net with upward stadium lights at night — sports net maker Gohadpur Sialkot Punjab' },
      { type: 'image', url: '/images/works/roof-top-net-gohadpur-sialkot/roof-top-net-sialkot-2.webp', alt: 'cricket net on roof top after installation — Installation team gathered inside completed rooftop net cage after deployment — custom net installation Sialkot Pakistan' },
      { type: 'image', url: '/images/works/roof-top-net-gohadpur-sialkot/roof-top-net-sialkot-3.webp', alt: 'night time rooftop net box inside view — White pole rooftop net frame with side and ceiling Parachute mesh under floodlights — net manufacturer Punjab' },
      { type: 'image', url: '/images/works/roof-top-net-gohadpur-sialkot/roof-top-net-sialkot-4.webp', alt: 'rooftop net night view after installation — Wide rooftop view of sports net enclosure with city skyline at night — rooftop cricket cage Sialkot Pakistan' },
      { type: 'image', url: '/images/works/roof-top-net-gohadpur-sialkot/roof-top-net-sialkot-5.webp', alt: 'rooftop net night view after installation — Rooftop net ceiling mesh draped over floodlit playing area after final installation — net maker Gohadpur Sialkot' },
      { type: 'image', url: '/images/works/roof-top-net-gohadpur-sialkot/roof-top-net-sialkot-6.webp', alt: 'rooftop cricket net box corner view at night — Interior corner of rooftop sports net with white side mesh — custom net installation Sialkot Punjab' }
    ]
  },
  {
    id: 'sports-arena-khariyan',
    title: 'Sports Arena, Khariyan',
    category: 'Sports Arena',
    type: 'Sports Arena',
    location: 'Kharian, Pakistan',
    desc: 'A professional-grade arena installation in Kharian, featuring a high-clearance 32-foot vertical enclosure for a 95ft x 38ft playing area. Our expert team delivered a seamless experience through 8 hours of non-stop onsite manufacturing and installation, ensuring the facility was game-ready in a single shift.',
    highlights: ['32-ft Vertical High-Clearance', '3,610 sq ft Total Coverage', '8-Hour Non-Stop Rapid Deployment'],
    year: '2026',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/sports-arena-khariyan/sports-arena-khariyan-cover.webp',
    coverImageAlt: 'Cricket arena ground night outside view — sports arena netting installation in Kharian, Punjab — net manufacturer Pakistan | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/sports-arena-khariyan/sports-arena-khariyan-cover.webp', alt: 'Night sports arena with white mesh on black steel poles and portable floodlight — net installation Kharian, Pakistan' },
      { type: 'image', url: '/images/works/sports-arena-khariyan/sports-arena-khariyan-1.webp', alt: 'Cricket net installation team after net installation — Installation team photo in front of completed sports arena net enclosure at night — custom net maker Kharian Punjab' },
      { type: 'image', url: '/images/works/sports-arena-khariyan/sports-arena-khariyan-2.webp', alt: 'Sports netting arena entry door — Floodlit black mesh sports cage perimeter netting with dramatic side lighting — sports net installation Kharian Pakistan' },
      { type: 'image', url: '/images/works/sports-arena-khariyan/sports-arena-khariyan-3.webp', alt: 'Sports arena night time corner view — Empty sports arena court inside full perimeter and roof netting at night — net manufacturer Kharian Punjab' },
      { type: 'image', url: '/images/works/sports-arena-khariyan/sports-arena-khariyan-4.webp', alt: 'Sports arena net instaation with portable scaffold — Mobile scaffolding tower inside sports arena for ceiling net installation — rapid 8-hour deployment Kharian Pakistan' },
      { type: 'image', url: '/images/works/sports-arena-khariyan/sports-arena-khariyan-5.webp', alt: 'Team installing sports net on mobile scaffold — Workers on scaffold installing rooftop sports net mesh at height — custom net installation Kharian Punjab' },
      { type: 'image', url: '/images/works/sports-arena-khariyan/sports-arena-khariyan-6.webp', alt: 'cricket arena inside view with concrete ground — Completed clearance sports arena interior with ceiling net at night — net maker Kharian Pakistan' }
    ]
  },
  {
    id: 'sports-arena-wazirabad',
    title: 'Sports Arena, Wazirabad',
    category: 'Sports Arena',
    type: 'Sports Arena',
    location: 'Wazirabad, Pakistan',
    desc: 'A massive-scale installation in Wazirabad featuring a sprawling 200ft x 74ft professional playing area. This project required expert manufacturing and precision tensioning to cover over 14,000 square feet of ground, providing a seamless 20-foot high enclosure for high-capacity sports use.',
    highlights: ['Massive 14,800 sq ft Coverage', '20-ft Full-Perimeter Protection', 'Seamless Large-Span Manufacturing'],
    year: '2025',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/sports-arena-wazirabad/sports-arena-wazirabad-cover.webp',
    coverImageAlt: 'Cricket sports arena with natural ground — Massive 200ft sports arena netting installation in Wazirabad, Punjab — net manufacturer Pakistan | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/sports-arena-wazirabad/sports-arena-wazirabad-cover.webp', alt: 'Cricket sports arena with natural ground — 200ft x 74ft sports arena with full perimeter and roof mesh on grass field — net installation Wazirabad, Pakistan' },
      { type: 'image', url: '/images/works/sports-arena-wazirabad/sports-arena-wazirabad-1.webp', alt: 'sports arena with scaffold after installation — Large-span sports ground enclosure with netting under foggy sky — custom net maker Wazirabad Punjab' },
      { type: 'image', url: '/images/works/sports-arena-wazirabad/sports-arena-wazirabad-2.webp', alt: 'quality view sports arena after net installation — Side view of sports arena white mesh fence on grassy field — sports net installation Wazirabad Pakistan' },
      { type: 'image', url: '/images/works/sports-arena-wazirabad/sports-arena-wazirabad-3.webp', alt: 'net closeup after installation — Close-up of tensioned white weave sports net on black steel pole — net manufacturer Wazirabad Punjab' },
      { type: 'video', url: '/images/works/sports-arena-wazirabad/sports-arena-wazirabad-4.mp4', alt: 'sports arena viwe after installation of net with iron poles and naturall grass — sports arena netting walkthrough along perimeter fence — custom net installation video Wazirabad Pakistan' }
    ]
  },
  {
    id: 'roof-top-net-sialkot-daska-road',
    title: 'Roof Top Net, Daska Road, Sialkot',
    category: 'Rooftop Net',
    type: 'Rooftop Net',
    location: 'Sialkot, Pakistan',
    desc: 'Precision-engineered in Sialkot, this rooftop net maximizes playing space with total ball retention. Custom-manufactured from durable Parachute 60, it covers a 60ft x 20ft area with full 15ft vertical protection.',
    highlights: ['Parachute 60 High-Tenacity Mesh', '1,200 sq ft Playing Area', '15-ft Full-Perimeter Enclosure'],
    year: '2026',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/roof-top-net-daska-road-sialkot/roof-top-net-daska-road-sialkot-cover.webp',
    coverImageAlt: 'Rooftop Parachute sports net installation on Daska Road, Sialkot — custom net manufacturer Pakistan | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/roof-top-net-daska-road-sialkot/roof-top-net-daska-road-sialkot-cover.webp', alt: 'Rooftop cricket cage with white mesh and ceiling net under floodlights at night — net installation Daska Road Sialkot, Pakistan' },
      { type: 'image', url: '/images/works/roof-top-net-daska-road-sialkot/roof-top-net-daska-road-sialkot-1.webp', alt: 'Roottop net front view — Floodlit rooftop sports enclosure and roof netting on concrete roof — sports net maker Sialkot Punjab' },
      { type: 'image', url: '/images/works/roof-top-net-daska-road-sialkot/roof-top-net-daska-road-sialkot-2.webp', alt: 'Roof top cricket net cage on building top — Long interior view of rooftop net cage with lights on — custom net installation Daska Road Sialkot' },
      { type: 'video', url: '/images/works/roof-top-net-daska-road-sialkot/roof-top-net-daska-road-sialkot-3.mp4', alt: 'Rooftop net complete view after installation at night — Completed rooftop Parachute sports net walkthrough under floodlights at night — net maker Sialkot Pakistan' }
    ]
  },
  {
    id: 'mian-indoor-cricket-club-pasrur',
    title: 'Mian Indoor Cricket Club, Pasrur',
    category: 'Sports Arena',
    type: 'Sports Arena',
    location: 'Pasrur, Pakistan',
    desc: 'A state-of-the-art indoor sports arena installation featuring an 80ft x 40ft playing area with 20ft vertical coverage. Utilizing high-quality Parachute 36 netting, our team completed the full custom manufacturing and installation process within a tight 6-hour window.',
    highlights: ['80ft x 40ft Playing Area', '20-ft Vertical Height', 'Record 6-Hour Express Installation'],
    year: '2026',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/mian-indoor-cricket-club-pasrur/mian-indoor-cricket-club-pasrur-cover.webp',
    coverImageAlt: 'Indoor cricket clup night view installation — Indoor cricket club net installation in Pasrur, Punjab — custom net manufacturer Pakistan | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/mian-indoor-cricket-club-pasrur/mian-indoor-cricket-club-pasrur-cover.webp', alt: 'Indoor cricket clup night view installation — Indoor cricket arena net during installation at Indoor Cricket Club — net installation Pasrur, Pakistan' },
      { type: 'image', url: '/images/works/mian-indoor-cricket-club-pasrur/mian-indoor-cricket-club-pasrur-1.webp', alt: 'Cricket club net installation starting view — Workers laying out white Parachute cricket net on grass at night — sports net maker Pasrur Punjab' },
      { type: 'image', url: '/images/works/mian-indoor-cricket-club-pasrur/mian-indoor-cricket-club-pasrur-2.webp', alt: 'Cricket club net front view at night — Completed indoor cricket lane with roof mesh and concrete pitch  — custom net installation Pasrur Pakistan' },
      { type: 'image', url: '/images/works/mian-indoor-cricket-club-pasrur/mian-indoor-cricket-club-pasrur-3.webp', alt: 'Cricket club net after installation back view — Floodlit indoor cricket club enclosure with brick walls and ceiling netting at night — net manufacturer Pasrur Sialkot' },
      { type: 'video', url: '/images/works/mian-indoor-cricket-club-pasrur/mian-indoor-cricket-club-pasrur-4.mp4', alt: 'Cricket club net quality check after installation — Close-up of Parachute white cricket net mesh indoor installation — net deployment video Pasrur Punjab' },
      { type: 'video', url: '/images/works/mian-indoor-cricket-club-pasrur/mian-indoor-cricket-club-pasrur-5.mp4', alt: 'Complete cricket club view after net install — Indoor Cricket Club white mesh net walkthrough on natural turf — Parachute 36 net maker Pasrur Pakistan' }
    ]
  },
  {
    id: 'cricket-arena-mirpur',
    title: 'Cricket Arena, Mirpur',
    category: 'Sports Arena',
    type: 'Sports Arena',
    location: 'Mirpur, Pakistan',
    desc: 'A state-of-the-art indoor sports ground installation featuring a 100ft x 65ft playing area with 30ft vertical coverage. Built for maximum durability, the facility features high-grade Parachute 36 side netting and Parachute 24 roof coverage, custom-manufactured and precision-installed by our team.',
    highlights: ['100ft x 65ft Playing Area', '30ft Vertical Height', 'Parachute 36 & 24 Netting', 'Custom Manufacture & Fast Installation'],
    year: '2026',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/circket-arena-mirpur/circket-arena-mirpur-1.webp',
    coverImageAlt: 'Cricket arena outer view in morning — Indoor cricket arena with Parachute 36 and 24 netting in Mirpur, AJK — custom net manufacturer Pakistan | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/circket-arena-mirpur/circket-arena-mirpur-1.webp', alt: 'Cricket arena outer view in morning — Exterior view of cricket arena white mesh enclosure with floodlights — net installation Mirpur, Pakistan' },
      { type: 'image', url: '/images/works/circket-arena-mirpur/circket-arena-mirpur-2.webp', alt: 'Cricket arena before net installation — Empty concrete sports court with steel pole framework before netting — cricket arena setup Mirpur AJK' },
      { type: 'image', url: '/images/works/circket-arena-mirpur/circket-arena-mirpur-3.webp', alt: 'Cricket arena after net installation — Floodlit indoor cricket arena interior with Parachute 36 side and Parachute 24 roof net — net maker Mirpur Pakistan' },
      { type: 'image', url: '/images/works/circket-arena-mirpur/circket-arena-mirpur-4.webp', alt: 'Cricket arena outside corner viwe after net install — Night side view of white mesh sports cage illuminated by stadium floodlights — custom net installation Mirpur AJK' },
      { type: 'image', url: '/images/works/circket-arena-mirpur/circket-arena-mirpur-5.webp', alt: 'Crickte arena exterior viwe in morning — Exterior cricket arena perimeter netting at dusk with residential buildings — sports net manufacturer Mirpur Pakistan' },
      { type: 'video', url: '/images/works/circket-arena-mirpur/circket-arena-mirpur-6.mp4', alt: 'Cricket arena complete view after net install — Cricket arena net installation at night with floodlit perimeter mesh — deployment video Mirpur AJK Pakistan' },
      { type: 'video', url: '/images/works/circket-arena-mirpur/circket-arena-mirpur-7.mp4', alt: 'Cricket arena outer view after install — Completed indoor cricket ground netting walkthrough under floodlights — net maker Mirpur Pakistan' }
    ]
  },
  {
    id: 'bloomfield-hall-school-khariyan',
    title: 'Bloomfield Hall School, Khariyan',
    category: 'Sports Complex',
    type: 'Sports Complex',
    location: 'Kharian, Pakistan',
    desc: 'A professional indoor sports enclosure installation designed for school grounds, featuring a 40ft x 40ft playing area with 20ft vertical height. Built to withstand continuous daily student use, the setup utilizes durable Parachute 36 netting for high-impact side protection and lightweight Parachute 24 netting for full roof coverage—ensuring maximum safety and ball retention.',
    highlights: ["40ft x 40ft Footprint", "20ft Height", "Parachute 36 Sides", "Parachute 24 Roof", "School Safety Approved"],
    year: '2026',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/bloomfield-hall-school-khariyan/bloomfield-hall-school-khariyan-1.webp',
    coverImageAlt: 'School sports net enclosure for Bloomfield Hall School Kharian — custom net manufacturer Pakistan | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/bloomfield-hall-school-khariyan/bloomfield-hall-school-khariyan-1.webp', alt: 'school sports cage with white mesh and ceiling net under floodlights on school grounds — net installation Bloomfield Hall Kharian, Pakistan' },
      { type: 'image', url: '/images/works/bloomfield-hall-school-khariyan/bloomfield-hall-school-khariyan-2.webp', alt: 'cricket net cage before installing net — Workers building steel pole frame on concrete pad for school sports enclosure at night — cricket net setup Kharian Punjab' },
      { type: 'image', url: '/images/works/bloomfield-hall-school-khariyan/bloomfield-hall-school-khariyan-3.webp', alt: 'cricket net cage after installing net — Interior of school sports arena with Parachute 36 side and Parachute 24 roof net during installation — net maker Kharian Pakistan' },
      { type: 'image', url: '/images/works/bloomfield-hall-school-khariyan/bloomfield-hall-school-khariyan-4.webp', alt: 'Cricket net after install exterior view — Floodlit school sports cage exterior with worker inspecting completed netting — custom net installation Bloomfield Hall Kharian' },
      { type: 'image', url: '/images/works/bloomfield-hall-school-khariyan/bloomfield-hall-school-khariyan-5.webp', alt: 'Cricket net after install exterior view corner side — Night view of completed 20ft height school sports enclosure glowing under floodlights — sports net manufacturer Kharian Punjab' },
      { type: 'image', url: '/images/works/bloomfield-hall-school-khariyan/bloomfield-hall-school-khariyan-6.webp', alt: 'Cricket net cage door entry — Close-up of white mesh sports net gate with black frame at school arena corner — net installation Kharian Pakistan' },
      { type: 'video', url: '/images/works/bloomfield-hall-school-khariyan/bloomfield-hall-school-khariyan-7.mp4', alt: 'Bloomfield Hall School building exterior at night with cricket net ground complete installation — school sports net project Kharian Punjab Pakistan' },
      { type: 'video', url: '/images/works/bloomfield-hall-school-khariyan/bloomfield-hall-school-khariyan-8.mp4', alt: 'Cricket arena complete interior view after net isntall — School sports arena net installation interior with ceiling mesh and turf rolls — deployment video Kharian Pakistan' },
      { type: 'video', url: '/images/works/bloomfield-hall-school-khariyan/bloomfield-hall-school-khariyan-9.mp4', alt: 'Cricket arena top view during net installation — Close-up of Parachute mesh school sports net at night — net maker Bloomfield Hall Kharian' }
    ]
  },
  {
    id: 'sports-complex-mardan',
    title: 'Sports Complex, Mardan',
    category: 'Sports Complex',
    type: 'Sports Complex',
    location: 'Mardan, Pakistan',
    desc: 'A state-of-the-art sports arena enclosure installed at a sports complex in Mardan, featuring a 90ft x 45ft playing area with 30ft vertical height coverage. Engineered for high-impact durability and safety, the complete netting system was custom-manufactured and fully installed overnight in a single-night express execution by our expert team.',
    highlights: ["90ft x 45ft Playing Area", "30ft Vertical Height", "Overnight Express Installation", "Custom Heavy-Duty Netting"],
    year: '2026',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/sports-complex-mardan/sports-complex-mardan-1.webp',
    coverImageAlt: 'Cricket cage corner view — Sports complex netting installation in morining in Mardan, KPK — custom net manufacturer Pakistan | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/sports-complex-mardan/sports-complex-mardan-1.webp', alt: 'Sports complex exterior in morning — Wide view of galvanized steel frame with white mesh on concrete court in residential Mardan — net installation Mardan, KPK Pakistan' },
      { type: 'image', url: '/images/works/sports-complex-mardan/sports-complex-mardan-2.webp', alt: 'Overnight view before starting net installation — Workers opening net packagaing to start net installation — sports net setup Mardan Pakistan' },
      { type: 'image', url: '/images/works/sports-complex-mardan/sports-complex-mardan-3.webp', alt: 'Cricket cage net setting corner binding — Large mesh panel hoisted onto galvanized perimeter frame by worker on scaffolding — net maker Mardan KPK' },
      { type: 'image', url: '/images/works/sports-complex-mardan/sports-complex-mardan-4.webp', alt: 'Completed floodlit sports arena interior after installation  — Sesh enclosure on concrete court with worker adjusting netting under stadium lights — custom net installation Mardan Pakistan' },
      { type: 'video', url: '/images/works/sports-complex-mardan/sports-complex-mardan-5.mp4', alt: 'Complete view of ground after net install — White perimeter mesh on galvanized poles at dusk on residential sports court — deployment video Mardan KPK Pakistan' },
      { type: 'video', url: '/images/works/sports-complex-mardan/sports-complex-mardan-6.mp4', alt: 'Cricket ground view after net installation at dusk — Perimeter mesh deployed on galvanized steel frame between residential buildings — net manufacturer Mardan Pakistan' },
      { type: 'video', url: '/images/works/sports-complex-mardan/sports-complex-mardan-7.mp4', alt: 'Cricket arena net installation top view — White heavy duty mesh tensioned over floodlit interlocking brick arena at night — net maker Mardan KPK Pakistan' }
    ]
  },
  {
    id: 'house-roof-top-net-sialkot',
    title: 'House Roof Top Net, Sialkot',
    category: 'Rooftop Net',
    type: 'Rooftop Net',
    location: 'Sialkot, Pakistan',
    desc: 'A heavy-duty rooftop sports enclosure custom-manufactured in Sialkot, featuring a specialized L-shaped layout tailored to maximize roof surface area. Built to withstand high wind exposure and harsh outdoor conditions, the entire setup utilizes ultra-durable Parachute 60 netting to deliver maximum tensile strength, impact absorption, and long-lasting safety for rooftop play.',
    highlights: ["Custom L-Shaped Roof Layout", "Parachute 60 Netting", "High Wind & Weather Resistant", "Rooftop Safety Enclosure"],
    year: '2025',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/house-roof-top-net-sialkot/house-roof-top-net-sialkot-1.webp',
    coverImageAlt: 'L-shaped Parachute rooftop net installation on house roof in Sialkot — custom net manufacturer Pakistan | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/house-roof-top-net-sialkot/house-roof-top-net-sialkot-1.webp', alt: 'Rooftop net installation in progress — White mesh ceiling and side netting on bamboos with stepladder on residential terrace — net installation Sialkot, Pakistan' },
      { type: 'image', url: '/images/works/house-roof-top-net-sialkot/house-roof-top-net-sialkot-2.webp', alt: 'L-shaped rooftop sports cage at night — Completed Parachute 60 white mesh enclosure with worker on decorative concrete roof — net maker Sialkot Punjab' },
      { type: 'image', url: '/images/works/house-roof-top-net-sialkot/house-roof-top-net-sialkot-3.webp', alt: 'Rooftop cricket net box night view — Wide L-shaped white mesh cage with bamboo poles and urban skyline — custom net installation Sialkot Pakistan' },
      { type: 'image', url: '/images/works/house-roof-top-net-sialkot/house-roof-top-net-sialkot-4.webp', alt: 'Rooftop net ceiling interior at night — Low angle along Parachute 60 overhead mesh toward enclosed playing area — sports net manufacturer Sialkot Punjab' },
      { type: 'video', url: '/images/works/house-roof-top-net-sialkot/house-roof-top-net-sialkot-5.mp4', alt: 'House rooftop net installation walkthrough — Parachute 60 mesh deployment on residential roof with completed interior corner view — deployment video Sialkot Pakistan' }
    ]
  },
  {
    id: 'cricket-pitch-bharth-sialkot',
    title: 'Cricket Pitch, Bharth, Sialkot',
    category: 'Cricket Pitch',
    type: 'Cricket Pitch',
    location: 'Bharth, Sialkot, Pakistan',
    desc: 'A single-lane cricket practice pitch in Bharth, Sialkot, measuring 42 ft long, 14 ft wide, and 12 ft high. The enclosure is built on a custom-designed iron frame for long-term life and fitted with quality Parachute 36 netting, giving local athletes a durable professional-grade practice lane.',
    highlights: ['Quality Parachute 36 Netting', 'Custom-Designed Iron Frame', '42-ft × 14-ft × 12-ft Lane'],
    netSpec: 'Parachute 36',
    frame: 'Custom-designed iron frame',
    year: '2026',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/cricket-pitch-bharth-sialkot/cricket-pitch-bharth-sialkot-cover.webp',
    coverImageAlt: 'Night view of a 42 ft cricket practice pitch on a custom iron frame in Bharth, Sialkot — Parachute 36 net manufacturer Pakistan | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/cricket-pitch-bharth-sialkot/cricket-pitch-bharth-sialkot-cover.webp', alt: 'Cricket practice pitch at night — 42 ft Parachute 36 enclosure on a black iron frame beside a residential house in Bharth, Sialkot, Pakistan' },
      { type: 'image', url: '/images/works/cricket-pitch-bharth-sialkot/cricket-pitch-bharth-sialkot-1.webp', alt: 'Interior of the cricket practice lane — Parachute 36 side and roof mesh on iron poles over a dirt pitch — net installation Bharth, Sialkot' },
      { type: 'image', url: '/images/works/cricket-pitch-bharth-sialkot/cricket-pitch-bharth-sialkot-2.webp', alt: 'Long side wall of the cricket cage — Parachute 36 mesh tied to a custom iron pole frame — sports net maker Bharth, Sialkot' },
      { type: 'image', url: '/images/works/cricket-pitch-bharth-sialkot/cricket-pitch-bharth-sialkot-3.webp', alt: 'Front of the 14 ft wide cricket lane — iron frame with Parachute 36 walls and roof net over the practice strip — custom net installation Bharth, Sialkot' },
      { type: 'image', url: '/images/works/cricket-pitch-bharth-sialkot/cricket-pitch-bharth-sialkot-4.webp', alt: 'Installation team in front of the completed Parachute 36 cricket net at night — cricket pitch netting Bharth, Sialkot, Pakistan' },
      { type: 'image', url: '/images/works/cricket-pitch-bharth-sialkot/cricket-pitch-bharth-sialkot-5.webp', alt: 'Bowling-end view of the 42 ft practice lane — open iron-frame enclosure with Parachute 36 side and roof netting — net maker Bharth, Sialkot' },
      { type: 'image', url: '/images/works/cricket-pitch-bharth-sialkot/cricket-pitch-bharth-sialkot-6.webp', alt: 'Length view of the completed cricket pitch at night — custom iron frame and Parachute 36 enclosure in a residential courtyard — net installation Bharth, Sialkot' },
      { type: 'image', url: '/images/works/cricket-pitch-bharth-sialkot/cricket-pitch-bharth-sialkot-7.webp', alt: 'Close side view of Parachute 36 mesh on the iron frame — black steel poles beside the cricket practice lane — custom net manufacturer Bharth, Sialkot' },
    ]
  },
  {
    id: 'k-cricket-arena-sialkot',
    title: 'K Cricket Arena, Sialkot',
    category: 'Sports Arena',
    type: 'Sports Arena',
    location: 'Sialkot, Pakistan',
    desc: 'A 100 ft by 50 ft cricket arena in Sialkot, enclosed to a height of 30 ft over natural grass. The court is built on a strong iron frame, with Parachute 36 netting on the sides and Parachute 24 mesh across the roof.',
    highlights: ['Parachute 36 Sides, Parachute 24 Roof', 'Strong Iron Frame', '30-ft Height Clearance', '100-ft × 50-ft Natural Grass'],
    netSpec: 'Parachute 36 sides, Parachute 24 roof',
    frame: 'Strong iron frame',
    year: '2026',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/k-cricket-arena-sialkot/k-cricket-arena-cover.webp',
    coverImageAlt: 'Floodlit cricket arena on a strong iron frame over natural grass in Sialkot — Parachute net manufacturer Pakistan | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/k-cricket-arena-sialkot/k-cricket-arena-cover.webp', alt: 'Night exterior of K Cricket Arena — black iron frame with Parachute side netting over a natural grass court in Sialkot, Pakistan' },
      { type: 'image', url: '/images/works/k-cricket-arena-sialkot/k-cricket-arena-1.webp', alt: 'Corner view of the 100 ft cricket arena at night — Parachute 36 mesh on the iron frame above natural grass — net installation Sialkot' },
      { type: 'image', url: '/images/works/k-cricket-arena-sialkot/k-cricket-arena-2.webp', alt: 'Iron frame of the cricket arena before the roof net — floodlit pole structure over the grass court — sports arena installation Sialkot' },
      { type: 'image', url: '/images/works/k-cricket-arena-sialkot/k-cricket-arena-3.webp', alt: 'Wide night view along the iron roof grid — 30 ft high cricket arena frame with side netting and natural grass — net maker Sialkot' },
      { type: 'image', url: '/images/works/k-cricket-arena-sialkot/k-cricket-arena-4.webp', alt: 'Interior of the grass cricket court — Parachute 24 roof mesh and Parachute 36 side walls on the iron frame — cricket arena Sialkot, Pakistan' },
      { type: 'image', url: '/images/works/k-cricket-arena-sialkot/k-cricket-arena-5.webp', alt: 'Length view inside K Cricket Arena — natural grass under the roof net with side mesh on tall iron poles — custom net installation Sialkot' },
      { type: 'video', url: '/images/works/k-cricket-arena-sialkot/k-cricket-arena-6.mp4', alt: 'Night walkthrough of K Cricket Arena — iron frame, Parachute netting, and natural grass court in Sialkot, Pakistan' },
      { type: 'video', url: '/images/works/k-cricket-arena-sialkot/k-cricket-arena-7.mp4', alt: 'Floodlit cricket arena exterior at night — Parachute 36 sides on the strong iron frame — net installation video Sialkot' },
      { type: 'video', url: '/images/works/k-cricket-arena-sialkot/k-cricket-arena-8.mp4', alt: 'Interior view of the 100 ft by 50 ft grass court under the Parachute 24 roof — cricket arena walkthrough Sialkot, Pakistan' },
    ]
  },
  {
    id: 'futsal-ground-fast-islamabad',
    title: 'Futsal Ground, FAST Islamabad',
    category: 'Sports Arena',
    type: 'Sports Arena',
    location: 'Islamabad, Pakistan',
    desc: 'A futsal ground at FAST Islamabad, measuring 130 ft by 98 ft and enclosed to a height of 25 ft. The court is wrapped in Parachute 24 netting, with a steel fence along the bottom of the enclosure.',
    highlights: ['Parachute 24 Netting', 'Steel Fence Along the Bottom', '25-ft Height Clearance', '130-ft × 98-ft Court'],
    clientType: 'University',
    netSpec: 'Parachute 24',
    frame: 'Steel fence along the bottom',
    year: '2026',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/futsal-ground-fast-islamabad/futsal-ground-fast-islamabad-cover.webp',
    coverImageAlt: 'Floodlit futsal ground at FAST Islamabad with Parachute 24 netting above a steel fence — sports net manufacturer Pakistan | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/futsal-ground-fast-islamabad/futsal-ground-fast-islamabad-cover.webp', alt: 'Night view of the FAST Islamabad futsal ground — high Parachute 24 net above a steel fence around the green court' },
      { type: 'image', url: '/images/works/futsal-ground-fast-islamabad/futsal-ground-fast-islamabad-1.webp', alt: 'Daytime exterior of the futsal enclosure — black mesh on tall poles over a steel fence — net installation Islamabad, Pakistan' },
      { type: 'image', url: '/images/works/futsal-ground-fast-islamabad/futsal-ground-fast-islamabad-2.webp', alt: 'Floodlit artificial-turf futsal court at night — Parachute 24 perimeter net and goals at FAST-NUCES Islamabad' },
      { type: 'image', url: '/images/works/futsal-ground-fast-islamabad/futsal-ground-fast-islamabad-3.webp', alt: 'Wide daytime view down the 130 ft futsal court — Parachute 24 side netting and steel fence — sports arena Islamabad' },
      { type: 'image', url: '/images/works/futsal-ground-fast-islamabad/futsal-ground-fast-islamabad-4.webp', alt: 'Sideline night view of the FAST futsal ground — striped turf, dugout, and high perimeter net beside the NUCES building' },
      { type: 'image', url: '/images/works/futsal-ground-fast-islamabad/futsal-ground-fast-islamabad-5.webp', alt: 'Corner of the futsal court in daylight — steel fence with Parachute 24 mesh above the touchline — net maker Islamabad' },
      { type: 'image', url: '/images/works/futsal-ground-fast-islamabad/futsal-ground-fast-islamabad-6.webp', alt: 'Goal end of the futsal ground at night — blue goal, steel fence, and draped Parachute 24 net — custom net installation Islamabad' },
      { type: 'video', url: '/images/works/futsal-ground-fast-islamabad/futsal-ground-fast-islamabad-7.mp4', alt: 'Walkthrough of the FAST Islamabad futsal ground — Parachute 24 netting above the steel fence' },
      { type: 'video', url: '/images/works/futsal-ground-fast-islamabad/futsal-ground-fast-islamabad-8.mp4', alt: 'Floodlit futsal court at FAST Islamabad — 130 ft by 98 ft enclosure with Parachute 24 mesh' },
      { type: 'video', url: '/images/works/futsal-ground-fast-islamabad/futsal-ground-fast-islamabad-9.mp4', alt: 'Perimeter view of the futsal arena — steel fence along the bottom and 25 ft Parachute 24 netting above' },
    ]
  },
  {
    id: 'home-roof-top-net-sialkot',
    title: 'Home Roof Top Net, Sialkot',
    category: 'Rooftop Net',
    type: 'Rooftop Net',
    location: 'Sialkot, Pakistan',
    desc: 'A home rooftop net in Sialkot, sized for everyday practice at 40 ft by 23 ft with 11 ft of height. The enclosure is made from quality Parachute 36 netting and supported on bamboo poles, a cost-effective frame that still keeps balls inside the terrace.',
    highlights: ['Quality Parachute 36 Netting', 'Bamboo Support', 'Cost-Effective Home Net', '40-ft × 23-ft × 11-ft Roof'],
    clientType: 'Home',
    netSpec: 'Parachute 36',
    frame: 'Bamboo poles',
    year: '2026',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/home-roof-top-net-sialkot/home-roof-top-net-sialkot-cover.webp',
    coverImageAlt: 'Home rooftop net on a residential terrace in Sialkot — Parachute 36 mesh on bamboo poles | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/home-roof-top-net-sialkot/home-roof-top-net-sialkot-cover.webp', alt: 'Overhead night view of a home rooftop net in Sialkot — Parachute 36 mesh on bamboo poles around a 40 ft by 23 ft terrace' },
      { type: 'image', url: '/images/works/home-roof-top-net-sialkot/home-roof-top-net-sialkot-1.webp', alt: 'High angle of the completed home rooftop enclosure — black Parachute 36 side netting on bamboo poles — net installation Sialkot, Pakistan' },
      { type: 'image', url: '/images/works/home-roof-top-net-sialkot/home-roof-top-net-sialkot-2.webp', alt: 'Length view down the 40 ft rooftop net — Parachute 36 mesh along both walls of a residential terrace — home net Sialkot' },
      { type: 'image', url: '/images/works/home-roof-top-net-sialkot/home-roof-top-net-sialkot-3.webp', alt: 'Interior of the 11 ft home rooftop cage — Parachute 36 ceiling and side mesh on bamboo poles — custom net installation Sialkot' },
      { type: 'image', url: '/images/works/home-roof-top-net-sialkot/home-roof-top-net-sialkot-4.webp', alt: 'Far end of the home rooftop net — overhead Parachute 36 mesh and bamboo supports against the parapet — net maker Sialkot' },
      { type: 'image', url: '/images/works/home-roof-top-net-sialkot/home-roof-top-net-sialkot-5.webp', alt: 'Close view of a bamboo pole holding Parachute 36 side and roof netting — cost-effective home rooftop net Sialkot, Pakistan' },
      { type: 'video', url: '/images/works/home-roof-top-net-sialkot/VID_20260925_234739972.mp4', alt: 'Walkthrough of the home rooftop net in Sialkot — Parachute 36 mesh on bamboo poles over a residential terrace' },
      { type: 'video', url: '/images/works/home-roof-top-net-sialkot/VID_20260925_235922162.mp4', alt: 'Interior view of the 40 ft by 23 ft home rooftop enclosure — 11 ft Parachute 36 netting on bamboo supports — Sialkot, Pakistan' },
    ]
  },
  {
    id: 'sports-complex-nowshera',
    title: 'Sports Complex, Nowshera',
    category: 'Sports Complex',
    type: 'Sports Complex',
    location: 'Nowshera, Pakistan',
    desc: 'A six-in-one sports complex in Nowshera. Each court is 80 ft by 40 ft and enclosed to 30 ft on a strong iron structure, with Parachute 36 netting on the sides and roof. Floodlights and the open mesh keep every court usable by day and by night.',
    highlights: ['Six Courts, One Iron Structure', 'Parachute 36 Netting', '80-ft × 40-ft Courts, 30-ft High', 'Open Day and Night'],
    netSpec: 'Parachute 36',
    frame: 'Strong iron structure',
    year: '2026',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/sports-complex-nowshera/sports-complex-nowshera-cover.webp',
    coverImageAlt: 'Floodlit sports complex in Nowshera — six courts under Parachute 36 mesh on a 30 ft iron frame | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/sports-complex-nowshera/sports-complex-nowshera-cover.webp', alt: 'Night interior of the Nowshera sports complex — Parachute 36 side and roof mesh on a tall iron frame over a concrete court' },
      { type: 'image', url: '/images/works/sports-complex-nowshera/sports-complex-nowshera-1.webp', alt: 'Iron frame of the six-court complex at night — 30 ft poles and roof trusses before the mesh is closed in — sports complex Nowshera' },
      { type: 'image', url: '/images/works/sports-complex-nowshera/sports-complex-nowshera-2.webp', alt: 'Inside one 80 ft court at night — Parachute 36 mesh on the iron bays with the next court visible through the net — net installation Nowshera' },
      { type: 'image', url: '/images/works/sports-complex-nowshera/sports-complex-nowshera-3.webp', alt: 'Wide night view across the complex — repeated iron bays with Parachute 36 walls and roof over the concrete courts — net maker Nowshera, Pakistan' },
      { type: 'image', url: '/images/works/sports-complex-nowshera/sports-complex-nowshera-4.webp', alt: 'Overhead night view of the six courts — floodlit iron structure with Parachute 36 mesh — sports complex Nowshera' },
      { type: 'image', url: '/images/works/sports-complex-nowshera/sports-complex-nowshera-7.webp', alt: 'Daytime court at sunset — Parachute 36 roof and side netting on the iron frame — sports complex Nowshera, Pakistan' },
      { type: 'image', url: '/images/works/sports-complex-nowshera/sports-complex-nowshera-8.webp', alt: 'Length view of the six-in-one complex in daylight — 80 ft courts in a row under Parachute 36 mesh on iron poles — net installation Nowshera' },
      { type: 'video', url: '/images/works/sports-complex-nowshera/sports-complex-nowshera-5.mp4', alt: 'Walkthrough of the Nowshera sports complex — Parachute 36 netting on the 30 ft iron frame' },
      { type: 'video', url: '/images/works/sports-complex-nowshera/sports-complex-nowshera-6.mp4', alt: 'View along the six courts — strong iron structure and Parachute 36 enclosure in Nowshera, Pakistan' },
      { type: 'video', url: '/images/works/sports-complex-nowshera/sports-complex-nowshera-9.mp4', alt: 'Court interior at the Nowshera sports complex — 80 ft by 40 ft bay under Parachute 36 mesh' },
      { type: 'video', url: '/images/works/sports-complex-nowshera/sports-complex-nowshera-10.mp4', alt: 'Perimeter view of the six-court complex — iron frame and side netting in Nowshera' },
      { type: 'video', url: '/images/works/sports-complex-nowshera/sports-complex-nowshera-11.mp4', alt: 'Wide view of the sports complex — courts open day and night under the Parachute 36 roof — Nowshera, Pakistan' },
    ]
  },
  {
    id: 'cricket-arena-sialkot-cant',
    title: 'Cricket Arena, Sialkot Cantt',
    category: 'Sports Arena',
    type: 'Sports Arena',
    location: 'Sialkot Cantt, Pakistan',
    desc: 'A cricket arena in Sialkot Cantt, measuring 122 ft by 62 ft and enclosed to 30 ft. The court is finished entirely in Parachute 24, carried on straight iron poles with rope support across the top.',
    highlights: ['Parachute 24 Throughout', 'Straight Iron Poles', 'Rope Support at the Top', '122-ft × 62-ft Court, 30-ft High'],
    netSpec: 'Parachute 24',
    frame: 'Straight iron poles with rope support at the top',
    year: '2026',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/cricket-arena-sialkot-cant/cricket-arena-sialkot-cant-cover.webp',
    coverImageAlt: 'Cricket arena in Sialkot Cantt — Parachute 24 mesh on straight iron poles with rope support across the top | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/cricket-arena-sialkot-cant/cricket-arena-sialkot-cant-cover.webp', alt: 'Exterior of the Sialkot Cantt cricket arena — 30 ft straight iron poles and Parachute 24 side mesh along a concrete court' },
      { type: 'image', url: '/images/works/cricket-arena-sialkot-cant/cricket-arena-sialkot-cant-1.webp', alt: 'Length view of the 122 ft cricket arena — Parachute 24 enclosure on straight iron poles beside the outfield — net installation Sialkot Cantt' },
      { type: 'image', url: '/images/works/cricket-arena-sialkot-cant/cricket-arena-sialkot-cant-2.webp', alt: 'Inside the 62 ft wide court — rope support tying the pole tops, with Parachute 24 side and roof mesh — cricket arena Sialkot Cantt' },
      { type: 'image', url: '/images/works/cricket-arena-sialkot-cant/cricket-arena-sialkot-cant-3.webp', alt: 'Side elevation of the arena — tall straight iron poles, rope along the top, and Parachute 24 mesh — net maker Sialkot Cantt, Pakistan' },
      { type: 'video', url: '/images/works/cricket-arena-sialkot-cant/cricket-arena-sialkot-cant-4.mp4', alt: 'Walkthrough of the Sialkot Cantt cricket arena — Parachute 24 on straight iron poles' },
      { type: 'video', url: '/images/works/cricket-arena-sialkot-cant/cricket-arena-sialkot-cant-5.mp4', alt: 'Length view of the 122 ft by 62 ft court — rope support across the top of the iron poles — Sialkot Cantt' },
      { type: 'video', url: '/images/works/cricket-arena-sialkot-cant/cricket-arena-sialkot-cant-6.mp4', alt: 'Interior of the cricket arena — 30 ft Parachute 24 enclosure on straight iron poles — Sialkot Cantt, Pakistan' },
      { type: 'video', url: '/images/works/cricket-arena-sialkot-cant/cricket-arena-sialkot-cant-7.mp4', alt: 'Perimeter view of the cricket arena — Parachute 24 mesh and rope-supported iron poles in Sialkot Cantt' },
    ]
  },
  {
    id: 'cricket-arena-barnala',
    title: 'Sports Complex, Barnala, Azad Kashmir',
    category: 'Sports Complex',
    type: 'Sports Complex',
    location: 'Barnala, Azad Kashmir',
    desc: 'A two-in-one sports complex in Barnala, Azad Kashmir, measuring 100 ft by 90 ft and enclosed to 26 ft on a full iron frame. Parachute 36 covers the sides and Parachute 12 covers the roof, with a foldable center net that splits the ground into two courts.',
    highlights: ['Two Courts, One Iron Frame', 'Foldable Center Net', 'Parachute 36 Sides, Parachute 12 Roof', '100-ft × 90-ft Court, 26-ft High'],
    netSpec: 'Parachute 36 sides, Parachute 12 roof',
    frame: 'Full iron frame',
    year: '2026',
    badge: 'Custom',
    gradient: 'linear-gradient(135deg, rgba(26,24,112,0.7), rgba(7,5,26,0.95))',
    coverImage: '/images/works/cricket-arena-barnala/cricket-arena-barnala-cover.webp',
    coverImageAlt: 'Night view of the Barnala sports complex — full iron frame with Parachute 36 sides and a Parachute 12 roof | Cereburum Sports',
    media: [
      { type: 'image', url: '/images/works/cricket-arena-barnala/cricket-arena-barnala-cover.webp', alt: 'Night exterior of the Barnala cricket arena — 26 ft iron frame with Parachute 36 side mesh and a white roof net' },
      { type: 'image', url: '/images/works/cricket-arena-barnala/cricket-arena-barnala-1.webp', alt: 'Corner night view of the two-in-one arena — full iron frame and Parachute mesh over the court in Barnala, Azad Kashmir' },
      { type: 'image', url: '/images/works/cricket-arena-barnala/cricket-arena-barnala-2.webp', alt: 'Interior beside the center partition — foldable white net dividing the 100 ft by 90 ft court under the Parachute 12 roof — cricket arena Barnala' },
      { type: 'image', url: '/images/works/cricket-arena-barnala/cricket-arena-barnala-3.webp', alt: 'Inside one bay of the arena — Parachute 36 side mesh on the iron frame with the center net gathered aside — net installation Barnala' },
      { type: 'image', url: '/images/works/cricket-arena-barnala/cricket-arena-barnala-5.webp', alt: 'Corner of the iron frame — Parachute 36 mesh on the tall poles of the Barnala cricket arena — net maker Azad Kashmir' },
      { type: 'video', url: '/images/works/cricket-arena-barnala/cricket-arena-barnala-6.mp4', alt: 'Walkthrough of the Barnala cricket arena — Parachute 36 sides and Parachute 12 roof on a full iron frame' },
      { type: 'video', url: '/images/works/cricket-arena-barnala/cricket-arena-barnala-7.mp4', alt: 'Interior of the two-in-one court — foldable center net in the 100 ft by 90 ft arena — Barnala, Azad Kashmir' },
      { type: 'video', url: '/images/works/cricket-arena-barnala/cricket-arena-barnala-8.mp4', alt: 'Night exterior of the 26 ft cricket arena — iron frame and Parachute mesh in Barnala, Azad Kashmir' },
    ]
  }
];

function withMediaUrls(project) {
  return {
    ...project,
    coverImage: project.coverImage ? mediaUrl(project.coverImage) : project.coverImage,
    media: project.media.map((item) => ({
      ...item,
      url: mediaUrl(item.url),
      ...(item.poster ? { poster: mediaUrl(item.poster) } : {}),
    })),
  };
}

export const projects = rawProjects.map(withMediaUrls);

export const projectCategories = ['All', 'Sports Complex', 'Sports Arena', 'Cricket Pitch', 'Folding Net', 'Rooftop Net'];
