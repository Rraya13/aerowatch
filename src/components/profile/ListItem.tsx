import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SvgCss} from 'react-native-svg/css';
import Text from '../global/Text';
import {ChevronRight} from '../../assets/svg';
import {useStoreState} from '../../context/hooks';

interface ListItemProps {
  xml: string | null;
  label: string;
  onPress: () => void;
}

const ListItem: React.FC<ListItemProps> = ({xml, label, onPress}) => {
  const apptheme = useStoreState(state => state.home.apptheme);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`flex-row items-center justify-between border-b-[1px] py-4 ${
        apptheme === 'light' ? 'border-b-gray1' : 'border-b-darkGray1'
      }`}
      onPress={onPress}>
      <View className="flex-row items-center">
        <SvgCss xml={xml} />
        <Text className="text-callout font-semiBold ml-2">{label}</Text>
      </View>
      <SvgCss xml={ChevronRight} />
    </TouchableOpacity>
  );
};

export default ListItem;
