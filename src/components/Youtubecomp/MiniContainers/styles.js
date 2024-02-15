import {Alignment, Colors, Value} from '@constants';
import {
  FontWithBold,
  fontPixel,
  heightPixel,
  widthPixel,
} from '@utils/responsive';

export default {
  mainContainers: {
    height: 120,
    borderRadius: widthPixel(Value.CONSTANT_VALUE_20),
    width:widthPixel(Value.CONSTANT_VALUE_180),
  },
  mainView:{
    marginTop: heightPixel(Value.CONSTANT_VALUE_20),
    marginLeft: widthPixel(Value.CONSTANT_VALUE_20),
  },
  timerBox: {
    position: 'absolute',
    bottom:10,
    height: heightPixel(Value.CONSTANT_VALUE_25),
    width: widthPixel(Value.CONSTANT_VALUE_50),
    borderRadius: widthPixel(Value.CONSTANT_VALUE_6),
    justifyContent: Alignment.CENTER,
    right:10,
  },
  miniText: {
    textAlign: Alignment.CENTER,
  },
  headingText: {
    // marginLeft: widthPixel(Value.CONSTANT_VALUE_25),
  },
  upperContainer: {
    flexDirection: Alignment.ROW,
    paddingHorizontal: widthPixel(Value.CONSTANT_VALUE_19),
    justifyContent: Alignment.SPACE_BETWEEN,
    alignItems: Alignment.CENTER,
  },
  historyTxt: {
    ...FontWithBold.Bold_500,
    fontSize: fontPixel(Value.CONSTANT_VALUE_16),
    right: widthPixel(Value.CONSTANT_VALUE_110),
  },
  viewAll: {
    ...FontWithBold.Bold_600,
    fontSize: fontPixel(Value.CONSTANT_VALUE_14),
    textAlign: Alignment.CENTER,
  },
  row: {
    flexDirection: Alignment.ROW,
    marginTop: heightPixel(Value.CONSTANT_VALUE_8),
  },
};
