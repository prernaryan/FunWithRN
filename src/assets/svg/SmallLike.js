import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';

const SmallLike = ({Colors,onPress,style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.3335 6.33325H5.00016V14.3333H1.3335V6.33325ZM2.00016 6.99992V13.6666H4.3335V6.99992H2.00016Z"
        fill={Colors.text}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.7337 2.92316C10.9855 2.25185 10.1451 1.7107 9.63809 2.21767L5.00016 6.8556V13.6669H11.1392C11.8908 13.6669 12.5494 13.1638 12.7472 12.4387L13.8859 8.26331C14.0594 7.62717 13.5805 7.00019 12.9212 7.00019H9.68583C9.57651 7.00019 9.47413 6.94658 9.41186 6.85672C9.34959 6.76686 9.33534 6.65218 9.37372 6.54982L10.7337 2.92316ZM4.56292 6.35004L9.16669 1.74627C10.1806 0.732331 11.8614 1.81461 11.3579 3.15724L10.1668 6.33352H12.9212C14.0201 6.33352 14.8183 7.37849 14.5291 8.43872L13.3904 12.6141C13.1135 13.6293 12.1915 14.3335 11.1392 14.3335H4.66683C4.48273 14.3335 4.3335 14.1843 4.3335 14.0002V6.66686C4.3335 6.51905 4.4297 6.3937 4.56292 6.35004Z"
        fill={Colors.text}
      />
    </Svg>
    </TouchableOpacity>
  );
};

export default SmallLike;
