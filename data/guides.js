import { mediaUrl } from '../lib/mediaUrl';

export const guides = [
  {
    id: 'corner-door-installation',
    title: 'Corner Door',
    category: 'Installation',
    image: mediaUrl('/images/guides/corner-door/corner-door-02.jpg'),    
    desc: 'A step-by-step walkthrough for building, framing, and netting a heavy-duty tubular steel corner entrance door for sports arenas.',
    steps: [
      'Measure the corner span and fabricate an outer support post frame aligned with the corner netting structure.',
      'Cut hollow round steel pipes to size and weld a rectangular door leaf frame with a central horizontal support brace.',
      'Weld heavy-duty barrel or pin hinges between the outer corner post and the door leaf, ensuring smooth swing clearance.',
      'Apply rust-inhibiting primer and a weather-resistant black protective coat across all welded joints and steel piping.',
      'Lace durable white arena netting tightly around the door frame borders and mid-brace using high-tensile twine or heavy-duty zip ties.',
    ],
    images: [
      {
        url: mediaUrl('/images/guides/corner-door/corner-door-01.jpg'),
        alt: 'Corner door steel frame with fabrication inner view',
      },
      {
        url: mediaUrl('/images/guides/corner-door/corner-door-02.jpg'),
        alt: 'Corner door steel frame with fabrication outer view',
      },
    ],
  },
];
export const guideCategories = ['All', 'Installation', 'Structure', 'Scaffolding', 'Door'];
