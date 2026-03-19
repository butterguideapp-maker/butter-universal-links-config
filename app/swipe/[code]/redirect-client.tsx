'use client';

import { useEffect } from 'react';

export default function RedirectClient() {
  useEffect(() => {
    window.location.href = 'https://apps.apple.com/fr/app/butter-guide-de-restaurants/id6749227938';
  }, []);

  return null;
}
