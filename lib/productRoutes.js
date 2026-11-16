export const categoryPathByGroup = {
  Cricket: '/products/cricket-nets',
  Football: '/products/football-goal-nets',
  Badminton: '/products/court-nets',
  Futsal: '/products/futsal-nets',
  Custom: '/products/custom',
};

export function categoryPathFor(group) {
  if (!group || group === 'All') return '/products';
  return categoryPathByGroup[group] || `/products?filter=${encodeURIComponent(group)}`;
}
