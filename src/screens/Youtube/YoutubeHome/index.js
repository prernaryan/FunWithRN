import {ScrollView} from 'react-native';
import React from 'react';
import {useTheme} from '../../../theme/ThemeProvider';
import Youtubecomp from '@components/Youtubecomp';
import HorizontalList from '@components/Youtubecomp/HorizontalList';
import {mainListData} from '@screens/EntryScreen/chooseData';
import YoutubeVideo from '@components/Youtubecomp/YoutubeVideo';
import {Strings} from '@constants';

const YoutubeHome = () => {
  const {Colors} = useTheme();
  return (
    <ScrollView style={{flex: 1, backgroundColor: Colors.primary}}>
      <Youtubecomp />
      <HorizontalList Data={mainListData} />
      <YoutubeVideo text={Strings.VIDEO_TEXT} />
      <YoutubeVideo text={Strings.VIDEO_TEXT} />
    </ScrollView>
  );
};

export default YoutubeHome;
