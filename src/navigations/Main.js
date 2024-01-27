import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '@constants';
import EntryScreen from '@screens/EntryScreen';
import NetflixNav from './NetflixNav/NetflixNav';
import YouTubeNav from './YouTubeNav/YouTubeNav';
import {setTopLevelNavigator} from '@service/NavigationServices';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer
      ref={navigationRef => setTopLevelNavigator(navigationRef)}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={Routes.EntryScreen}>
        <Stack.Screen name={Routes.EntryScreen} component={EntryScreen} />
        <Stack.Screen name={Routes.NetflixNav} component={NetflixNav} />
        <Stack.Screen name={Routes.YouTubeNav} component={YouTubeNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Main;
