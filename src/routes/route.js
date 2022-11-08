import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import AddCurriculo from '../screens/AddCurriculo';
const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddCurriculo" component={AddCurriculo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;