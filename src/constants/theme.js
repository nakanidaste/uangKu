import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const COLORS = {
  primary: '#194868',
  secondary: '#FF615F',

  black: '#1E1F20',
  white: '#FFFFFF',
  lightgray: '#F5F7F9',
  lightgray2: '#FAFBFD',
  gray: '#BEC1D2',
  blue: '#42B0FF',
  darkgray: '#898C95',
  yellow: '#FFD573',
  lightblue: '#95A9B8',
  darkgreen: '#008159',
  peach: '#FF615F',
  purple: '#8E44AD',
  red: '#FF0000',
};

export const SIZES = {
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding2: 36,

  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 50,
  },
  h1: {
    fontFamily: 'Poppins-Black',
    fontSize: SIZES.h1,
    lineHeight: 36,
  },
  h2: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h2,
    lineHeight: 30,
  },
  h3: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h3,
    lineHeight: 22,
  },
  h4: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  body1: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
