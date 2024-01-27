import {Fonts} from '@constants';
import {Dimensions, PixelRatio, Platform, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-safearea-height';

export const {width, height} = Dimensions.get('window');
export const statusHide = maxNum => Math.abs(getStatusBarHeight() - maxNum);
export const dynamicTop = () => {
  if (Platform.OS === 'ios') {
    return 0;
  } else {
    return getStatusBarHeight();
  }
};
// responsive
export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;

export const normalizer = (size, based = 'width') => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const widthPixel = size => normalizer(size, 'width');

export const heightPixel = size => normalizer(size, 'height');

export const fontPixel = size => heightPixel(size);

export const LAYOUT = {
  horizontalMargin: normalizer(24, 'width'),
  verticalMargin: normalizer(12, 'height'),
};
export const FontWithBold = StyleSheet.create({
  Bold_300: {
    fontWeight: '300',
    fontFamily: Fonts.RobotoLight,
  },
  Bold_400: {
    fontWeight: '400',
    fontFamily: Fonts.RobotoLight,
  },
  Bold_500: {
    fontWeight: '500',
    fontFamily: Fonts.RobotoRegular,
  },
  Bold_600: {
    fontWeight: '600',
    fontFamily: Fonts.RobotoBold,
  },
  Bold_700: {
    fontWeight: '700',
    fontFamily: Fonts.RobotoBold,
  },
  Bold_800: {
    fontWeight: '800',
    fontFamily: Fonts.RobotoBold,
  },
  Bold_900: {
    fontWeight: '900',
    fontFamily: Fonts.RobotoBold,
  },
});
export const isIOS = () => Platform.OS === 'ios';
