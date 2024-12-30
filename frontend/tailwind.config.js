module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all JavaScript, TypeScript, and JSX/TSX files
    "./public/index.html",        // Includes HTML files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EC008C',
      },
      spacing: {
        '18rem': '18rem',
      },
      fontFamily: {
        'Roboto': ['"Roboto"', 'serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        integral: ['Integral CF', 'sans-serif'],
      },
    },
  },
  plugins: [],
};