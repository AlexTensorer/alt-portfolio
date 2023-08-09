/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
    fontFamily: {
      signature: 'Roboto Condensed',
    },
    backgroundImage: {
      'tech-img': "url('/src/assets/tech.png')",
    },
    colors: {
      'cus-black': '#353535',
      'cus-green': '#3C6E71',
      'cus-white': '#FFFFFF',
      'cus-gray': '#D9D9D9',
      'cus-blue': '#284B63',
      'cus-light-blue': '#CFDBD5',
      'cus-light-gray': '#E8EDDF',
      'cus-yellow': '#F5CB5C',
      'cus-dark-black': '#242423',
    }
  },
  plugins: [],
}
}

