import {View, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '../../../theme/ThemeProvider';
import styles from './styles';
import Explore from '@assets/svg/Explore';
import {Value} from '@constants';
import {heightPixel, widthPixel} from '@utils/responsive';

const HorizontalList = ({Data}) => {
  const {Colors} = useTheme();
  const [Selected, setSelected] = useState(1);
  const renderItems = ({item}) => {
    const isSelected = Selected === item.id;
    return (
      <TouchableOpacity
        onPress={() => {
          setSelected(item.id);
        }}
        style={[
          styles.renderContainer,
          {
            backgroundColor: isSelected
              ? Colors.labelSelected
              : Colors.labelBack,
          },
        ]}>
        {item.img ? (
          <Explore
            style={{
              paddingVertical: heightPixel(Value.CONSTANT_VALUE_8),
              paddingHorizontal: widthPixel(Value.CONSTANT_VALUE_8),
            }}
            Colors={Colors}
            isSelected={isSelected}
          />
        ) : (
          <Text
            style={[
              styles.renderText,
              {
                color: isSelected ? Colors.primary : Colors.text,
              },
            ]}>
            {item.title}
          </Text>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        style={styles.mainContainer}
        data={Data}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalList;
