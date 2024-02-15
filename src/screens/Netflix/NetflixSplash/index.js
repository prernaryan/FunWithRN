import {Images, Routes} from '@constants';
import React, {useRef} from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import { navigate } from '@service/NavigationServices';

const NetflixSplash = () => {
  const playerRef = useRef(null);
  return (
    <View style={styles.mainContainer}>
      <Video
        source={Images.NETFLIX_INTRO}
        ref={ref => {
          playerRef.current = ref;
        }}
        onEnd={() => navigate(Routes.NetflixOptions)}
        style={styles.backgroundVideo}
      />
    </View>
  );
};

export default NetflixSplash;
