import {TouchableOpacity} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SmallDislike = ({Colors,onPress,style}) => {
  return (
    <TouchableOpacity onPress={onPress}style={style}>
      <Svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.5884 9.34692L14.9217 9.34692L14.9217 1.34692L18.5884 1.34692L18.5884 9.34692ZM17.9217 8.68026L17.9217 2.01359L15.5884 2.01359L15.5884 8.68026L17.9217 8.68026Z"
          fill="white"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.18815 12.7573C8.93641 13.4286 9.77681 13.9697 10.2838 13.4627L14.9217 8.82482L14.9217 2.01356L8.78264 2.01356C8.03105 2.01356 7.37245 2.5166 7.1747 3.2417L6.03595 7.41711C5.86246 8.05325 6.34134 8.68023 7.00071 8.68023L10.236 8.68023C10.3454 8.68023 10.4477 8.73384 10.51 8.8237C10.5723 8.91356 10.5865 9.02824 10.5482 9.1306L9.18815 12.7573ZM15.359 9.33038L10.7552 13.9342C9.74125 14.9481 8.06045 13.8658 8.56394 12.5232L9.75504 9.3469L7.00071 9.3469C5.90176 9.3469 5.10362 8.30193 5.39277 7.2417L6.53152 3.06629C6.80838 2.05114 7.73042 1.3469 8.78264 1.3469L15.255 1.3469C15.4391 1.3469 15.5884 1.49614 15.5884 1.68023L15.5884 9.01356C15.5884 9.16137 15.4922 9.28672 15.359 9.33038Z"
          fill="white"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default SmallDislike;
