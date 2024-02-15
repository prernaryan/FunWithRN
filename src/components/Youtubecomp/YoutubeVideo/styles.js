import {Alignment, Value} from '@constants';
import {
  FontWithBold,
  fontPixel,
  height,
  heightPixel,
  widthPixel,
} from '@utils/responsive';

export default {
  mainContainer: {
    paddingVertical: heightPixel(Value.CONSTANT_VALUE_105),
    // height:105,
    // width:'100%',
    marginTop: Value.CONSTANT_VALUE_8,
    alignItems: Alignment.CENTER,
    justifyContent: Alignment.CENTER,
  },
  row: {
    flexDirection: Alignment.ROW,
    justifyContent: Alignment.SPACE_BETWEEN,
    marginTop: heightPixel(Value.CONSTANT_VALUE_12),
    paddingHorizontal: widthPixel(Value.CONSTANT_VALUE_12),
  },
  vdoText: {
    ...FontWithBold.Bold_400,
    fontSize: fontPixel(Value.CONSTANT_VALUE_16),
  },
  shortsRow: {
    flexDirection: Alignment.ROW,
    paddingHorizontal: widthPixel(Value.CONSTANT_VALUE_12),
    marginTop: heightPixel(Value.CONSTANT_VALUE_40),
  },
  shortsCotainer: {
    width: widthPixel(Value.CONSTANT_VALUE_158),
    height: heightPixel(Value.CONSTANT_VALUE_264),
    marginHorizontal: widthPixel(Value.CONSTANT_VALUE_12),
    borderRadius: widthPixel(Value.CONSTANT_VALUE_8),
    justifyContent: Alignment.SPACE_BETWEEN,
  },
  shorts: {
    ...FontWithBold.Bold_500,
    fontSize: fontPixel(Value.CONSTANT_VALUE_16),
    alignItems: Alignment.CENTER,
  },
  shortstitleText: {
    ...FontWithBold.Bold_400,
    fontSize: fontPixel(Value.CONSTANT_VALUE_14),
    margin: widthPixel(Value.CONSTANT_VALUE_8),
  },
  moreIcon: {
    alignItems: Alignment.FLEXEND,
    marginRight: widthPixel(Value.CONSTANT_VALUE_4),
    marginTop: heightPixel(Value.CONSTANT_VALUE_8),
  },
  horizontalList: {
    marginTop: heightPixel(Value.CONSTANT_VALUE_8),
  },
  timerBox: {
    position: 'absolute',
    bottom:60,
    height: heightPixel(Value.CONSTANT_VALUE_25),
    width: widthPixel(Value.CONSTANT_VALUE_50),
    borderRadius: widthPixel(Value.CONSTANT_VALUE_6),
    justifyContent: Alignment.CENTER,
    right:20,
  },
  miniText: {
    textAlign: Alignment.CENTER,
  },
};
