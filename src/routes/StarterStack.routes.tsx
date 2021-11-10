import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StarterIntro } from '../screens/StarterIntro';
import { StarterName } from '../screens/StarterName';

const { Navigator, Screen } = createNativeStackNavigator();

function StarterStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="StarterIntro" component={StarterIntro} />
      <Screen name="StarterName" component={StarterName} />
    </Navigator>
  );
}

export { StarterStack };
