import { projects } from '@/data/projects';

function specValue(product, label) {
  return product.specs?.find((spec) => spec.label === label)?.value || '';
}

export function productHeadline(product) {
  if (product.headline) return product.headline;
  if (product.id === 'custom') return 'Custom size sports nets, made in Sialkot';
  if (product.id === 'cricket-net-24') return 'Parachute 24 cricket practice net';
  if (product.id === 'cricket-net-36') return 'Parachute 36 cricket practice net';
  if (product.filterGroup === 'Cricket') return `${product.title} cricket net`;
  if (product.filterGroup === 'Football') return `${product.title} football goal net`;
  if (product.filterGroup === 'Futsal') return `${product.title} futsal goal net`;
  return product.title;
}

export function productSections(product) {
  const sections = [];
  const dimensions = specValue(product, 'Dimensions');
  const custom = specValue(product, 'Customizable');
  const weather = specValue(product, 'Weather Resistance');

  if (dimensions) {
    const customNote = /yes/i.test(custom) ? ' Custom sizes are available.' : '';
    sections.push({
      title: 'Standard size and custom sizes',
      body: `The listed size is ${dimensions}.${customNote}`,
    });
  }

  if (/uv/i.test(weather)) {
    sections.push({
      title: 'Outdoor use and UV treatment',
      body: `The published weather resistance for this grade is ${weather}.`,
    });
  }

  if (product.filterGroup === 'Cricket') {
    sections.push({
      title: 'Materials buyers ask about',
      // TODO(owner): confirm whether Parachute grades are HDPE, PE, or another fibre before naming one.
      body: 'Buyers often compare HDPE, nylon, polyester and parachute grades. This page keeps the published grade name, gauge and mesh. The materials guide shows how those names line up.',
    });
  }

  if (product.id === 'custom') {
    sections.push(
      {
        title: 'How to measure your space',
        body: 'Measure the length, width and height before you ask for a custom net. The measuring guides show the checks we use on site.',
        links: [
          { href: '/guides/height-measurement', label: 'Measure height' },
          { href: '/guides/length-measurement', label: 'Measure length' },
          { href: '/guides/size-checking', label: 'Check the size' },
        ],
      },
      {
        title: 'Rooftop, arena and school examples',
        body: 'Custom nets on this site include rooftop cages in Sialkot, the Nowshera and Mirpur arenas, and the Bloomfield Hall School enclosure.',
        links: [
          { href: '/guides/rooftop-cricket-practice-net', label: 'Rooftop practice nets' },
          { href: '/works/cricket-arena-nowshera', label: 'Nowshera arena' },
          { href: '/works/cricket-arena-mirpur', label: 'Mirpur arena' },
          { href: '/works/bloomfield-hall-school-khariyan', label: 'Bloomfield Hall School' },
        ],
      },
      {
        title: 'Production time',
        // TODO(owner): confirm whether custom lead time should be stated as 4–5 days or a 5 business day minimum.
        body: 'This page lists a minimum lead time of 5 business days. The contact page says custom-sized items typically take about 4–5 days to manufacture, and standard-size products are usually ready within 1–2 days, subject to workload. Installation is offered where it is practical to do so, depending on the ground, weather, access and location.',
      },
    );
  }

  const links = [];
  if (product.id !== 'custom') links.push({ href: '/products/custom', label: 'Custom sizes' });
  if (product.filterGroup === 'Cricket' || product.id === 'custom') {
    links.push(
      { href: '/guides/cricket-net-price-pakistan', label: 'How pricing works' },
      { href: '/guides/rooftop-cricket-practice-net', label: 'Rooftop nets' },
    );
  }
  sections.push({
    title: 'How to enquire',
    body: 'Tell us the size, colour and city. We manufacture in Sialkot and install across Pakistan where it is practical to do so.',
    links,
  });

  return sections;
}

export function projectsForProduct(product) {
  const name = product?.title;
  if (!name) return [];
  const pattern = new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`);
  return projects.filter((project) => pattern.test(`${project.desc || ''} ${(project.highlights || []).join(' ')}`));
}
