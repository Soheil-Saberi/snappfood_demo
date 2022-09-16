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
        tablet: '1024px',
        laptop: '1280px',
        desktop: '1536px'
      }
    }
  },
  plugins: []
};
