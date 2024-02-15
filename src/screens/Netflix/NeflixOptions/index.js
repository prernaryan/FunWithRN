import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import AsadBox from '@assets/svg/AsadBox';

const NetflixOptions = () => {
  const data = Array.from({length: 5}, (_, index) => index.toString());
  const renderItem = ({item}) => <AsadBox key={item} />;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Who's Watching?</Text>
        <TouchableOpacity>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList data={data} renderItem={renderItem} numColumns={2} />
      </View>
    </View>
  );
};

export default NetflixOptions;
