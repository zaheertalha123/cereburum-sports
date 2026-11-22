export const locations = [
  { slug: 'lahore', city: 'Lahore', region: 'Punjab', projectIds: [] },
  { slug: 'karachi', city: 'Karachi', region: 'Sindh', projectIds: [] },
  { slug: 'islamabad', city: 'Islamabad', region: 'Islamabad Capital Territory', projectIds: ['folding-net-islamabad', 'futsal-ground-fast-islamabad'] },
  { slug: 'rawalpindi', city: 'Rawalpindi', region: 'Punjab', projectIds: [] },
  { slug: 'sialkot', city: 'Sialkot', region: 'Punjab', projectIds: ['roof-top-net-sialkot', 'roof-top-net-sialkot-daska-road', 'house-roof-top-net-sialkot', 'home-roof-top-net-sialkot', 'cricket-arena-sialkot-cant', 'nizam-sons-sialkot'] },
  { slug: 'gujranwala', city: 'Gujranwala', region: 'Punjab', projectIds: ['sports-arena-gujranwala', 'practice-ground-gujranwala'] },
  { slug: 'peshawar', city: 'Peshawar', region: 'Khyber Pakhtunkhwa', projectIds: ['sports-complex-peshawar'] },
  { slug: 'nowshera', city: 'Nowshera', region: 'Khyber Pakhtunkhwa', projectIds: ['cricket-arena-nowshera', 'sports-complex-nowshera'] },
  { slug: 'sahiwal', city: 'Sahiwal', region: 'Punjab', projectIds: ['sports-complex-sahiwal'] },
  { slug: 'mardan', city: 'Mardan', region: 'Khyber Pakhtunkhwa', projectIds: ['sports-complex-mardan'] },
  { slug: 'mirpur', city: 'Mirpur', region: 'Azad Kashmir', projectIds: ['cricket-arena-mirpur'] },
  { slug: 'barnala', city: 'Barnala', region: 'Azad Kashmir', projectIds: ['cricket-arena-barnala'] },
  { slug: 'kharian', city: 'Kharian', region: 'Punjab', projectIds: ['bloomfield-hall-school-khariyan', 'sports-arena-khariyan'] },
  { slug: 'wazirabad', city: 'Wazirabad', region: 'Punjab', projectIds: ['sports-arena-wazirabad'] },
  { slug: 'layyah', city: 'Layyah', region: 'Punjab', projectIds: ['cricket-pitch-layyah'] },
  { slug: 'pasrur', city: 'Pasrur', region: 'Punjab', projectIds: ['mian-indoor-cricket-club-pasrur'] },
];

export function getLocation(slug) {
  return locations.find((location) => location.slug === slug) || null;
}

const cityAliases = {
  khariyan: 'kharian',
  kharian: 'kharian',
  'sialkot cantt': 'sialkot',
};

export function locationForCity(city) {
  const key = String(city || '').trim().toLowerCase();
  const slug = cityAliases[key] || key;
  return getLocation(slug);
}
