import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
const HomeIcon = ({width, height, isFocues, dark}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G id="navigate">
        {isFocues ? (
          <Path
            id="Subtract"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.5 3L4.5 10V21H10.5V15H14.5V21H20.5V10L12.5 3Z"
            fill={dark ? 'white' : 'black'}
          />
        ) : (
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.5 14H15.5V20H19.5V10.4538L12.5 4.32877L5.5 10.4538V20H9.5V14ZM4.5 10L12.5 3L20.5 10V21H14.5V15H10.5V21H4.5V10Z"
            fill={dark ? 'white' : 'black'}
          />
        )}
      </G>
    </Svg>
  );
};

export default HomeIcon;
