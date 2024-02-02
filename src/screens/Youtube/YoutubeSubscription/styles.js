import {Alignment, Colors, Value} from '@constants';
import {
  FontWithBold,
  fontPixel,
  heightPixel,
  widthPixel,
} from '@utils/responsive';

export default {
  mainCntainer: {
    flex: Value.CONSTANT_VALUE_1,
  },
  profileContainer: {
    flexDirection: Alignment.ROW,
    marginTop: heightPixel(Value.CONSTANT_VALUE_20),
    marginHorizontal: widthPixel(Value.CONSTANT_VALUE_12),
    alignItems: Alignment.CENTER,
  },
  allText: {
    ...FontWithBold.Bold_500,
    fontSize: fontPixel(Value.CONSTANT_VALUE_14),
    color: Colors.BLUE,
    marginLeft: widthPixel(Value.CONSTANT_VALUE_10),
  },
  renderContainer: {
    flex: Value.CONSTANT_VALUE_1,
    marginHorizontal: widthPixel(Value.CONSTANT_VALUE_8),
  },
  renderText:{
    marginTop: heightPixel(Value.CONSTANT_VALUE_5)
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
    marginRight: widthPixel(Value.CONSTANT_VALUE_30),
  },
  Innercontainer: {
    paddingVertical: heightPixel(Value.CONSTANT_VALUE_105),
    marginTop: heightPixel(Value.CONSTANT_VALUE_8),
    alignItems: Alignment.CENTER,
    justifyContent: Alignment.CENTER,
  },
  otherInner:{
    marginTop: heightPixel(Value.CONSTANT_VALUE_30),
    alignItems: Alignment.CENTER,
    justifyContent: Alignment.CENTER,
  }
};
