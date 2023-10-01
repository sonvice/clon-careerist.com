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
      '4xl': 'clamp(6rem, 4.318rem + 8.41vw, 10.625rem)',
      '5xl': 'clamp(8rem, 7.6774rem + 1.6129vw, 9rem)'
    },
    fontSize:{
      'sm': 'clamp(0.8331rem, 0.8297rem + 0.0171vw, 0.8438rem);',
      'base': 'clamp(1rem, 0.9597rem + 0.2016vw, 1.125rem)',
      'md': 'clamp(1.2rem, 1.1034rem + 0.4829vw, 1.4994rem)',
      'lg': 'clamp(1.44rem, 1.2598rem + 0.9012vw, 1.9988rem)',
      'xl': 'clamp(1.7281rem, 1.4261rem + 1.5101vw, 2.6644rem)',
      '2xl': 'clamp(2.0738rem, 1.5969rem + 2.3841vw, 3.5519rem)',
      '3xl': 'clamp(2.4881rem, 1.7633rem + 3.624vw, 4.735rem)'
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
