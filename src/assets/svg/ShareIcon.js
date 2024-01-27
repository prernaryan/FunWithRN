import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ShareIcon = ({style,onPress}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.4089 15.9449C26.9845 15.4464 26.9845 14.5535 26.4089 14.0551L16.0342 5.07026C15.6294 4.71971 15 5.00725 15 5.54272V9.99985C8.44162 9.99985 3.125 15.3165 3.125 21.8748C3.125 22.811 3.23333 23.7219 3.43815 24.5956C3.55729 25.1039 4.22073 25.1899 4.54339 24.7796C6.83204 21.8691 10.3852 19.9998 14.375 19.9998C14.5846 19.9998 14.7929 20.005 15 20.0152V24.4572C15 24.9927 15.6294 25.2802 16.0342 24.9297L26.4089 15.9449Z"
          fill="white"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default ShareIcon;
