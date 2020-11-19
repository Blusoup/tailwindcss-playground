module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
       'swissTHIN': ['Swiss721BT-Thin'],
       'palatinoLT': ['PalatinoLT-Light'],
       'palatinoRM': ['PalatinoLT-Roman'],
       'avenirHEAVY': ['AvenirLTStd-Heavy'],
       'avenirMD': ['AvenirLTStd-Medium'],
       'avenirBOOK': ['AvenirLTStd-Book'],
      },
      colors: {
        cream: '#f2f3f4',
        gold: '#988468',
        bgGray: '#95a2a8',
      },
    },
  },
  variants: {},
  plugins: [],
};
