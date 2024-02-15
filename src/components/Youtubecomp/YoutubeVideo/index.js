import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useRef} from 'react';
import styles from './styles';
import {useTheme} from '../../../theme/ThemeProvider';
import Avatar from '@assets/svg/Avatar';
import {heightPixel, widthPixel} from '@utils/responsive';
import {Strings, Value} from '@constants';
import More from '@assets/svg/More';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';

const YoutubeVideo = ({item,onPress}) => {
  const {Colors} = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={{uri: item.thumbnail}}
        style={[styles.mainContainer, {backgroundColor: Colors.labelBack}]}
      />
      <View style={[styles.timerBox, {backgroundColor: Colors.BLACK_400}]}>
        <Text style={[styles.miniText, {color: Colors.WHITE}]}>12:40</Text>
      </View>
      <View style={styles.row}>
        <View style={{flexDirection: 'row'}}>
          <Avatar
            width={widthPixel(Value.CONSTANT_VALUE_28)}
            height={heightPixel(Value.CONSTANT_VALUE_28)}
          />
          <View style={{marginLeft: widthPixel(Value.CONSTANT_VALUE_30)}}>
            <Text style={[styles.vdoText, {color: Colors.text}]}>
              {item.title}
            </Text>
            <Text style={[{color: Colors.text}]}>{item.views}</Text>
          </View>
        </View>
        <More
          Colors={Colors}
          width={widthPixel(Value.CONSTANT_VALUE_16)}
          height={heightPixel(Value.CONSTANT_VALUE_16)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default YoutubeVideo;
