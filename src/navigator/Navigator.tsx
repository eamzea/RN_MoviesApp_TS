import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, DetailsScreen } from 'screens';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
  Home: undefined;
  Details: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
