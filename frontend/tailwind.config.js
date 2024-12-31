module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all JavaScript, TypeScript, and JSX/TSX files
    "./public/index.html",        // Includes HTML files
  ],
  theme: {
    extend: {
      fontFamily: {
        'ibm-plex': ['"IBM Plex Sans"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
        'Roboto': ['"Roboto"', 'serif'],
        'Abhaya': ['"Abhaya Libre"', 'serif'],
        'Albert': ['"Albert Sans"', 'serif'],
      },
      colors: {
        primary: '#EC008C',
      },
      spacing: {
        '18rem': '18rem',
      },
    },
  },
  plugins: [],
};
