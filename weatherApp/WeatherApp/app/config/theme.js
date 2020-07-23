import { Dimensions, Platform } from 'react-native';
import { calculateREMforDevice } from '../helpers/font';

const calculatedRem = calculateREMforDevice(Dimensions.get('window'));

const platformFactor = Platform.OS === 'ios' ? 1.1 : 1;

const scale = size => {
  let newSize = (size * calculatedRem * platformFactor).toFixed(2);
  return `${newSize.toString()}px`;
};

const scaledFontSize = (baseFontSize, lengthExceeded, scale) =>
  baseFontSize - lengthExceeded * scale;

const theme = {
  colors: {
    alabaster: '#f8f8f8',
    alto: '#dddddd',
    zumthor: '#edf6ff',
    red: '#ffd118',
    catalinaBlue: '#083b77',
    white: '#ffffff',
    black: '#000000',
    mineShaft: '#333333',
    emperor: '#4f4f4f',
    keppel: '#2fa49f',
    mojo: '#c64040',
    dustyGray: '#9b9b9b',
    concrete: '#f2f2f2',
    conch: '#c7d5cd',
    gray: '#828282',
    doveGray: '#666666',
    genoa: '#157672',
    tundora: '#4a4a4a',
    catskillWhite: '#e7f4f4'
  },
  fonts: {
    regular: (forStyled = true) => {
      if (Platform.OS === 'ios') {
        if (forStyled) {
          return `
            font-family: Source Sans Pro;
          `;
        }
        return {
          fontFamily: 'Source Sans Pro'
        };
      }

      if (forStyled) {
        return 'font-family: regular;';
      }

      return {
        fontFamily: 'regular'
      };
    },
    semiBold: (forStyled = true) => {
      if (Platform.OS === 'ios') {
        if (forStyled) {
          return `
            font-family: Source Sans Pro;
            font-weight: 600;
          `;
        }

        return {
          fontFamily: 'Source Sans Pro',
          fontWeight: '600'
        };
      }

      if (forStyled) {
        return 'font-family: SemiBold;';
      }

      return {
        fontFamily: 'SemiBold'
      };
    },
    bold: (forStyled = true) => {
      if (Platform.OS === 'ios') {
        if (forStyled) {
          return `
            font-family: Source Sans Pro;
            font-weight: 800;
          `;
        }

        return {
          fontFamily: 'Source Sans Pro',
          fontWeight: '800'
        };
      }

      if (forStyled) {
        return 'font-family: Bold;';
      }

      return {
        fontFamily: 'Bold'
      };
    },
    italic: (forStyled = true) => {
      if (Platform.OS === 'ios') {
        if (forStyled) {
          return `
            font-family: Source Sans Pro;
            font-style: italic;
          `;
        }

        return {
          fontFamily: 'Source Sans Pro',
          fontStyle: 'italic'
        };
      }

      if (forStyled) {
        return 'font-family: Italic;';
      }

      return {
        fontFamily: 'Italic'
      };
    }
  },
  sizes: {
    s10: scale(10),
    s11: scale(11),
    s12: scale(12),
    s13: scale(13),
    s14: scale(14),
    s15: scale(15),
    s16: scale(16),
    s17: scale(17),
    s18: scale(18),
    s20: scale(20),
    s22: scale(22),
    s24: scale(24),
    s25: scale(25),
    s30: scale(30),
    s32: scale(32),
    s35: scale(35),
    s40: scale(40),
    s50: scale(50),
    s60: scale(60)
  },
  scale,
  scaledFontSize
};

export default theme;
