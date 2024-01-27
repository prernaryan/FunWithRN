import React from 'react';
import {View} from 'react-native';
import {Routes, Value} from '@constants';
import HomeIcon from '@assets/svg/BottomSvg/HomeIcon';
import ShortsIcon from '@assets/svg/BottomSvg/ShortsIcon';
import MoreIcon from '@assets/svg/BottomSvg/MoreIcon';
import SubscriptionIcon from '@assets/svg/BottomSvg/SubscriptionIcon';
import LibraryIcon from '@assets/svg/BottomSvg/LibraryIcon';
import {heightPixel, widthPixel} from '@utils/responsive';
export const renderIcon = (label, isFocues, dark, Colors) => {
  let height = heightPixel(Value.CONSTANT_VALUE_24);
  let width = widthPixel(Value.CONSTANT_VALUE_24);
  switch (label) {
    case Routes.YoutubeHome:
      return (
        <HomeIcon
          height={height}
          width={width}
          isFocues={isFocues}
          dark={dark}
        />
      );
    case Routes.YoutubeShorts:
      return (
        <ShortsIcon
          height={height}
          width={width}
          isFocues={isFocues}
          Colors={Colors}
        />
      );
    case Routes.YoutubeMore:
      return (
        <MoreIcon
          height={heightPixel(38)}
          width={widthPixel(38)}
          isFocues={isFocues}
          Colors={Colors}
        />
      );
    case Routes.YoutubeSubscription:
      return (
        <SubscriptionIcon
          height={height}
          width={width}
          isFocues={isFocues}
          Colors={Colors}
        />
      );
    case Routes.YoutubeLibrary:
      return (
        <LibraryIcon
          height={height}
          width={width}
          isFocues={isFocues}
          Colors={Colors}
        />
      );
    default:
      break;
  }
};
const NavigationIcon = ({label, isFocused, dark, Colors}) => {
  return <View>{renderIcon(label, isFocused, dark, Colors)}</View>;
};

export default NavigationIcon;
