import {View, FlatList} from 'react-native';
import React from 'react';
import {useTheme} from '../../../theme/ThemeProvider';
import ShortsComp from '@components/Youtubecomp/ShortsComp';

const YoutubeShorts = () => {
  const {Colors} = useTheme();
  return (
    <View style={{flex: 1,backgroundColor: Colors.primary,}}>
    <FlatList
      style={{
        width: 375,
        height: 812,
      }}
      data={Array.from({length: 6})}
      renderItem={() => {
        <ShortsComp />;
      }}
      keyExtractor={(item, index) => index.toString()}
    />
    </View>
  );
};

export default YoutubeShorts;
