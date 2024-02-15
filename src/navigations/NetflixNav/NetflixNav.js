import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '@constants';
import NetflixSplash from '@screens/Netflix/NetflixSplash';
import NetflixOptions from '@screens/Netflix/NeflixOptions';

const Stack = createNativeStackNavigator();

const NetflixNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.NetflixSplash}>
      <Stack.Screen name={Routes.NetflixSplash} component={NetflixSplash} />
      <Stack.Screen name={Routes.NetflixOptions} component={NetflixOptions} />
    </Stack.Navigator>
  );
};
export default NetflixNav;
