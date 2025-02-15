import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import SafeArea from '../../components/global/SafeArea';
import Text from '../../components/global/Text';
import {useStoreState} from '../../context/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SubscribedFlights from '../../components/home/SubscribedFlights';
import {useIsFocused} from '@react-navigation/native';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  const apptheme = useStoreState(state => state.home.apptheme);
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    getSubscribedFlights();
  }, [isFocused]);

  const getSubscribedFlights = async () => {
    try {
      const storedFlights = await AsyncStorage.getItem('subscribedFlights');
      setSubscriptions(storedFlights ? JSON.parse(storedFlights) : []);
    } catch (error) {
      console.error('Error retrieving subscribed flights:', error);
    }
  };

  return (
    <SafeArea bgColor={false} safeAreaClass="flex-1 bg-primary">
      <View className="mb-[24px] px-4">
        <Text className="text-title font-bold">
          Welcome to <Text className="italic font-normal">Aero Watch</Text>
        </Text>
        <Text className="text-title3">Discover a new world</Text>
      </View>
      <View
        className={`${
          apptheme === 'dark' ? 'bg-darkBg' : 'bg-lightBg'
        } flex-1 rounded-t-2xl`}>
        <FlatList
          data={subscriptions}
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <View className="px-6">
                <SubscribedFlights data={item} />
              </View>
            );
          }}
          ListHeaderComponent={() => {
            return (
              <View className="p-[32px]">
                <Text className="text-headline font-bold">Flight Tracking</Text>
                <Text className="text-footnote font-semiBold text-gray2 mt-2">
                  Track flights you've subscribed to
                </Text>
              </View>
            );
          }}
          ListEmptyComponent={() => {
            return (
              <View className="p-[32px]">
                <Text className="text-footnote font-semiBold text-gray2 opacity-40">
                  There are no subscribed flights
                </Text>
              </View>
            );
          }}
        />
        {/* <View className="px-6 py-7 w-[80%] absolute bottom-0 self-center">
          <Text className="text-title text-center opacity-20">
            Trusted by over 3 million passengers worldwide
          </Text>
        </View> */}
      </View>
    </SafeArea>
  );
};

export default HomeScreen;
