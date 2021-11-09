import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StarterStack } from './StarterStack.routes';

const { Navigator, Screen } = createNativeStackNavigator();

function MainStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="StarterStack" component={StarterStack} />
      </Navigator>
    </NavigationContainer>
  );
}

export { MainStack };
