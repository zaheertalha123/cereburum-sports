import { faqsById } from '@/data/buyerFaqs';
import { locations } from '@/data/locations';

const cityLinks = locations
  .filter((location) => ['lahore', 'karachi', 'islamabad', 'rawalpindi', 'sialkot'].includes(location.slug))
  .map((location) => ({ href: `/locations/${location.slug}`, label: location.city }));

export const servicePages = [
  {
    slug: 'cricket-net-installation-pakistan',
    title: 'Cricket Net Installation in Pakistan',
    h1: 'Cricket net installation across Pakistan',
    description: 'Cricket net installation by Cereburum Sports, a Sialkot manufacturer. Practice nets, rooftops, schools and arenas, installed where it is practical.',
    kicker: 'Installation',
    serviceName: 'Cricket net installation',
    lede: [
      'Cereburum Sports manufactures cricket nets in Sialkot and installs them across Pakistan where the ground, access and weather allow it. The same team handles the net, the supply and the installation.',
    ],
    sections: [
      {
        heading: 'From the first conversation to the ground',
        paragraphs: [
          'Tell us the location, the dimensions and how you want to use the space. We help you choose the material and layout. Custom netting, supply and installation then follow.',
        ],
      },
      {
        heading: 'Why the nets come from a Sialkot workshop',
        paragraphs: [
          'The nets are made in Sialkot, including custom sizes, colours and mesh. You can visit the factory before ordering. Installation is offered where it is practical, not from a separate office in every city.',
        ],
        links: [{ href: '/about', label: 'About the Sialkot workshop' }, { href: '/contact', label: 'Factory visits' }, ...cityLinks],
      },
      {
        heading: 'Rooftops, schools and arenas',
        paragraphs: [
          'Rooftop cages, school enclosures and full practice arenas are all part of the published work. Start with the guide that matches the ground you have.',
        ],
        links: [
          { href: '/guides/rooftop-cricket-practice-net', label: 'Rooftop practice nets' },
          { href: '/services/school-sports-ground-netting', label: 'School grounds' },
          { href: '/guides/cricket-arena', label: 'Practice arenas' },
          { href: '/works', label: 'Installed projects' },
        ],
      },
    ],
    faqs: faqsById('manufacture', 'rooftop', 'school', 'cost', 'cities'),
    priceRows: [],
  },
  {
    slug: 'school-sports-ground-netting',
    // TODO(owner): any other school projects you can name.
    title: 'School Sports Ground Netting in Pakistan',
    h1: 'School sports ground netting',
    description: 'Sports netting for school grounds in Pakistan. See the Bloomfield Hall School enclosure in Kharian, installed by Cereburum Sports.',
    kicker: 'Schools',
    serviceName: 'School sports ground netting',
    lede: [
      'Cereburum Sports has installed a school sports enclosure at Bloomfield Hall School, Kharian. The published build is 40 ft by 40 ft, 20 ft high, with Parachute 36 on the sides and Parachute 24 on the roof.',
    ],
    sections: [
      {
        heading: 'What to send with a school enquiry',
        paragraphs: [
          'Share the ground size and the sports the students play, such as cricket, football or a multi-use court. We manufacture in Sialkot and confirm what is practical for that site.',
          'The works index marks this project as school safety approved. The netting was specified for daily student use.',
        ],
        links: [
          { href: '/works/bloomfield-hall-school-khariyan', label: 'Bloomfield Hall School, Kharian' },
          { href: '/products/cricket-net-36', label: 'Parachute 36' },
          { href: '/products/cricket-net-24', label: 'Parachute 24' },
          { href: '/contact', label: 'Send the ground size' },
        ],
      },
    ],
    faqs: faqsById('school', 'range', 'cities'),
    priceRows: [],
  },
];

export function getServicePage(slug) {
  return servicePages.find((page) => page.slug === slug) || null;
}
