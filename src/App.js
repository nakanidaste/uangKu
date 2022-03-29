import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
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
      <Router />
    </NavigationContainer>
  );
};

export default App;
