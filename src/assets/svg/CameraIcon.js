import {TouchableOpacity} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CameraIcon = ({width,height,Colors,style}) => {
  return (
    <TouchableOpacity style={style}>
      <Svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.18627 2.91876C8.37398 2.65597 8.67705 2.5 9 2.5H15C15.323 2.5 15.626 2.65597 15.8137 2.91876L17.6575 5.5H20C21.1046 5.5 22 6.39543 22 7.5V19.5C22 20.6046 21.1046 21.5 20 21.5H4C2.89543 21.5 2 20.6046 2 19.5V7.5C2 6.39543 2.89543 5.5 4 5.5H6.34252L8.18627 2.91876ZM9.51462 4.5L7.67088 7.08124C7.48316 7.34403 7.18009 7.5 6.85714 7.5L4 7.5V19.5H20V7.5H17.1429C16.8199 7.5 16.5168 7.34403 16.3291 7.08124L14.4854 4.5H9.51462Z"
          fill={Colors.text}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 10.5C10.8954 10.5 10 11.3954 10 12.5C10 13.6046 10.8954 14.5 12 14.5C13.1046 14.5 14 13.6046 14 12.5C14 11.3954 13.1046 10.5 12 10.5ZM8 12.5C8 10.2909 9.79086 8.5 12 8.5C14.2091 8.5 16 10.2909 16 12.5C16 14.7091 14.2091 16.5 12 16.5C9.79086 16.5 8 14.7091 8 12.5Z"
          fill={Colors.text}
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default CameraIcon;
