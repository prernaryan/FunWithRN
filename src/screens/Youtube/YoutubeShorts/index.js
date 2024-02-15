import {View} from 'react-native';
import React, {useRef, useState} from 'react';
import {useTheme} from '../../../theme/ThemeProvider';
import ShortsComp from '@components/Youtubecomp/ShortsComp';
import Carousel from 'react-native-reanimated-carousel';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@utils/responsive';
import {Images} from '@constants';

const YoutubeShorts = () => {
  const carouselRef = useRef(null);
  const {Colors} = useTheme();
  const [vdoIndex, setVdoIndex] = useState(0);
  const videoData = [
    {
      id: 1,
      title: Images.NETFLIX_INTRO,
    },
    {
      id: 2,
      title: Images.NETFLIX_INTRO,
    },
    {
      id: 3,
      title: Images.NETFLIX_INTRO,
    },
    {
      id: 4,
      title: Images.NETFLIX_INTRO,
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: Colors.primary}}>
      <Carousel
        data={videoData}
        scrollAnimationDuration={1000}
        onSnapToItem={index => setVdoIndex(index)}
        renderItem={({item, index}) => (
          <ShortsComp item={item} index={index} vdoIndex={vdoIndex} />
        )}
        vertical={true}
        width={SCREEN_WIDTH}
        height={SCREEN_HEIGHT - 40}
        ref={carouselRef}
      />
    </View>
  );
};

export default YoutubeShorts;
