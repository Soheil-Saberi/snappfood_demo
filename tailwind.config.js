/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: '#ff00a6',
        background: '#f9fafb'
      },
      fontFamily: {
        iransans: ['IranSans']
      },
      screens: {
        mobile: '320px',
        tablet: '768px',
        laptop: '1440px',
        desktop: '1920px'
      }
    }
  },
  plugins: []
};
