import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '../../../theme/ThemeProvider';

const YoutubeMore = () => {
  const {Colors} = useTheme();
  return (
    <View style={{flex: 1, backgroundColor: Colors.primary}}>
      <Text>YoutubeMore</Text>
    </View>
  );
};

export default YoutubeMore;
