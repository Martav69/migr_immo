import { Fraunces, Manrope } from 'next/font/google';

// Police serif pour les titres (Fraunces variable)
export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

// Police sans-serif pour le texte (Manrope comme fallback)
export const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Configuration des polices pour l'application
export const fontVariables = `${fraunces.variable} ${manrope.variable}`;
