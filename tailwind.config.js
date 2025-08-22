// tailwind.config.js (ESM)
import typography from '@tailwindcss/typography';
import rtl from 'tailwindcss-rtl';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1200px', '2xl': '1320px' }
    },
    extend: {
      fontFamily: {
        bauhaus: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      colors: {
        bauRed:   '#d90000',
        bauBlue:  '#0055a4',
        bauYellow:'#ffb800',
        bauGray:  '#ededed',
      },
      typography: (theme) => ({
        bauhaus: {
          css: {
            // palette
            '--tw-prose-body': '#111',
            '--tw-prose-headings': '#111',
            '--tw-prose-links': '#111',
            '--tw-prose-bold': '#111',
            '--tw-prose-counters': '#111',
            '--tw-prose-bullets': '#111',
            '--tw-prose-hr': 'rgba(0,0,0,.08)',
            '--tw-prose-quotes': '#111',
            '--tw-prose-quote-borders': '#d90000',
            '--tw-prose-captions': '#444',
            '--tw-prose-code': '#111',
            '--tw-prose-th-borders': 'rgba(0,0,0,.12)',
            '--tw-prose-td-borders': 'rgba(0,0,0,.08)',

            // headings
            'h1,h2,h3': {
              fontFamily: theme('fontFamily.display').join(','),
              letterSpacing: '0.02em',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },

            // links
            'a': {
              textDecoration: 'underline',
              textDecorationThickness: '2px',
              textUnderlineOffset: '2px',
              transition: 'color .15s ease',
            },
            'a:hover': { color: theme('colors.bauRed') },

            // lists
            'ul > li::marker': { color: '#111' },
            'ol > li::marker': { color: '#111' },

            // blockquote
            'blockquote': {
              fontStyle: 'normal',
              paddingInlineStart: '1rem',
              borderInlineStartWidth: '3px',
              borderInlineStartColor: '#d90000',
              marginTop: '1.2em',
              marginBottom: '1.2em',
            },

            // code
            'code': {
              backgroundColor: 'rgba(0,0,0,.04)',
              borderRadius: '6px',
              padding: '0.15em 0.35em',
            },
            'pre': {
              backgroundColor: '#0b0b0b',
              color: '#f5f5ef',
              borderRadius: '10px',
              padding: '1rem 1.25rem',
            },

            // hr and images
            'hr': { borderColor: 'rgba(0,0,0,.08)' },
            'img': {
              borderRadius: '10px',
              boxShadow:
                '0 10px 15px -15px rgba(0,0,0,.25), 0 4px 6px -4px rgba(0,0,0,.20)',
            },
          },
        },
      }),
    },
  },
  plugins: [typography, rtl],
};