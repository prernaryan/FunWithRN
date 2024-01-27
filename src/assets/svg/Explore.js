import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import {heightPixel, widthPixel} from '@utils/responsive';
import {View} from 'react-native';
const Explore = ({style, isSelected, Colors}) => {
  return (
    <View style={style}>
      <Svg
        width={widthPixel(24)}
        height={heightPixel(24)}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <G id="Explore">
          <Path
            id="Ellipse 67 (Stroke)"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
            fill={isSelected ? Colors.primary : Colors.text}
          />
          <Path
            id="Subtract"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.5577 5.49779L9.76348 9.99779L6.58103 18.7634L14.4955 14.1939L17.5577 5.49779ZM12.746 13.3865C13.4977 13.0383 13.8249 12.1467 13.4767 11.395C13.1286 10.6433 12.2369 10.3161 11.4852 10.6643C10.7335 11.0125 10.4064 11.9041 10.7545 12.6558C11.1027 13.4075 11.9943 13.7347 12.746 13.3865Z"
            fill={isSelected ? Colors.primary : Colors.text}
          />
        </G>
      </Svg>
    </View>
  );
};

export default Explore;
