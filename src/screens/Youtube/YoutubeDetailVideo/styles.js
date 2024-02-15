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
  textMain: {
    ...FontWithBold.Bold_400,
    fontSize: fontPixel(Value.CONSTANT_VALUE_18),
    textAlign: Alignment.LEFT,
    marginLeft: 20,
  },
  subheading: {
    ...FontWithBold.Bold_400,
    fontSize: fontPixel(Value.CONSTANT_VALUE_12),
    textAlign: Alignment.LEFT,
    marginLeft: 26,
    marginTop:6,
  },
  imgText:{
    marginLeft:10,
    textAlign: Alignment.CENTER,
  }
};
