import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, AddIncome } from '../screens';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddIncome" component={AddIncome} />
    </Stack.Navigator>
  );
};

export default Router;
