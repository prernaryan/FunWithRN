import {Alignment, Value} from '@constants';
import {heightPixel, isIOS, widthPixel} from '@utils/responsive';

export default {
  mainContainer: {
    marginTop: isIOS()
      ? heightPixel(Value.CONSTANT_VALUE_50)
      : heightPixel(Value.CONSTANT_VALUE_12),
    paddingHorizontal: widthPixel(Value.CONSTANT_VALUE_12),
    flexDirection: Alignment.ROW,
    justifyContent: Alignment.SPACE_BETWEEN,
  },
  innerRow: {
    flexDirection: Alignment.ROW,
  },
};
