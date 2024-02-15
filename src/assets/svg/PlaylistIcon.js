import React from 'react';
import Svg, {Path} from 'react-native-svg';

const PlaylistIcon = ({Colors}) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M2 7H22V8H2V7Z" fill={Colors.text} />
      <Path d="M2 11H13V12H2V11Z" fill={Colors.text} />
      <Path d="M2 15H13V16H2V15Z" fill={Colors.text} />
      <Path
        d="M21.5 15.0002L15.5 18.4643L15.5 11.5361L21.5 15.0002Z"
        fill={Colors.text}
      />
    </Svg>
  );
};

export default PlaylistIcon;
