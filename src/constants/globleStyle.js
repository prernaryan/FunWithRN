import {Alignment} from './Alignment';
import {Value} from './FixedValues';

const {StyleSheet} = require('react-native');

const globleStyle = StyleSheet.create({
  row: {
    flexDirection: Alignment.ROW,
  },
  rowBetween: {
    flexDirection: Alignment.ROW,
    justifyContent: Alignment.SPACE_BETWEEN,
  },
  flex: {flex: Value.CONSTANT_VALUE_1},
  center: {
    flex: Value.CONSTANT_VALUE_1,
    justifyContent: Alignment.CENTER,
    alignItems: Alignment.CENTER,
  },
  selfCenter: {alignSelf: Alignment.CENTER},
});
export default globleStyle;
