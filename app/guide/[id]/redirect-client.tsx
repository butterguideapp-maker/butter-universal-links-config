'use client';

import { useEffect } from 'react';

export default function RedirectClient() {
  useEffect(() => {
    // Redirection automatique vers l'App Store
    window.location.href = 'https://apps.apple.com/fr/app/butter-guide-de-restaurants/id6749227938';
  }, []);

  return null;
}
