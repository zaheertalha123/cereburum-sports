const DANGLING_END =
  /^(and|or|but|the|a|an|of|to|for|with|in|on|at|by|from|its|their|your|our|that|which|including|without|into|over|under|where|when|length|width|height|depth)$/i;

function words(phrase) {
  return String(phrase || '').split(/\s+/).filter(Boolean);
}

function cleanEnd(phrase) {
  return String(phrase || '')
    .replace(/[\s,;:–—-]+$/g, '')
    .trim();
}

function capitalize(phrase) {
  const trimmed = cleanEnd(phrase);
  if (!trimmed) return '';
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

function isComplete(phrase) {
  const cleaned = cleanEnd(phrase);
  const count = words(cleaned).length;
  if (count < 3 || count > 18) return false;
  if (/[,:;]/.test(cleaned)) return false;
  const last = words(cleaned).pop();
  if (DANGLING_END.test(last)) return false;
  return true;
}

/**
 * HowTo step name from the existing step text.
 * Uses the first sentence when it is already a complete phrase, and only
 * shortens a long sentence at a clause boundary.
 */
export function howtoStepName(text) {
  const raw = String(text || '').replace(/\s+/g, ' ').trim();
  if (!raw) return 'Installation step';

  const sentence = raw.split(/(?<=[.!?])\s+/)[0].replace(/[.!?]+$/g, '').trim();
  if (words(sentence).length <= 18 && !/[,:;]$/.test(sentence)) return capitalize(sentence);

  const andMatch = sentence.match(/^([^,]+?)\s+and\s+/i);
  if (andMatch && isComplete(andMatch[1]) && words(andMatch[1]).length >= 4) {
    return capitalize(andMatch[1]);
  }

  const commaAt = sentence.indexOf(',');
  if (commaAt > 0) {
    const before = sentence.slice(0, commaAt);
    if (isComplete(before)) return capitalize(before);
    const after = sentence.slice(commaAt + 1).split(/[.,]/)[0];
    if (isComplete(after)) return capitalize(after);
  }

  if (andMatch) {
    const right = sentence.slice(andMatch[0].length).split(/[.,]/)[0];
    if (isComplete(right)) return capitalize(right);
  }

  const plain = words(sentence.replace(/[,:;]/g, ''));
  for (let count = Math.min(12, plain.length); count >= 4; count -= 1) {
    const slice = plain.slice(0, count).join(' ');
    if (isComplete(slice)) return capitalize(slice);
  }

  return capitalize(plain.slice(0, 6).join(' ')) || 'Installation step';
}
