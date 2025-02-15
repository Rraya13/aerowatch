import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AppNavigatorParamsList} from './navigation_types';
import ThemeScreen from '../screens/stacks/ThemeScreen';
import TabNavigator from './TabNavigator';

interface AppNavigatorProps {}

const AppStack = createNativeStackNavigator<AppNavigatorParamsList>();

const AppNavigator: React.FC<AppNavigatorProps> = ({}) => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animation: 'slide_from_right',
        animationTypeForReplace: 'push',
      }}>
      <AppStack.Screen name="TabNav" component={TabNavigator} />
      <AppStack.Screen name="Theme" component={ThemeScreen} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
