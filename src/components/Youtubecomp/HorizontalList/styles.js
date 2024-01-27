import {Alignment, Value} from '@constants';
import { FontWithBold, fontPixel } from '@utils/responsive';

export default {
  mainContainer: {
    marginTop: Value.CONSTANT_VALUE_18,
  },
  renderContainer: {
    borderRadius: Value.CONSTANT_VALUE_8,
    alignItems: Alignment.CENTER,
    marginHorizontal: Value.CONSTANT_VALUE_8,
  },
  renderText: {
    ...FontWithBold.Bold_500,
    textAlign: Alignment.CENTER,
    paddingVertical: Value.CONSTANT_VALUE_8,
    paddingHorizontal: Value.CONSTANT_VALUE_12,
    lineHeight: Value.CONSTANT_VALUE_22,
    fontSize: fontPixel(Value.CONSTANT_VALUE_14),
  },
};