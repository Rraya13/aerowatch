import React from 'react';
import {Image, View} from 'react-native';
import SafeArea from '../../components/global/SafeArea';
import Text from '../../components/global/Text';
import ListItem from '../../components/profile/ListItem';
import {Navigation, Settings} from '../../assets/svg';
import {AppNavigationType} from '../../navigation/navigation_types';

interface ProfileScreenProps {
  navigation: AppNavigationType;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  return (
    <SafeArea safeAreaClass="flex-1 px-4">
      <View className="items-center pb-4">
        <Image source={require('../../assets/images/avatar.png')} />
        <View className="mt-4 items-center">
          <Text className="text-title1">Passenger</Text>
          <Text className="text-callout">passenger@gmail.com</Text>
        </View>
      </View>
      <View className="mt-[24px]">
        <ListItem xml={Navigation} label="My Flights" onPress={() => {}} />
        <ListItem
          xml={Settings}
          label="Appearence"
          onPress={() => {
            navigation.navigate('Theme');
          }}
        />
      </View>
    </SafeArea>
  );
};

export default ProfileScreen;
