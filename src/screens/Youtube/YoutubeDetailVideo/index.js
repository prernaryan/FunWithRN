import {View, Text, FlatList} from 'react-native';
import React, {useRef} from 'react';
import {useTheme} from '../../../theme/ThemeProvider';
import VideoPlayer from 'react-native-video-controls';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  heightPixel,
  widthPixel,
} from '@utils/responsive';
import {goBack} from '@service/NavigationServices';
import Orientation from 'react-native-orientation-locker';
import styles from './styles';
import {Strings, Value} from '@constants';
import Avatar from '@assets/svg/Avatar';
import BellIcon from '@assets/svg/BellIcon';
import DownArrow from '@assets/svg/DownArrow';
import SmallLike from '@assets/svg/SmallLike';
import SmallDislike from '@assets/svg/SmallDislike';
import SmallShare from '@assets/svg/SmallShare';
import {containersData} from '@screens/EntryScreen/chooseData';

const YoutubeDetailVideo = ({route}) => {
  const {Colors} = useTheme();
  const playerRef = useRef(null);
  const {item} = route?.params;
  const onEnterFullscreen = () => {
    console.log('okayughkgb');
    // Lock orientation to landscape when entering fullscreen
    Orientation.lockToLandscape();
  };
  const onExitFullscreen = () => {
    // Reset orientation when exiting fullscreen
    Orientation.lockToPortrait();
  };

  const renderContainers = ({item}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            marginLeft: 20,
            width: 130,
            height: 50,
            paddingVertical: 12,
            backgroundColor: '#272727',
            borderRadius: 16,
            marginTop: 20,
          }}>
          <SmallLike Colors={Colors} style={{paddingHorizontal: 10}} />
          <Text style={{color: Colors.text, marginLeft: 5}}>{item.text}</Text>
          <Text style={{color: Colors.text, marginLeft: 14}}>|</Text>
          <SmallDislike Colors={Colors} />
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            width: 130,
            paddingVertical: 12,
            backgroundColor: '#272727',
            borderRadius: 16,
            marginTop: 20,
          }}>
          <SmallShare Colors={Colors} style={{paddingHorizontal: 10}} />
          <Text style={{color: Colors.text, marginLeft: 5}}>Share</Text>
        </View> */}
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.primary}}>
      <View style={{width: '100%', height: '40%'}}>
        <VideoPlayer
          source={{uri: item.videoUrl}}
          ref={ref => {
            playerRef.current = ref;
          }}
          onEnterFullscreen={() => onEnterFullscreen()}
          onExitFullscreen={onExitFullscreen}
          onBack={() => goBack()}
          showOnStart={true}
          seekColor={'red'}
          disableVolume={true}
          tapAnywhereToPause={true}
          style={{
            alignSelf: 'stretch',
          }}
        />
      </View>
      <Text style={[styles.textMain, {color: Colors.text}]}>
        {Strings.VIDEO_HEADNG}
      </Text>
      <Text style={[styles.subheading, {color: Colors.text}]}>
        {Strings.VDO_SUBHEADING}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 26,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar
            width={widthPixel(Value.CONSTANT_VALUE_32)}
            height={heightPixel(Value.CONSTANT_VALUE_32)}
          />
          <Text style={[styles.imgText, {color: Colors.text}]}>
            Figma 62.4K
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
            paddingHorizontal: 18,
            backgroundColor: '#272727',
            borderRadius: 16,
          }}>
          <BellIcon Colors={Colors} />
          <DownArrow Colors={Colors} />
        </View>
      </View>
      <FlatList
        style={{flexGrow: 0}}
        data={containersData}
        renderItem={renderContainers}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default YoutubeDetailVideo;
