import React from 'react';
import Svg, {Path, G} from 'react-native-svg';
const SubscriptionIcon = ({width, height, Colors, isFocues}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G id="navigate">
        {isFocues ? (
          <>
            <Path
              id="Rectangle 60"
              d="M4.5 6H20.5V7H4.5V6Z"
              fill={Colors.text}
            />
            <Path
              id="Rectangle 61"
              d="M7.5 3H17.5V4H7.5V3Z"
              fill={Colors.text}
            />
            <Path
              id="Subtract"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.5 9H2.5V21H22.5V9ZM10.5 17.5981L15 15L10.5 12.4019V17.5981Z"
              fill={Colors.text}
            />
          </>
        ) : (
          <>
            <Path
              id="Rectangle 59 (Stroke)"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.5 9H22.5V21H2.5V9ZM3.5 10V20H21.5V10H3.5Z"
              fill={Colors.text}
            />
            <Path
              id="Rectangle 60"
              d="M4.5 6H20.5V7H4.5V6Z"
              fill={Colors.text}
            />
            <Path
              id="Rectangle 61"
              d="M7.5 3H17.5V4H7.5V3Z"
              fill={Colors.text}
            />
          </>
        )}
        <Path
          id="Polygon 5"
          d="M15 14.9999L10.5 17.598L10.5 12.4019L15 14.9999Z"
          fill={isFocues ? Colors.primary : Colors.text}
        />
      </G>
    </Svg>
  );
};

export default SubscriptionIcon;
