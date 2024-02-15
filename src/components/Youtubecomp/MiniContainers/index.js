import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useTheme} from '../../../theme/ThemeProvider';
import More from '@assets/svg/More';
import {heightPixel, widthPixel} from '@utils/responsive';
import {Value} from '@constants';

const MiniContainers = () => {
  const {Colors} = useTheme();
  return (
    <TouchableOpacity style={styles.mainView}>
      <View
        style={[styles.mainContainers, {backgroundColor: Colors.labelBack}]}>
        <View style={[styles.timerBox, {backgroundColor: Colors.BLACK_400}]}>
          <Text style={[styles.miniText, {color: Colors.WHITE}]}>12:40</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={[styles.headingText, {color: Colors.text}]}>
          What's Figma?
        </Text>
        <More
          Colors={Colors}
          width={widthPixel(Value.CONSTANT_VALUE_16)}
          height={heightPixel(Value.CONSTANT_VALUE_16)}
          style={{marginLeft: widthPixel(Value.CONSTANT_VALUE_60)}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MiniContainers;
