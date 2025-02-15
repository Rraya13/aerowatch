/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigatorParamsList} from './navigation_types';
import HomeScreen from '../screens/tabs/HomeScreen';
import SearchScreen from '../screens/tabs/SearchScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';
import {SvgCss} from 'react-native-svg/css';
import {
  Home,
  HomeSelect,
  Person,
  PersonSelect,
  Search,
  SearchSelect,
} from '../assets/svg';
import {useStoreState} from '../context/hooks';
import {modifySvg} from '../utils/helper';

const TabStack = createBottomTabNavigator<TabNavigatorParamsList>();

const TabNavigator = ({}) => {
  const apptheme = useStoreState(state => state.home.apptheme);

  return (
    <TabStack.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          //   position: 'absolute',
          //   bottom: 20,
          //   marginHorizontal: 20,
          //   borderRadius: 44,
          //   paddingTop: 10,
          backgroundColor: apptheme === 'light' ? '#FFFFFF' : '#1D2026',
          //   height: 60,
          //   borderTopWidth: 0,
          //   elevation: 5,
        },
        tabBarIcon: ({focused, color, size}) => {
          let xmlSrc: any = 'Home';
          switch (route.name) {
            case 'Home':
              xmlSrc = HomeSelect;
              break;
            case 'Search':
              xmlSrc = SearchSelect;
              break;
            case 'Profile':
              xmlSrc = PersonSelect;
              break;
            default:
              break;
          }
          return (
            <>
              <SvgCss xml={focused ? xmlSrc : modifySvg(xmlSrc, '#c2c4c9')} />
            </>
          );
        },
      })}>
      <TabStack.Screen name={'Home'} component={HomeScreen} />
      <TabStack.Screen name={'Search'} component={SearchScreen} />
      <TabStack.Screen name={'Profile'} component={ProfileScreen} />
    </TabStack.Navigator>
  );
};

export default TabNavigator;
