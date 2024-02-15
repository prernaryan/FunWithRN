import {
  FontWithBold,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  fontPixel,
  heightPixel,
  isIOS,
  widthPixel,
} from '@utils/responsive';
import {Alignment, Colors, Value} from '@constants';

export default {
  mainContainer: {
    flex: Value.CONSTANT_VALUE_1,
    backgroundColor: Colors.BLACK_0,
  },
  headingContainer: {
    flexDirection: Alignment.ROW,
    justifyContent: Alignment.SPACE_BETWEEN,
    paddingHorizontal: widthPixel(Value.CONSTANT_VALUE_25),
    alignItems: Alignment.CENTER,
  },
  headingText: {
    ...FontWithBold.Bold_500,
    fontSize: fontPixel(Value.CONSTANT_VALUE_24),
    left: widthPixel(Value.CONSTANT_VALUE_70),
    color: Colors.WHITE,
    marginTop: isIOS() ? heightPixel(Value.CONSTANT_VALUE_50) : 0,
  },
  edit: {
    ...FontWithBold.Bold_500,
    fontSize: fontPixel(Value.CONSTANT_VALUE_18),
    color: Colors.WHITE,
    marginTop: isIOS() ? heightPixel(Value.CONSTANT_VALUE_50) : 0,
  },
};
