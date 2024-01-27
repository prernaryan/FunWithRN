import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '../../../theme/ThemeProvider';
import {SubscriptionsData} from '@screens/EntryScreen/chooseData';
import HorizontalList from '@components/Youtubecomp/HorizontalList';
import Youtubecomp from '@components/Youtubecomp';

const YoutubeSubscription = () => {
  const {Colors} = useTheme();
  return (
    <View style={{flex: 1, backgroundColor: Colors.primary}}>
      <Youtubecomp />
      <HorizontalList Data={SubscriptionsData} />
    </View>
  );
};

export default YoutubeSubscription;
