import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {Images, Routes} from '@constants';
import {navigate} from '@service/NavigationServices';
import {useTheme} from '../../../theme/ThemeProvider';

const YoutubeSplash = () => {
  const {Colors} = useTheme();
  useEffect(() => {
    setTimeout(() => {
      navigate(Routes.YoutubeTabs);
    }, 1000);
  }, []);
  return (
    <View style={styles.mainContainer(Colors)}>
      <Image source={Images.YOU_TUBE} />
    </View>
  );
};

export default YoutubeSplash;
