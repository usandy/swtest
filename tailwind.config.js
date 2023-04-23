module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  corePlugins: {
    preflight: false,
  },
  daisyui: {
    themes: ['cupcake', 'dark', 'cmyk'],
  },
}
