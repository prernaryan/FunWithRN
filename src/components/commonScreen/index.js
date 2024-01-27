import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import {useTheme} from '../../theme/ThemeProvider';
import {commonscreenStyles} from './styles';

const CommonScreen = ({scroll = false}) => {
  const {Colors} = useTheme();
  const ScrollComponent = scroll ? ScrollView : View;
  return (
    <SafeAreaView
      style={[commonscreenStyles.safeArea, {backgroundColor: Colors.primary}]}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.primary} />
    </SafeAreaView>
  );
};

export default CommonScreen;
