import {useColorScheme} from 'react-native';
import React, {createContext, useEffect, useState, useContext} from 'react';
import {darkColors, lightColors} from '@constants';

export const ThemeContext = createContext({
  dark: false,
  Colors: lightColors,
  setScheme: () => {},
});

const ThemeProvider = props => {
  const colorScheme = useColorScheme(); // colorScheme => 'dark','light','null'
  const [isdark, setIsdark] = useState(colorScheme === 'dark');
  useEffect(() => {
    setIsdark(colorScheme === 'dark');
  }, [colorScheme]);

  const defaultTheme = {
    dark: isdark,
    Colors: isdark ? darkColors : lightColors,
    setScheme: scheme => {
      setIsdark(scheme === 'dark');
    },
  };
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

// creating a custom hook for accessing the value.

export const useTheme = () => useContext(ThemeContext);
