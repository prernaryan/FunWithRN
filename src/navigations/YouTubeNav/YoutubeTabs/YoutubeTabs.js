import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from '@constants';
import YoutubeHome from '@screens/Youtube/YoutubeHome';
import YoutubeShorts from '@screens/Youtube/YoutubeShorts';
import YoutubeMore from '@screens/Youtube/YoutubeMore';
import YoutubeSubscription from '@screens/Youtube/YoutubeSubscription';
import YoutubeLibrary from '@screens/Youtube/YoutubeLibrary';
import TabBar from './CustomTabar';
import YoutubeHomeStacks from './YoutubeHomeStacks';

const Tab = createBottomTabNavigator();
const YoutubeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.YoutubeHomeStacks}
      tabBar={props => <TabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name={Routes.YoutubeHomeStacks} component={YoutubeHomeStacks} />
      <Tab.Screen name={Routes.YoutubeShorts} component={YoutubeShorts} />
      <Tab.Screen name={Routes.YoutubeMore} component={YoutubeMore} />
      <Tab.Screen
        name={Routes.YoutubeSubscription}
        component={YoutubeSubscription}
      />
      <Tab.Screen name={Routes.YoutubeLibrary} component={YoutubeLibrary} />
    </Tab.Navigator>
  );
};

export default YoutubeTabs;
