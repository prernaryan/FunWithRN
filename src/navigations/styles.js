import {Alignment, Colors, Value} from '../constants';
import {fontPixel, FontWithBold, heightPixel} from '../utils/responsive';

export default {
  tabBarLabelStyle: {
    ...FontWithBold.Bold_500,
    fontSize: fontPixel(Value.CONSTANT_VALUE_12),
    textAlign: Alignment.CENTER,
    marginTop: heightPixel(Value.CONSTANT_VALUE_4),
  },
  tabBarStyle: {
    // backgroundColor: Colors.AQUA_100,
    paddingTop: heightPixel(Value.CONSTANT_VALUE_10),
    minHeight: heightPixel(Value.CONSTANT_VALUE_90),
  },
};
