import {View, Text} from 'react-native';
import React from 'react';
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
import {heightPixel, widthPixel} from '@utils/responsive';
import {Value} from '@constants';

const ShortsComp = () => {
  const {Colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.primary,
        width: 375,
        height: 812,
      }}>
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
      <Like style={styles.like} />
      <Text style={[styles.likeText, {color: Colors.text}]}>24K</Text>
      <Dislike style={styles.dislike} />
      <Text style={[styles.likeText, {color: Colors.text}]}>Dislike</Text>
      <CommentBox style={styles.comment} />
      <Text style={[styles.likeText, {color: Colors.text}]}>106</Text>
      <ShareIcon style={styles.comment} />
      <Text style={[styles.likeText, {color: Colors.text}]}>Share</Text>
      <LoopIcon style={styles.comment} />
      <Text style={[styles.likeText, {color: Colors.text}]}>Remix</Text>
      <BoxAvatar Colors={Colors} style={styles.comment} />
    </View>
  );
};

export default ShortsComp;
