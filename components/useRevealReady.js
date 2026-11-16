'use client';

import { useEffect, useState } from 'react';

/** Let streamed client lists finish hydration before enhancing their children. */
export default function useRevealReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return ready ? 'ready' : 'pending';
}
