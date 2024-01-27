import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useTheme} from '../../theme/ThemeProvider';
import YoutubeLogo from '@assets/svg/YoutubeLogo';
import styles from './styles';
import DeviceConnect from '@assets/svg/DeviceConnect';
import Notification from '@assets/svg/Notification';
import SearchIcon from '@assets/svg/SearchIcon';
import Avatar from '@assets/svg/Avatar';
import {Value} from '@constants';
import {heightPixel, widthPixel} from '@utils/responsive';

const Youtubecomp = ({}) => {
  const {Colors} = useTheme();
  const commonStyle = {marginRight: 18};

  return (
    <View style={[styles.mainContainer, {backgroundColor: Colors.primary}]}>
      <YoutubeLogo Colors={Colors} />
      <View style={styles.innerRow}>
        <DeviceConnect Colors={Colors} style={{...commonStyle}} />
        <Notification Colors={Colors} style={commonStyle} />
        <SearchIcon Colors={Colors} style={commonStyle} />
        <Avatar
          width={widthPixel(Value.CONSTANT_VALUE_24)}
          height={heightPixel(Value.CONSTANT_VALUE_24)}
        />
      </View>
    </View>
  );
};

export default Youtubecomp;
