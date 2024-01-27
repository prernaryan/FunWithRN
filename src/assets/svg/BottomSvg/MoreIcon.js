import React from 'react';
import Svg, {Path, G, Circle} from 'react-native-svg';
const MoreIcon = ({width, height, Colors}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G id="Add">
        <Circle
          id="Ellipse 107"
          cx="19.4998"
          cy="18.9998"
          r="15.3333"
          stroke={Colors.text}
        />
        <Path
          id="Rectangle 165"
          d="M10.7915 17.8125H28.2082V20.1875H10.7915V17.8125Z"
          fill={Colors.text}
        />
        <Path
          id="Rectangle 166"
          d="M20.6875 10.2915L20.6875 27.7082L18.3125 27.7082L18.3125 10.2915L20.6875 10.2915Z"
          fill={Colors.text}
        />
      </G>
    </Svg>
  );
};

export default MoreIcon;
