import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Svg, {
  Rect,
  Circle,
  Defs,
  Pattern,
  Use,
  Image,
} from 'react-native-svg';

const CircleAvatar = ({onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
    <Svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink">
      <Rect width="56" height="56" rx="28" fill="#D9D9D9" />
      <Rect width="56" height="56" rx="28" fill="url(#pattern0)" />
      <Circle
        cx="48"
        cy="48"
        r="5"
        fill="#5CA4F8"
        stroke="black"
        stroke-width="2"
      />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <Use href="#image0_623_843" transform="scale(0.015625)" />
        </Pattern>
        <Image
          id="image0_623_843"
          width="64"
          height="64"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAONJREFUeF7t20EOhEAIRFG4/6F7DvEnYeFzryQIv6pBd2behOu9dPvsbog+k+NLgArQAqmJcw9iAAhSgZKB3IJkkAySQTJ4CiE+gA8oBeg0mH3Ai084P89HhqwEqIA209ICsQdjAeaZIgaAYKxBDMCAYy8fXwAIgiAIcoJpJEYGI4VjB3YrbC9gL2AvkCB43cM5PgZgAAZgQFnNZAhdGykQBEEQBEEQDBmgAm2glM/z+QUYisYUGoldO7kY32IEAzCg6RgIRgjFAsw+AgRBMNYgBmCAT2TCYfoPPz/HCqQCX1eBHzHnv7C7WhBSAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
    </TouchableOpacity>
  );
};

export default CircleAvatar;
