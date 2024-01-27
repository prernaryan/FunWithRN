import {Value} from '@constants';
import {heightPixel, widthPixel} from '@utils/responsive';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const SearchIcon = ({Colors, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Svg
        width={widthPixel(Value.CONSTANT_VALUE_24)}
        height={heightPixel(Value.CONSTANT_VALUE_24)}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10Z"
          fill={Colors.text}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.1465 20.8536L14.1465 14.8536L14.8536 14.1465L20.8536 20.1465L20.1465 20.8536Z"
          fill={Colors.text}
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default SearchIcon;
