import NavigationIcon from '@components/navIcon/NavigationIcon';
import {useTheme} from '../../../theme/ThemeProvider';
import React from 'react';
import {View, Pressable, StyleSheet, Text} from 'react-native';
import {isIOS, widthPixel} from '@utils/responsive';
import {getTabName} from '@utils/commonFunctions';

const TabBar = ({state, descriptors, navigation}) => {
  const {Colors, dark} = useTheme();
  const styles = StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 5,
      backgroundColor: Colors.primary,
    },
    mainItemContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: isIOS()? 10:0,
      borderColor: '#333B42',
      borderTopWidth: 1,
    },
  });

  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index} style={[styles.mainItemContainer]}>
            <Pressable onPress={onPress}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  marginVertical: 2,
                  width: widthPixel(110),
                }}>
                <NavigationIcon
                  label={label}
                  isFocused={isFocused}
                  dark={dark}
                  Colors={Colors}
                />
                <Text style={{color: Colors.text}}>{getTabName(label)}</Text>
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default TabBar;
