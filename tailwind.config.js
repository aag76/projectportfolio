/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f8fb',
          100: '#e3eef7',
          200: '#c7dff0',
          300: '#a3cbe4',
          400: '#7db5d7',
          500: '#4e9ec9',
          600: '#3b7ea1',
          700: '#2c5f7a',
          800: '#1d3f52',
          900: '#0e202b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Open Sans', 'Nunito', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

