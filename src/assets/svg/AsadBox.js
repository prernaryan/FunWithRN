import {TouchableOpacity} from 'react-native';
import React from 'react';
import Svg, {Defs,Rect,Pattern,Use,Image} from 'react-native-svg';

const AsadBox = ({}) => {
  return (
    <TouchableOpacity>
    <Svg
      width="100"
      height="92"
      viewBox="0 0 100 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink">
      <Rect width="100" height="92" rx="7" fill="url(#pattern0)" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <Use
            href="#image0_1_93"
            transform="matrix(0.00367647 0 0 0.00399616 0 -0.0354859)"
          />
        </Pattern>
        <Image
          id="image0_1_93"
          width="272"
          height="268"
          href="data:image/jpeg;base64,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"
        />
      </Defs>
    </Svg>
    </TouchableOpacity>
  );
};

export default AsadBox;
