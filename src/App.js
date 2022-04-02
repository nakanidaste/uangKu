import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { MenuProvider } from 'react-native-popup-menu';
import Router from './navigation/Router';

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <MenuProvider>
        <Router />
      </MenuProvider>
    </NavigationContainer>
  );
};

export default App;
