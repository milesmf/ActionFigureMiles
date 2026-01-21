/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'afm-',
  corePlugins: { preflight: false },
  content: ['./index.html', './**/*.html', './**/*.js'],
  theme: { extend: {} },
  plugins: [],
};
