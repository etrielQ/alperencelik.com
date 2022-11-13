const plugin = require('tailwindcss/plugin')
module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        desktop: '4rem',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      primary: '#AC3DD3',
      primaryLight: '#E5DAE9',
      primaryDark: '#230A2C',
      primaryDarken: '#190520',
      gray: '#5A5A5A',
      grayDark: '#4E4E4E',
      grayLight: '#858585',
      grayBg: '#EBEBEB',
      grayBgLight: '#F4F4F4',
      borderColor: '#DBDBDB',
    },
    fontSize: {
      xs: '1.8rem',
      base: '2rem',
      sm: '2.4rem',
      md: '2.8rem',
      lg: '3.2rem',
      xl: '4.2rem',
      '2xl': '5.8rem',
      '3xl': '7.8rem',
      '4xl': '9rem',
      '5xl': '11rem',
    },
    screens: {
      tabletSmall: '577px',
      tablet: '769px',
      tabletBig: '993px',
      desktop: '1025px',
      laptop: '1201px',
      desktopM: '1441px',
      desktopL: '1621px',
    },
    boxShadow: {
      dark: '0px 3px 5px 1px #E2E2E2;',
      none: '0px 0px 0px 0px transparent;',
    },
    fontFamily: {
      primary: ["'Mukta', sans-serif"],
      secondary: ["'Katibeh', cursive"],
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('is-language-active', '.is-language-active &')
    }),
  ],
}
