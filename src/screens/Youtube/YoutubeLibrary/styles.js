import {Alignment, Colors, Value} from '@constants';
import {
  FontWithBold,
  SCREEN_WIDTH,
  fontPixel,
  heightPixel,
  widthPixel,
} from '@utils/responsive';

export default {
  mainCntainer: {
    flex: Value.CONSTANT_VALUE_1,
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
  line:{
    width: SCREEN_WIDTH,
    height: Value.CONSTANT_VALUE_FRAC50,
    backgroundColor: '#272727',
    marginTop: heightPixel(Value.CONSTANT_VALUE_70),
  }
};
