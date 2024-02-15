import {FlatList, ScrollView, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../../theme/ThemeProvider';
import Youtubecomp from '@components/Youtubecomp';
import YoutubeVideo, {VideoComp} from '@components/Youtubecomp/YoutubeVideo';
import {Routes, Strings, YoutubeData} from '@constants';
import ShortItem from '@components/Youtubecomp/ShortItem';
import { navigate } from '@service/NavigationServices';
import HorizontalList from '@components/Youtubecomp/HorizontalList';
import { mainListData } from '@screens/EntryScreen/chooseData';

const YoutubeHome = () => {
  const {Colors} = useTheme();
  console.log('==============YoutubeData================');
  console.log(YoutubeData);
  console.log('====================================');
  return (
    <View style={{flex: 1, backgroundColor: Colors.primary}}>
      <Youtubecomp />
      <HorizontalList Data={mainListData} /> 
      <FlatList
        style={{marginBottom: 100}}
        data={YoutubeData}
        keyExtractor={(item, index) => `${item.id}_${index}`}
        renderItem={({item}) =>
          item.hasOwnProperty('shortsHeader') ? (
            <ShortItem
              shortHeader={item.shortsHeader}
              shortList={item.shortsList}
            />
          ) : (
            <YoutubeVideo item={item} onPress={() => navigate(Routes.YoutubeDetailVideo, {item:item})} />
          )
        }
      />
       {/* <HorizontalList Data={mainListData} />  */}
      {/* <YoutubeVideo text={Strings.VIDEO_TEXT} />
      <YoutubeVideo text={Strings.VIDEO_TEXT} />  */}
    </View>
  );
};

export default YoutubeHome;
