import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
const LibraryIcon = ({width, height, Colors, isFocues}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G id="navigate">
        {isFocues ? (
          <Path
            id="Subtract"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.5 3H6.5V18H21.5V3ZM11.5 13.9641L17.5 10.5L11.5 7.0359L11.5 13.9641Z"
            fill={Colors.text}
          />
        ) : (
          <Path
            id="Rectangle 63 (Stroke)"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.5 3H21.5V18H6.5V3ZM7.5 4V17H20.5V4H7.5Z"
            fill={Colors.text}
          />
        )}
        <Path
          id="Polygon 5"
          d="M17.5 10.5002L11.5 13.9643L11.5 7.03613L17.5 10.5002Z"
          fill={isFocues ? Colors.primary : Colors.text}
        />
        <Path
          id="Vector 842 (Stroke)"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.5 6.5H4.5V20H18V21H3.5V6.5Z"
          fill={Colors.text}
        />
      </G>
    </Svg>
  );
};

export default LibraryIcon;
