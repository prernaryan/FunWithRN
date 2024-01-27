import {TouchableOpacity} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CommentBox = ({style, onPress}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.25 3.75C4.86929 3.75 3.75 4.86929 3.75 6.25V19.375C3.75 20.7557 4.86929 21.875 6.25 21.875H20.625L24.6496 25.8996C25.2402 26.4902 26.25 26.0719 26.25 25.2367V19.375V6.25C26.25 4.86929 25.1307 3.75 23.75 3.75H6.25ZM8.125 10C8.125 9.30964 8.68464 8.75 9.375 8.75H20.625C21.3154 8.75 21.875 9.30964 21.875 10C21.875 10.6904 21.3154 11.25 20.625 11.25H9.375C8.68464 11.25 8.125 10.6904 8.125 10ZM9.375 14.375C8.68464 14.375 8.125 14.9346 8.125 15.625C8.125 16.3154 8.68464 16.875 9.375 16.875H16.875C17.5654 16.875 18.125 16.3154 18.125 15.625C18.125 14.9346 17.5654 14.375 16.875 14.375H9.375Z"
          fill="white"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default CommentBox;
