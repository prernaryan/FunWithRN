import {Alignment, Value} from '@constants';
import {
  FontWithBold,
  fontPixel,
  heightPixel,
  isIOS,
  widthPixel,
} from '@utils/responsive';

export default {
  rowContainer: {
    flexDirection: Alignment.ROW,
    marginTop: isIOS()
      ? heightPixel(Value.CONSTANT_VALUE_54)
      : heightPixel(Value.CONSTANT_VALUE_15),
    justifyContent: Alignment.FLEXEND,
    marginRight: widthPixel(Value.CONSTANT_VALUE_12),
  },
  cameraIcon: {paddingHorizontal: widthPixel(Value.CONSTANT_VALUE_18)},
  like: {
    marginTop: heightPixel(Value.CONSTANT_VALUE_240),
    alignItems: Alignment.FLEXEND,
  },
  likeText: {
    ...FontWithBold.Bold_400,
    FontSize: fontPixel(Value.CONSTANT_VALUE_12),
    textAlign: Alignment.RIGHT,
    marginTop: heightPixel(Value.CONSTANT_VALUE_4),
    paddingHorizontal: widthPixel(Value.CONSTANT_VALUE_5),
  },
  dislike: {
    alignItems: Alignment.FLEXEND,
    marginTop: heightPixel(Value.CONSTANT_VALUE_24),
  },
  comment: {
    alignItems: Alignment.FLEXEND,
    marginTop: heightPixel(Value.CONSTANT_VALUE_24),
  },
};
