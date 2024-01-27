import {Value} from '@constants';
import {heightPixel, widthPixel} from '@utils/responsive';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, {
  G,
  Rect,
  Defs,
  Pattern,
  Use,
  ClipPath,
  Image,
} from 'react-native-svg';
const Avatar = ({onPress, width, height}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg
        width={width}
        height={height}
        viewBox={`0 0 ${widthPixel(Value.CONSTANT_VALUE_24)} ${heightPixel(
          Value.CONSTANT_VALUE_24,
        )}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <G clip-path="url(#clip0_131_10938)">
          <Rect width="24" height="24" rx="12" fill="#D9D9D9" />
          <Rect width="24" height="24" rx="12" fill="url(#pattern0)" />
        </G>
        <Defs>
          <Pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1">
            <Use href="#image0_131_10938" transform="scale(0.015625)" />
          </Pattern>
          <ClipPath id="clip0_131_10938">
            <Rect width="24" height="24" rx="12" fill="white" />
          </ClipPath>
          <Image
            id="image0_131_10938"
            width="64"
            height="64"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAONJREFUeF7t20EOhEAIRFG4/6F7DvEnYeFzryQIv6pBd2behOu9dPvsbog+k+NLgArQAqmJcw9iAAhSgZKB3IJkkAySQTJ4CiE+gA8oBeg0mH3Ai084P89HhqwEqIA209ICsQdjAeaZIgaAYKxBDMCAYy8fXwAIgiAIcoJpJEYGI4VjB3YrbC9gL2AvkCB43cM5PgZgAAZgQFnNZAhdGykQBEEQBEEQDBmgAm2glM/z+QUYisYUGoldO7kY32IEAzCg6RgIRgjFAsw+AgRBMNYgBmCAT2TCYfoPPz/HCqQCX1eBHzHnv7C7WhBSAAAAAElFTkSuQmCC"
          />
        </Defs>
      </Svg>
    </TouchableOpacity>
  );
};

export default Avatar;
