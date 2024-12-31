module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all JavaScript, TypeScript, and JSX/TSX files
    "./public/index.html",        // Includes HTML files
  ],
  theme: {
<<<<<<< HEAD
    extend: {},
    fontFamily: {
      'ibm-plex': ['"IBM Plex Sans"', 'sans-serif'],
      'inter': ['"Inter"', 'sans-serif'],
      'poppins': ['"Poppins"', 'sans-serif'], 
=======
    extend: {
      colors: {
        primary: '#EC008C',
      },
      spacing: {
        '18rem': '18rem',
      },
      fontFamily: {
        'Roboto': ['"Roboto"', 'serif'],
        'Poppins':['"Poppins"','serif'],
        'Abhaya': ['"Abhaya Libre"', 'serif'],
        'Albert':['"Albert Sans"', 'serif'],
      },
>>>>>>> 7bb2206dd608c449ccb18a39c7db3d8b1affd7d4
    },
  },
  plugins: [],
};
