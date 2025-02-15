import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import SafeArea from '../../components/global/SafeArea';
import {SvgCss} from 'react-native-svg/css';
import {modifySvg} from '../../utils/helper';
import {useStoreActions, useStoreState} from '../../context/hooks';
import {Back, Moon, Sun} from '../../assets/svg';
import Header from '../../components/global/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Text from '../../components/global/Text';

interface ThemeScreenProps {}

let themes = [
  {
    id: 1,
    name: 'Light Theme',
    type: 'light',
  },
  {
    id: 2,
    name: 'Dark Theme',
    type: 'dark',
  },
];

const ThemeScreen: React.FC<ThemeScreenProps> = ({}) => {
  const apptheme = useStoreState(state => state.home.apptheme);
  const setApptheme = useStoreActions(action => action.home.setApptheme);

  const switchTheme = async (theme: any) => {
    await AsyncStorage.setItem('@app-theme', theme.type);
    setApptheme(theme.type);
  };

  return (
    <SafeArea safeAreaClass="flex-1 px-4">
      <Header label="Appearance" />
      <View className="flex-row items-center justify-between mt-[24px]">
        {themes.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => switchTheme(item)}
              activeOpacity={0.8}
              key={index + ''}
              className={`flex-1 border-[1px] border-primary ${
                item.type === 'dark' ? 'p-5' : 'p-4'
              } rounded-xl items-center  ${
                apptheme === 'light' && item.type === 'light'
                  ? 'bg-disabledBtn'
                  : apptheme === 'dark' && item.type === 'dark'
                  ? 'bg-darkPrimary'
                  : ''
              } ${index === 0 ? 'mr-5' : ''}`}>
              <View className="items-center">
                <SvgCss xml={item.type === 'dark' ? Moon : Sun} />
                <Text className="text-footNote font-bold mt-2">
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeArea>
  );
};

export default ThemeScreen;
