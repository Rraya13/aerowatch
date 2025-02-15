import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SvgCss} from 'react-native-svg/css';
import {Back} from '../../assets/svg';
import Text from './Text';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  label: string;
}

const Header: React.FC<HeaderProps> = ({label}) => {
  const navigation = useNavigation();

  return (
    <View className="relative flex-row items-center justify-center h-12">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute left-0 p-2">
        <SvgCss xml={Back} />
      </TouchableOpacity>
      <Text className="text-subheadline font-semiBold">{label}</Text>
    </View>
  );
};

export default Header;
