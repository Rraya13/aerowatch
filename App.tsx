import React, {useEffect} from 'react';
import './global.css';
import {SafeAreaView, Text, useColorScheme, View} from 'react-native';
import {StoreProvider} from 'easy-peasy';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import context from './src/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useStoreActions} from './src/context/hooks';
import store from './src/context';

function App(): React.JSX.Element {
  const setAppthemeState = store.getActions().home.setAppthemeState;

  useEffect(() => {
    _setAppTheme();
  }, []);

  const _setAppTheme = async () => {
    const appThemex = await AsyncStorage.getItem('@app-theme');
    if (appThemex) {
      setAppthemeState(appThemex);
    }
  };

  return (
    <StoreProvider store={context}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </StoreProvider>
  );
}

export default App;
