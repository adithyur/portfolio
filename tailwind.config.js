/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
         'base': '1rem',
         'lg': '1.125rem',
         'xl': '1.25rem',
         '1xl': '1.35rem',
         '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
         '5xl': '3rem',
         '6xl': '4rem',
        '7xl': '5rem',
       },
      // container: {
      //   center: true,
      //   padding: '6rem',
      //   maxWidth: '1280px',
      // },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink 0s infinite"
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
       tight: '-.025em',
        normal: '0',
       wide: '.025em',
        wider: '.05em',
       widest: '.1em',
       widest: '.25em',
        morewide: '0.50em'
      }
    },
  },
  plugins: [],
}

