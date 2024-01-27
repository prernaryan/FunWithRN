import {
  FontWithBold,
  SCREEN_HEIGHT,
  fontPixel,
  heightPixel,
  widthPixel,
} from '@utils/responsive';
import {Alignment, Value} from '@constants';

export default {
  headerContainer: {
    flexDirection: Alignment.ROW,
    justifyContent: Alignment.SPACE_EVENLY,
    alignItems: Alignment.CENTER,
    marginTop: heightPixel(Value.CONSTANT_VALUE_60),
  },
  headerText: {
    ...FontWithBold.Bold_700,
    fontSize: fontPixel(Value.CONSTANT_VALUE_22),
  },
  image: {
    width: widthPixel(Value.CONSTANT_VALUE_30),
    height: widthPixel(Value.CONSTANT_VALUE_30),
    marginHorizontal: widthPixel(Value.CONSTANT_VALUE_40),
  },
  mainContainer: {
    flex: Value.CONSTANT_VALUE_1,
    alignItems: Alignment.CENTER,
    paddingHorizontal: widthPixel(Value.CONSTANT_VALUE_30),
  },
  gradientBox: {
    height: SCREEN_HEIGHT / 2,
    marginTop: heightPixel(Value.CONSTANT_VALUE_60),
    borderRadius: widthPixel(Value.CONSTANT_VALUE_40),
    shadowColor: '#652410',
    shadowOffset: {
      width: widthPixel(Value.CONSTANT_VALUE_1),
      height: widthPixel(Value.CONSTANT_VALUE_6),
    },
    shadowOpacity: Value.CONSTANT_VALUE_FRAC25,
    shadowRadius: Value.CONSTANT_VALUE_FRAC3_84,
    elevation: Value.CONSTANT_VALUE_5,
  },
  renderMain: {
    alignItems: Alignment.CENTER,
    paddingVertical: heightPixel(Value.CONSTANT_VALUE_40),
    width: widthPixel(Value.CONSTANT_VALUE_120),
  },
  renderImg: {
    width: widthPixel(Value.CONSTANT_VALUE_50),
    height: widthPixel(Value.CONSTANT_VALUE_50),
  },
  renderTxt: color => ({
    ...FontWithBold.Bold_500,
    color: color,
    fontSize: fontPixel(Value.CONSTANT_VALUE_18),
  }),

  list: {
    padding: widthPixel(Value.CONSTANT_VALUE_60),
  },
};
