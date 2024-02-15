import {View, Text, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import styles from './styles';
import {useTheme} from '../../../theme/ThemeProvider';
import SearchIcon from '@assets/svg/SearchIcon';
import CameraIcon from '@assets/svg/CameraIcon';
import More from '@assets/svg/More';
import Like from '@assets/svg/Like';
import Dislike from '@assets/svg/Dislike';
import CommentBox from '@assets/svg/CommentBox';
import ShareIcon from '@assets/svg/ShareIcon';
import LoopIcon from '@assets/svg/LoopIcon';
import BoxAvatar from '@assets/svg/BoxAvatar';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  heightPixel,
  widthPixel,
} from '@utils/responsive';
import {Alignment, Strings, Value} from '@constants';
import Video from 'react-native-video';
import Avatar from '@assets/svg/Avatar';
import MusicIcon from '@assets/svg/MusicIcon';

const ShortsComp = ({item, index, vdoIndex}) => {
  const {Colors} = useTheme();
  const playerRef = useRef(null);
  console.log('index!==vdoIndex', index !== vdoIndex);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.DARK_BLACK,
      }}>
      <Video
        source={item.title}
        ref={ref => {
          playerRef.current = ref;
        }}
        paused={index !== vdoIndex}
        onEnd={() => console.log('endd')}
        style={{
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          position: Alignment.ABSOLUTE,
          zIndex: -Value.CONSTANT_VALUE_3,
          top: Value.CONSTANT_VALUE_0,
          bottom: Value.CONSTANT_VALUE_0,
          left: Value.CONSTANT_VALUE_0,
          right: Value.CONSTANT_VALUE_0,
        }}
      />
      <View style={{zIndex: 9999}}>
        <View style={styles.rowContainer}>
          <SearchIcon Colors={Colors} />
          <CameraIcon
            Colors={Colors}
            width={widthPixel(Value.CONSTANT_VALUE_24)}
            height={heightPixel(Value.CONSTANT_VALUE_24)}
            style={styles.cameraIcon}
          />
          <More
            Colors={Colors}
            width={widthPixel(Value.CONSTANT_VALUE_24)}
            height={heightPixel(Value.CONSTANT_VALUE_24)}
          />
        </View>
        <View style={styles.sideContainer}>
          <Like style={styles.like} />
          <Text style={styles.likeText}>{Strings.COUNTS}</Text>
          <Dislike style={styles.dislike} />
          <Text style={styles.likeText}>{Strings.DISLIKE}</Text>
          <CommentBox style={styles.comment} />
          <Text style={styles.likeText}>{Strings.COMMENT_NO}</Text>
          <ShareIcon style={styles.comment} />
          <Text style={styles.likeText}>{Strings.SHARE}</Text>
          <LoopIcon style={styles.comment} />
          <Text style={styles.likeText}>{Strings.REMIX}</Text>
          <View style={styles.buttonRowContainer}>
            <Avatar
              width={widthPixel(Value.CONSTANT_VALUE_24)}
              height={heightPixel(Value.CONSTANT_VALUE_24)}
            />
            <Text style={styles.nameTxt}>{Strings.VIDEO_NAME}</Text>
            <TouchableOpacity style={styles.btnContainer}>
              <Text style={{color: Colors.WHITE}}>{Strings.SUBSCRIBE}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detilTxtContainer}>
            <Text style={styles.detailText}>{Strings.VIDEO_DETAIL}</Text>
            <BoxAvatar
              Colors={Colors}
              width={widthPixel(Value.CONSTANT_VALUE_40)}
              height={heightPixel(Value.CONSTANT_VALUE_40)}
            />
          </View>
          <View style={styles.musicContainer}>
            <MusicIcon />
            <Text style={[styles.soundText, {color: Colors.WHITE}]}>
              {Strings.ORIGINAL_SOUND}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ShortsComp;
