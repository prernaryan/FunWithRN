import {Alignment, Colors, Value} from '@constants';
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
  sideContainer: {marginRight: widthPixel(Value.CONSTANT_VALUE_19)},
  like: {
    marginTop: heightPixel(Value.CONSTANT_VALUE_240),
    alignItems: Alignment.FLEXEND,
  },
  likeText: {
    ...FontWithBold.Bold_400,
    fontSize: fontPixel(Value.CONSTANT_VALUE_12),
    textAlign: Alignment.RIGHT,
    marginTop: heightPixel(Value.CONSTANT_VALUE_4),
    paddingHorizontal: widthPixel(Value.CONSTANT_VALUE_5),
    color: Colors.WHITE,
  },
  dislike: {
    alignItems: Alignment.FLEXEND,
    marginTop: heightPixel(Value.CONSTANT_VALUE_24),
  },
  comment: {
    alignItems: Alignment.FLEXEND,
    marginTop: heightPixel(Value.CONSTANT_VALUE_24),
  },
  BoxAvatar: {
    alignItems: Alignment.FLEXEND,
  },
  buttonRowContainer: {
    flexDirection: Alignment.ROW,
    justifyContent: Alignment.SPACE_EVENLY,
  },
  nameTxt: {
    ...FontWithBold.Bold_500,
    fontSize: fontPixel(Value.CONSTANT_VALUE_14),
    color: Colors.WHITE,
    marginRight: heightPixel(Value.CONSTANT_VALUE_20),
  },
  btnContainer: {
    backgroundColor: Colors.RED,
    borderRadius: widthPixel(Value.CONSTANT_VALUE_4),
    paddingVertical: heightPixel(Value.CONSTANT_VALUE_4),
    paddingHorizontal: widthPixel(Value.CONSTANT_VALUE_8),
    marginRight: widthPixel(Value.CONSTANT_VALUE_90),
  },
  detilTxtContainer: {
    flexDirection: Alignment.ROW,
    alignItems: Alignment.FLEXEND,
    justifyContent: Alignment.SPACE_BETWEEN,
    marginLeft: widthPixel(Value.CONSTANT_VALUE_16),
  },
  detailText: {
    ...FontWithBold.Bold_500,
    fontSize: fontPixel(Value.CONSTANT_VALUE_16),
    color: Colors.WHITE,
    paddingVertical: heightPixel(Value.CONSTANT_VALUE_11),
  },
  musicContainer: {
    flexDirection: Alignment.ROW,
    marginLeft: widthPixel(Value.CONSTANT_VALUE_16),
  },
  soundText:{
    ...FontWithBold.Bold_400,
    fontSize: fontPixel(Value.CONSTANT_VALUE_14),
  }
};
