/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    spacing:{
      'sm': 'clamp(0.83rem, 0.90rem + -0.32vw, 0.67rem)',
      'base': 'clamp(1.00rem, 1.00rem + 0.00vw, 1.00rem)',
      'md': 'clamp(1.20rem, 1.08rem + 0.59vw, 1.50rem)',
      'lg': 'clamp(1.44rem, 1.12rem + 1.58vw, 2.25rem)',
      'xl': 'clamp(1.73rem, 1.09rem + 3.21vw, 3.38rem)',
      '2xl': 'clamp(2.07rem, 0.91rem + 5.83vw, 5.06rem)',
      '3xl': 'clamp(2.49rem, 0.50rem + 9.96vw, 7.59rem)',
      '4xl': 'clamp(6rem, 4.318rem + 8.41vw, 10.625rem)'
    },
    fontSize:{
      'sm': 'clamp(0.83rem, 0.90rem + -0.32vw, 0.67rem)',
      'base': 'clamp(1.00rem, 1.00rem + 0.00vw, 1.00rem)',
      'md': 'clamp(1.20rem, 1.08rem + 0.59vw, 1.50rem)',
      'lg': 'clamp(1.44rem, 1.12rem + 1.58vw, 2.25rem)',
      'xl': 'clamp(1.73rem, 1.09rem + 3.21vw, 3.38rem)',
      '2xl': 'clamp(2.07rem, 0.91rem + 5.83vw, 5.06rem)',
      '3xl': 'clamp(2.49rem, 0.50rem + 9.96vw, 7.59rem)'
    },
    extend: {
      fontFamily:{
        barlow: [ 'Barlow', 'sans-serif']
      },
      colors:{
        'gray-light':'#f2f1f1',
        'primary':'#ff824c',
        'secondary':'#18181b'
      }
    },
  },
  
  plugins: [],
}
