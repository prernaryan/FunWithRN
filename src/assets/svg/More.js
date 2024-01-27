import React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

const More = ({Colors, style,width,height}) => {
  return (
    <TouchableOpacity style={style}>
      <Svg
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Circle cx="8" cy="4" r="1" fill={Colors.text} />
        <Circle cx="8" cy="8" r="1" fill={Colors.text} />
        <Circle cx="8" cy="12" r="1" fill={Colors.text} />
      </Svg>
    </TouchableOpacity>
  );
};

export default More;
