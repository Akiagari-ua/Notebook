import type { TPalette } from './types';

const palette: TPalette = {
  usafaBlue: '#26547C',
  paradisePink: '#EF476F',
  orangeYellow: '#FFD166',
  caribbenGreen: '#06D6A0',
  babyPowder: '#FFFCF9',
};

export default {
  light: {
    colors: {
      main: palette.usafaBlue,
      secondary: palette.babyPowder,
    },
    buttons: {
      defaultButton: {
        background: palette.babyPowder,
        color: palette.usafaBlue,
        borderRadius: '4px',
        borderColor: palette.babyPowder,
      },
      disabledButton: {
        background: '',
        color: '',
        borderRadius: '',
        borderColor: '',
      },
    },
  },
};
