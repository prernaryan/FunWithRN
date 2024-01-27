import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {useTheme} from '../../../theme/ThemeProvider';
import Avatar from '@assets/svg/Avatar';
import {heightPixel, widthPixel} from '@utils/responsive';
import {Strings, Value} from '@constants';
import More from '@assets/svg/More';
import {shortsData} from '@screens/EntryScreen/chooseData';
import ShortsIconRed from '@assets/svg/ShortsIconRed';

const YoutubeVideo = ({text}) => {
  const {Colors} = useTheme();

  const renderShorts = ({item}) => {
    return (
      <View
        style={[styles.shortsCotainer, {backgroundColor: Colors.labelBack}]}>
        <More Colors={Colors} style={styles.moreIcon}  width={widthPixel(Value.CONSTANT_VALUE_16)}
          height={heightPixel(Value.CONSTANT_VALUE_16)}/>
        <Text style={[styles.shortstitleText, {color: Colors.text}]}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <>
      <View
        style={[styles.mainContainer, {backgroundColor: Colors.labelBack}]}
      />
      <View style={styles.row}>
        <Avatar
          width={widthPixel(Value.CONSTANT_VALUE_28)}
          height={heightPixel(Value.CONSTANT_VALUE_28)}
        />
        <Text style={[styles.vdoText, {color: Colors.text}]}>{text}</Text>
        <More
          Colors={Colors}
          width={widthPixel(Value.CONSTANT_VALUE_16)}
          height={heightPixel(Value.CONSTANT_VALUE_16)}
        />
      </View>
      <View style={styles.shortsRow}>
        <ShortsIconRed />
        <Text style={[styles.shorts, {color: Colors.text}]}>
          {Strings.SHORT}
        </Text>
      </View>
      <FlatList
        data={shortsData}
        renderItem={renderShorts}
        horizontal
        style={styles.horizontalList}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default YoutubeVideo;
