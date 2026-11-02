export const FOUNDED_YEAR = 2019;

// TODO(owner): Confirm whether any years before the 2019 founding should be counted. The public figure is calendar years since 2019.

export function yearsSinceFounding(date = new Date()) {
  const years = date.getFullYear() - FOUNDED_YEAR;
  return `${Math.max(years, 0)}+`;
}
