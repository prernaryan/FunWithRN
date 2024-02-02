import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useTheme} from '../../../theme/ThemeProvider';
import {
  SubscriptionsData,
  profilesDataSubscription,
} from '@screens/EntryScreen/chooseData';
import HorizontalList from '@components/Youtubecomp/HorizontalList';
import Youtubecomp from '@components/Youtubecomp';
import styles from './styles';
import Avatar from '@assets/svg/Avatar';
import More from '@assets/svg/More';
import {heightPixel, widthPixel} from '@utils/responsive';
import {Strings, Value} from '@constants';
import YoutubeVideo from '@components/Youtubecomp/YoutubeVideo';

const YoutubeSubscription = () => {
  const {Colors} = useTheme();
  const profilesRender = ({item}) => {
    return (
      <TouchableOpacity style={styles.renderContainer}>
        <Image source={item.img} />
        <Text style={[styles.renderText, {color: Colors.text}]}>
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView
      style={[styles.mainCntainer, {backgroundColor: Colors.primary}]}
      showsVerticalScrollIndicator={false}>
      <Youtubecomp />
      <View style={styles.profileContainer}>
        <FlatList
          data={profilesDataSubscription}
          renderItem={profilesRender}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.allText}>{Strings.ALL}</Text>
      </View>
      <HorizontalList Data={SubscriptionsData} />
      <View
        style={[styles.Innercontainer, {backgroundColor: Colors.labelBack}]}
      />
      <View style={styles.row}>
        <Avatar
          width={widthPixel(Value.CONSTANT_VALUE_28)}
          height={heightPixel(Value.CONSTANT_VALUE_28)}
        />
        <Text style={[styles.vdoText, {color: Colors.text}]}>
          {Strings.VIDEO_TEXT}
        </Text>
        <More
          Colors={Colors}
          width={widthPixel(Value.CONSTANT_VALUE_16)}
          height={heightPixel(Value.CONSTANT_VALUE_16)}
        />
      </View>
      <YoutubeVideo text={Strings.VIDEO_TEXT} />
    </ScrollView>
  );
};

export default YoutubeSubscription;
