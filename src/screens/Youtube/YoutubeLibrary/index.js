import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {useTheme} from '../../../theme/ThemeProvider';
import Youtubecomp from '@components/Youtubecomp';
import HistoryIcon from '@assets/svg/HistoryIcon';
import styles from './styles';
import MiniContainers from '@components/Youtubecomp/MiniContainers';
import {heightPixel} from '@utils/responsive';
import PlaylistIcon from '@assets/svg/PlaylistIcon';
import {Strings, Value} from '@constants';

const YoutubeLibrary = () => {
  const {Colors} = useTheme();
  const data = Array.from({length: 6}, (_, index) => index.toString());
  const renderMiniContainer = ({item}) => <MiniContainers key={item} />;
  return (
    <ScrollView style={[styles.mainCntainer, {backgroundColor: Colors.primary}]}>
      <Youtubecomp />
      <TouchableOpacity
        style={[
          styles.upperContainer,
          {marginTop: heightPixel(Value.CONSTANT_VALUE_40)},
        ]}>
        <HistoryIcon Colors={Colors} />
        <Text style={[styles.historyTxt, {color: Colors.text}]}>
          {Strings.HISTORY}
        </Text>
        <Text style={[styles.viewAll, {color: Colors.BLUE}]}>
          {Strings.VIEW_ALL}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        style={{flexGrow: Value.CONSTANT_VALUE_0}}
        renderItem={renderMiniContainer}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.line} />
      <TouchableOpacity
        style={[
          styles.upperContainer,
          {marginTop: heightPixel(Value.CONSTANT_VALUE_20)},
        ]}>
        <PlaylistIcon Colors={Colors} />
        <Text style={[styles.historyTxt, {color: Colors.text}]}>
          {Strings.PLAY_LIST}
        </Text>
        <Text style={[styles.viewAll, {color: Colors.BLUE}]}>
          {Strings.VIEW_ALL}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        style={{flexGrow: Value.CONSTANT_VALUE_0}}
        renderItem={renderMiniContainer}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.line} />
    </ScrollView>
  );
};

export default YoutubeLibrary;
