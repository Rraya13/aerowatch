import React from 'react';
import {Flight} from '../../utils/types';
import {useStoreState} from '../../context/hooks';
import {View} from 'react-native';
import Text from '../global/Text';
import dayjs from 'dayjs';
import {SvgCss} from 'react-native-svg/css';
import {FlightIcon} from '../../assets/svg';
import {modifySvg} from '../../utils/helper';

interface SubscribedFlightsProps {
  data: Flight;
}

const SubscribedFlights: React.FC<SubscribedFlightsProps> = ({data}) => {
  const apptheme = useStoreState(state => state.home.apptheme);
                   
  return (
    <View
      className={`flex-row items-center justify-between w-full py-4 px-[18px] rounded-[20px] mb-4 ${
        apptheme === 'light' ? 'bg-darkPrimary' : 'bg-black'
      }`}>
      <View className="flex-row items-center">
        <SvgCss xml={modifySvg(FlightIcon, 'white')} />
        <View className="ml-3">
          <Text>
            {data.departure.short} to <Text>{data.arrival.short}</Text>
          </Text>
        </View>
      </View>
      <View className="p-2 rounded-full bg-primary">
        <Text>Track flight</Text>
      </View>
    </View>
  );
};

export default SubscribedFlights;
