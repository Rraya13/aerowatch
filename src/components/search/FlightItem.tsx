import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Text from '../global/Text';
import {SvgCss} from 'react-native-svg/css';
import {useStoreState} from '../../context/hooks';
import {flightTripDark, flightTripLight} from '../../assets/svg';
import DashedLine from '../global/DashedLine';
import Button from '../global/Button';
import {Flight} from '../../utils/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';

interface FlightItemProps {
  data: Flight;
}

const FlightItem: React.FC<FlightItemProps> = ({data}) => {
  const apptheme = useStoreState(state => state.home.apptheme);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    checkSubscription();
  }, []);

  const checkSubscription = async () => {
    //check if flight is already subscrbed
    try {
      const storedFlights = await AsyncStorage.getItem('subscribedFlights');
      const subscriptions: Flight[] = storedFlights
        ? JSON.parse(storedFlights)
        : [];

      setIsSubscribed(subscriptions.some(item => item.id === data.id));
    } catch (error) {
      console.error('Error checking subscription:', error);
    }
  };

  const subscribeToFlight = async () => {
    try {
      // Retrieve existing subscriptions from AsyncStorage
      const storedFlights = await AsyncStorage.getItem('subscribedFlights');
      let subscriptions: Flight[] = storedFlights
        ? JSON.parse(storedFlights)
        : [];

      // Add the new flight to the array
      subscriptions.push(data);

      // Save updated subscriptions back to AsyncStorage
      await AsyncStorage.setItem(
        'subscribedFlights',
        JSON.stringify(subscriptions),
      );

      checkSubscription()

      console.log('Flight subscribed successfully:', data);
    } catch (error) {
      console.error('Error subscribing to flight:', error);
    }
  };

  return (
    <View
      className={`py-4 px-[18px] rounded-[20px] mb-4 ${
        apptheme === 'light'
          ? 'bg-white border-[1px] border-darkPrimary'
          : 'bg-black'
      }`}>
      <View className="flex-row items-center justify-between ">
        <View>
          <Text className="text-title3 font-bold">{data.departure.short}</Text>
          <Text className="text-caption1">{data.departure.gate}</Text>
        </View>
        <View className="items-center">
          <SvgCss
            xml={apptheme === 'light' ? flightTripLight : flightTripDark}
          />
          <Text>{data.duration}</Text>
        </View>
        <View className="items-end">
          <Text className="text-title3 font-bold">{data.arrival.short}</Text>
          <Text className="text-caption1">{data.arrival.gate}</Text>
        </View>
      </View>
      <View className="flex-row items-center justify-between py-6">
        <View>
          <Text className="text-title3 font-bold">
            {dayjs(data.departure.time).format('HH:mm')}
          </Text>
          <Text className="text-caption1">
            {dayjs(data.departure.time).format('MMMM D, YYYY')}
          </Text>
        </View>
        <View className="items-end">
          <Text className="text-title3 font-bold">
            {dayjs(data.arrival.time).format('HH:mm')}
          </Text>
          <Text className="text-caption1">
            {dayjs(data.arrival.time).format('MMMM D, YYYY')}
          </Text>
        </View>
      </View>
      <DashedLine
        dashLength={10}
        dashColor={apptheme === 'light' ? 'black' : 'white'}
      />
      <View className="flex-row items-center justify-between py-3">
        <Text>{data.airline}</Text>
        <Text>${data.fare}</Text>
      </View>
      <View className="mt-4 mb-3">
        <Button
          text={isSubscribed ? 'Subscribed' : 'Subscribe'}
          varient="default"
          disabled={isSubscribed}
          onPress={subscribeToFlight}
        />
      </View>
      <Text className="text-footNote text-center opacity-75 ">
        Subscribe to real-time flight tracking
      </Text>
    </View>
  );
};

export default FlightItem;
