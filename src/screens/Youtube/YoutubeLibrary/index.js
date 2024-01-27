import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '../../../theme/ThemeProvider';

const YoutubeLibrary = () => {
  const {Colors} = useTheme();
  return (
    <View style={{backgroundColor: Colors.primary, flex: 1}}>
      <Text>YoutubeLibrary</Text>
    </View>
  );
};

export default YoutubeLibrary;
