const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        theme: ["Inter", "sans-serif"],
      },
      colors:{
        primary: '#121212',
        backgroundDark: '#',
        backgroundLight:'#1c1f24',
        secondaryStrong: '#dc143c',
        secondary:'#dc143c',
        tertiary: '#202020',
        white:'#EAEAEA',
        light:'#ffffff',
        transitionColor:'#2f528f',
        slate:
        {
          10: '#f1f3f4',
        },
        gray: {
          10:'#EEEEEE',
          20:'#A2A2A2',
          30:'#7B7B7B',
          50:'#3585859',
          90:'#141414'
        }
      },
      screens:{
        xs: '400px',
        '3xl': '1680px',
        '4xl': '1680px',
      },
      maxWidth:{
        '10xl': '1512px'
      },
      borderRadius:{
        '5xl': '40px'
      }
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
    // backgroundImage: theme => ({
    //   'gradient-light': 'linear-gradient(65deg, #101841, #202b60)', // Define your gradient here
    // }),
  },
  darkMode: "class",
  plugins: [
    nextui(),
    
  ],
  // plugins:[nextui()]
};
