import rtl from 'tailwindcss-rtl';

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [rtl()]
};
