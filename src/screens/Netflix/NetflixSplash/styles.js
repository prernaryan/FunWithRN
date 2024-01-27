import {
  FontWithBold,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  fontPixel,
  heightPixel,
  widthPixel,
} from '@utils/responsive';
import {Alignment, Colors, Value} from '@constants';

export default {
  mainContainer: {
    flex: Value.CONSTANT_VALUE_1,
    backgroundColor: Colors.BLACK_0,
  },
  backgroundVideo: {
    flex: Value.CONSTANT_VALUE_1,
    justifyContent: Alignment.CENTER,
    alignItems: Alignment.CENTER,
    width: SCREEN_WIDTH,
  },
};
