import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '../../theme/ThemeProvider';
import {chooseItem} from './chooseData';
import styles from './styles';
import {Alignment, Images} from '@constants';
import {navigate} from '@service/NavigationServices';

const EntryScreen = () => {
  const {Colors} = useTheme();
  const chooseRenderItem = ({item}) => {
    const isEven = item.id % 2 === 0;
    const paddingStyle = isEven ? {paddingLeft: 40} : {paddingRight: 40};
    const handlePress = () => {
      navigate(item.route);
    };
    return (
      <TouchableOpacity
        style={[styles.renderMain, paddingStyle]}
        onPress={handlePress}>
        <Image
          source={item.image}
          style={styles.renderImg}
          resizeMode={Alignment.CENTER}
        />
        <Text style={styles.renderTxt(Colors.text)}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  // eslint-disable-next-line react/no-unstable-nested-components
  const HeaderWithImages = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image
            source={Images.PROFILE_PIC}
            style={[styles.image, {tintColor: Colors.text}]}
          />
        </TouchableOpacity>
        <Text style={[styles.headerText, {color: Colors.text}]}>
          Fun Food & Life!
        </Text>

        <TouchableOpacity onPress={() => console.log('Right Image Pressed')}>
          <Image
            source={Images.LOG_OUT}
            style={[styles.image, {tintColor: Colors.text}]}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={[styles.mainContainer, {backgroundColor: Colors.primary}]}>
      <HeaderWithImages />
      <LinearGradient
        colors={Colors.linerColor}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[styles.gradientBox, {backgroundColor: Colors.primary}]}>
        <FlatList
          data={chooseItem}
          style={styles.list}
          numColumns={2}
          renderItem={chooseRenderItem}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </LinearGradient>
    </View>
  );
};

export default EntryScreen;
