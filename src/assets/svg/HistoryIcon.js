import {TouchableOpacity} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const HistoryIcon = ({onPress,style, Colors}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.62143 3.00956C9.85835 1.92013 12.4211 1.70373 14.809 2.40263C17.1969 3.10154 19.2385 4.66554 20.535 6.78914C21.8316 8.91275 22.2898 11.4434 21.8204 13.8868C21.3509 16.3302 19.9874 18.5109 17.9963 20.0028C16.0051 21.4947 13.5292 22.1908 11.0523 21.955C8.57542 21.7192 6.27538 20.5685 4.60146 18.7277C2.92755 16.8869 2 14.4881 2 12H3C3 14.2393 3.83479 16.3982 5.34131 18.0549C6.84784 19.7117 8.91788 20.7473 11.1471 20.9595C13.3763 21.1717 15.6046 20.5453 17.3966 19.2025C19.1887 17.8598 20.4158 15.8972 20.8383 13.6981C21.2609 11.4991 20.8484 9.22148 19.6815 7.31023C18.5147 5.39899 16.6772 3.99138 14.5281 3.36237C12.3789 2.73336 10.0725 2.92812 8.05929 3.90861C6.04606 4.8891 4.47067 6.58489 3.64082 8.66474L2.71202 8.29415C3.63407 5.98321 5.38452 4.099 7.62143 3.00956Z"
          fill={Colors.text}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 8V3H2V9H8V8H3Z"
          fill={Colors.text}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 7.25H12V12.724L15.5665 15.176L14.4335 16.824L10 13.776V7.25Z"
          fill={Colors.text}
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default HistoryIcon;
