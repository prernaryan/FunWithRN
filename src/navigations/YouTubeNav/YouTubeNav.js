import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '@constants';
import YoutubeSplash from '@screens/Youtube/YoutubeSplash';
import YoutubeTabs from './YoutubeTabs/YoutubeTabs';
import YoutubeDetailVideo from '@screens/Youtube/YoutubeDetailVideo';

const Stack = createNativeStackNavigator();

const YouTubeNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.YoutubeSplash}>
      <Stack.Screen name={Routes.YoutubeSplash} component={YoutubeSplash} />
      <Stack.Screen name={Routes.YoutubeTabs} component={YoutubeTabs} />
      <Stack.Screen name={Routes.YoutubeDetailVideo} component={YoutubeDetailVideo} />
    </Stack.Navigator>
  );
};
export default YouTubeNav;
