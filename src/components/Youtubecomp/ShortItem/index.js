import {View, Text, FlatList, ImageBackground} from 'react-native';
import React from 'react';
import ShortsIconRed from '@assets/svg/ShortsIconRed';
import {Strings, Value} from '@constants';
import {useTheme} from '../../../theme/ThemeProvider';
import styles from '../YoutubeVideo/styles';
import {heightPixel, widthPixel} from '@utils/responsive';
import More from '@assets/svg/More';

const ShortItem = ({shortHeader, shortList}) => {
  const {Colors} = useTheme();
  const renderShorts = ({item}) => {
    console.log('shortItem', item.thumbnail)
    return (
      <ImageBackground source={{uri:item.thumbnail}} resizeMode='cover'
        style={[styles.shortsCotainer, {backgroundColor: Colors.labelBack}]}>
        <More
          Colors={Colors}
          style={styles.moreIcon}
          width={widthPixel(Value.CONSTANT_VALUE_16)}
          height={heightPixel(Value.CONSTANT_VALUE_16)}
        />
        <Text style={[styles.shortstitleText, {color: Colors.text}]}>
          {item.title}
        </Text>
      </ImageBackground>
    );
  };
  return (
    <>
      <View style={styles.shortsRow}>
        <ShortsIconRed />
        <Text style={[styles.shorts, {color: Colors.text}]}>
          {shortHeader ?? Strings.SHORT}
        </Text>
      </View>
      <FlatList
        data={shortList}
        renderItem={renderShorts}
        horizontal
        style={styles.horizontalList}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default ShortItem;
