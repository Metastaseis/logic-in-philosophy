import typography from '@tailwindcss/typography';
import rtl from 'tailwindcss-rtl';

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  // ⬇️ add this block
  safelist: [
    'bg-bauRed','bg-bauBlue','bg-bauYellow',
    'text-bauRed','text-bauBlue','text-bauYellow',
    'border-bauRed','border-bauBlue','border-bauYellow',
  ],
  theme: {
    extend: {
      fontFamily: {
        bauhaus: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      colors: {
        bauRed: '#d90000',
        bauBlue: '#0055a4',
        bauYellow: '#ffb800',
        bauGray: '#ededed',
      },
    },
  },
  plugins: [typography, rtl],
};