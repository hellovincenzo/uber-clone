import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {HomeScreen, DetailsScreen} from './src/screens';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default App;
