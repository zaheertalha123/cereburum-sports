// TODO(owner): Fill these indicative PKR amounts only when you are willing to publish them.
// Leave a value as an empty string until then. Empty values are not rendered.
// Do not copy competitor prices into these fields.
//
// practicePanel — starting range for a 100×10 ft practice panel, net only
// rooftopCage — starting range for a rooftop cage, including or excluding installation (say which)
// fullArena — starting range for a full practice arena
// parachute24Panel — 100×10 ft Parachute 24 panel, excluding installation
// parachute36Panel — 100×10 ft Parachute 36 panel, excluding installation
// footballPair — starting pair price for a football goal net, if you sell in pairs
// arenaLow — low indicative range for a netted practice arena
// arenaTypical — typical indicative range for a netted practice arena
// arenaLarge — large indicative range for a netted practice arena

export const priceNotes = {
  practicePanel: '',
  rooftopCage: '',
  fullArena: '',
  parachute24Panel: '',
  parachute36Panel: '',
  footballPair: '',
  arenaLow: '',
  arenaTypical: '',
  arenaLarge: '',
};

export function priceValue(id) {
  const value = priceNotes[id];
  return typeof value === 'string' ? value.trim() : '';
}
