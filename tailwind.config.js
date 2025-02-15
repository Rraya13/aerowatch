/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    fontSize: {
      caption3: 10,
      caption2: 11,
      caption1: 12,
      footNote: 13,
      regular: 14,
      subheadline: 15,
      callout: 16,
      headline: 17,
      title3: 20,
      title2: 22,
      title1: 28,
      title: 34,
      H1: 40,
    },
    colors: {
      lightBg: '#FFFFFF',
      darkBg: '#1D2026',
      primary: '#0064D2',
      darkPrimary: '#4D96EC',
      disabledBtn: '#DAEBFF',
      white: '#ffffff',
      black: '#000000',
      gray1: '#EAEAEA',
      darkGray1: '#40434b',
      gray2: '#808991',
    },
  },
  plugins: [],
};
