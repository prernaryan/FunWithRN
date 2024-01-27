import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '@constants';
import NetflixSplash from '@screens/Netflix/NetflixSplash';

const Stack = createNativeStackNavigator();

const NetflixNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.NetflixSplash}>
      <Stack.Screen name={Routes.NetflixSplash} component={NetflixSplash} />
    </Stack.Navigator>
  );
};
export default NetflixNav;
