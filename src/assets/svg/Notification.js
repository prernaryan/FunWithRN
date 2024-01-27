import {Value} from '@constants';
import {heightPixel, widthPixel} from '@utils/responsive';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Notification = ({Colors, onPress, style}) => {
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
          d="M12 5.5C9.23858 5.5 7 7.73858 7 10.5V15.7071L5 17.7071V18H19V17.7071L17 15.7071V10.5C17 7.73858 14.7614 5.5 12 5.5ZM6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5V15.2929L20 17.2929V19H4V17.2929L6 15.2929V10.5Z"
          fill={Colors.text}
        />
        <Path
          d="M10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4V5H10V4Z"
          fill={Colors.text}
        />
        <Path
          d="M14 20C14 20.2626 13.9483 20.5227 13.8478 20.7654C13.7472 21.008 13.5999 21.2285 13.4142 21.4142C13.2285 21.5999 13.008 21.7472 12.7654 21.8478C12.5227 21.9483 12.2626 22 12 22C11.7374 22 11.4773 21.9483 11.2346 21.8478C10.992 21.7472 10.7715 21.5999 10.5858 21.4142C10.4001 21.2285 10.2528 21.008 10.1522 20.7654C10.0517 20.5227 10 20.2626 10 20L12 20H14Z"
          fill={Colors.text}
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default Notification;
