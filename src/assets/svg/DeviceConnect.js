import {Value} from '@constants';
import {heightPixel, widthPixel} from '@utils/responsive';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const DeviceConnect = ({Colors, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Svg
        width={widthPixel(Value.CONSTANT_VALUE_24)}
        height={heightPixel(Value.CONSTANT_VALUE_24)}
        viewBox={`0 0 ${widthPixel(Value.CONSTANT_VALUE_24)} ${heightPixel(
          Value.CONSTANT_VALUE_24,
        )}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 4H22V20H14V19H21V5H3V8H2V4Z"
          fill={Colors.text}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 10C3.31322 10 4.61358 10.2587 5.82683 10.7612C7.04009 11.2638 8.14248 12.0003 9.07107 12.9289C9.99965 13.8575 10.7362 14.9599 11.2388 16.1732C11.7413 17.3864 12 18.6868 12 20H10C10 18.9494 9.79307 17.9091 9.39104 16.9385C8.989 15.9679 8.39972 15.086 7.65685 14.3431C6.91399 13.6003 6.03207 13.011 5.06147 12.609C4.09086 12.2069 3.05057 12 2 12V10Z"
          fill={Colors.text}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 13.5C2.85359 13.5 3.69883 13.6681 4.48744 13.9948C5.27606 14.3214 5.99261 14.8002 6.59619 15.4038C7.19978 16.0074 7.67856 16.7239 8.00522 17.5126C8.33187 18.3012 8.5 19.1464 8.5 20H6.5C6.5 19.4091 6.3836 18.8239 6.15746 18.2779C5.93131 17.732 5.59984 17.2359 5.18198 16.818C4.76412 16.4002 4.26804 16.0687 3.72208 15.8425C3.17611 15.6164 2.59095 15.5 2 15.5L2 13.5Z"
          fill={Colors.text}
        />
        <Path
          d="M5 20C5 19.606 4.9224 19.2159 4.77164 18.8519C4.62087 18.488 4.3999 18.1573 4.12132 17.8787C3.84274 17.6001 3.51203 17.3791 3.14805 17.2284C2.78407 17.0776 2.39397 17 2 17L2 20H5Z"
          fill={Colors.text}
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default DeviceConnect;
