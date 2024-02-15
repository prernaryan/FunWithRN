import React from 'react';
import Svg, {Path, G, Defs, ClipPath, Rect} from 'react-native-svg';

const DownArrow = ({Colors}) => {
  return (
    <Svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0_644_2790)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 9.10352L1.05025 4.15377L1.40381 3.80021L6 8.39641L10.5962 3.80021L10.9497 4.15377L6 9.10352Z"
          fill={Colors.text}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_644_2790">
          <Rect width="12" height="12" fill={Colors.text}/>
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default DownArrow;
