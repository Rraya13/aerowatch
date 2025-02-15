import AsyncStorage from '@react-native-async-storage/async-storage';
import {action, Action, Thunk, thunk} from 'easy-peasy';

export type HomeModel = {
  apptheme: string;
  setApptheme: Thunk<HomeModel, string>;
  setAppthemeState: Action<HomeModel, string>;
};

const home: HomeModel = {
  apptheme: 'dark',

  // Action to update store state (called inside the thunk)
  setAppthemeState: action((state, payload) => {
    state.apptheme = payload;
  }),

  // Thunk to store value in AsyncStorage before updating state
  setApptheme: thunk(async (actions, payload) => {
    try {
      await AsyncStorage.setItem('@app-theme', payload);
      actions.setAppthemeState(payload);
    } catch (error) {
      console.error('Error setting theme in AsyncStorage:', error);
    }
  }),
};

export default home;
