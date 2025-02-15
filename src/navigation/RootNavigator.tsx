import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AppNavigator from './AppNavigator';
import {RootNavigatorParamsList} from './navigation_types';

interface RootNavigatorProps {}
const RootStack = createNativeStackNavigator<RootNavigatorParamsList>();

const RootNavigator: React.FC<RootNavigatorProps> = ({}) => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name={'App'} component={AppNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
