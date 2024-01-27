import {Alignment, Value} from '@constants';

export default {
  mainContainer: Colors => ({
    flex: Value.CONSTANT_VALUE_1,
    backgroundColor: Colors.primary,
    alignItems: Alignment.CENTER,
    justifyContent: Alignment.CENTER,
  }),
};
