import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import {useTheme} from '../../../theme/ThemeProvider';

const Login = () => {
  const {dark, Colors, setScheme} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: Colors.text}}>Login</Text>
    </View>
  );
};

export default Login;
