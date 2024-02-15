import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '@constants';
import YoutubeHome from '@screens/Youtube/YoutubeHome';
import YoutubeDetailVideo from '@screens/Youtube/YoutubeDetailVideo';

const Stack = createNativeStackNavigator();

const YoutubeHomeStacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.YoutubeHome}>
      <Stack.Screen name={Routes.YoutubeHome} component={YoutubeHome} />
    </Stack.Navigator>
  );
};
export default YoutubeHomeStacks;
