import {NavigatorScreenParams} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type TabNavigatorParamsList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
};

export type AppNavigatorParamsList = {
  TabNav: NavigatorScreenParams<TabNavigatorParamsList>;
  Theme: undefined;
};

export type RootNavigatorParamsList = {
  App: NavigatorScreenParams<AppNavigatorParamsList>;
};

export type AppNavigationType =
  NativeStackNavigationProp<AppNavigatorParamsList>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootNavigatorParamsList {}
  }
}
