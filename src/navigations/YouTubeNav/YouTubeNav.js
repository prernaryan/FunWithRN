import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '@constants';
import YoutubeSplash from '@screens/Youtube/YoutubeSplash';
import YoutubeTabs from './YoutubeTabs/YoutubeTabs';

const Stack = createNativeStackNavigator();

const YouTubeNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.YoutubeSplash}>
      <Stack.Screen name={Routes.YoutubeSplash} component={YoutubeSplash} />
      <Stack.Screen name={Routes.YoutubeTabs} component={YoutubeTabs} />
    </Stack.Navigator>
  );
};
export default YouTubeNav;
