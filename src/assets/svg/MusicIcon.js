import {TouchableOpacity} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const MusicIcon = ({style}) => {
  return (
    <TouchableOpacity style={style}>
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.3335 11.3332C3.59712 11.3332 3.00016 11.9301 3.00016 12.6665C3.00016 13.4029 3.59712 13.9998 4.3335 13.9998C5.06988 13.9998 5.66683 13.4029 5.66683 12.6665C5.66683 11.9301 5.06988 11.3332 4.3335 11.3332ZM2.3335 12.6665C2.3335 11.5619 3.22893 10.6665 4.3335 10.6665C5.43807 10.6665 6.3335 11.5619 6.3335 12.6665C6.3335 13.7711 5.43807 14.6665 4.3335 14.6665C3.22893 14.6665 2.3335 13.7711 2.3335 12.6665Z"
        fill="white"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9998 1.56885V10.6665H11.3332V2.76419L6.33317 5.85243V12.6665H5.6665V5.48061L11.9998 1.56885Z"
        fill="white"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 9.33317C9.26362 9.33317 8.66667 9.93012 8.66667 10.6665C8.66667 11.4029 9.26362 11.9998 10 11.9998C10.7364 11.9998 11.3333 11.4029 11.3333 10.6665C11.3333 9.93012 10.7364 9.33317 10 9.33317ZM8 10.6665C8 9.56193 8.89543 8.6665 10 8.6665C11.1046 8.6665 12 9.56193 12 10.6665C12 11.7711 11.1046 12.6665 10 12.6665C8.89543 12.6665 8 11.7711 8 10.6665Z"
        fill="white"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.8417 4.4505L6.17504 7.9505L5.82471 7.3833L11.4914 3.8833L11.8417 4.4505Z"
        fill="white"
      />
    </Svg>
    </TouchableOpacity>
  );
};

export default MusicIcon;
