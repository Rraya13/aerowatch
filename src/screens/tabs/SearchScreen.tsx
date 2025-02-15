import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import SafeArea from '../../components/global/SafeArea';
import {SvgCss} from 'react-native-svg/css';
import {GlobalMap, GlobalMapLight} from '../../assets/svg';
import FlightItem from '../../components/search/FlightItem';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useStoreState} from '../../context/hooks';
import Input from '../../components/global/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import flights from '../../assets/flights.json';
import Text from '../../components/global/Text';

interface SearchScreenProps {}

const SearchScreen: React.FC<SearchScreenProps> = ({}) => {
  const insets = useSafeAreaInsets();
  const apptheme = useStoreState(state => state.home.apptheme);
  const [value, setValue] = useState('');
  const [flightData, setFlightData] = useState<any[]>(flights);
  const [filteredFlights, setFilteredFlights] = useState<any[]>(flights);
  const [loading, setLoading] = useState(false);

  const searchFlights = async () => {
    setLoading(true);

    if (value.trim() === '') {
      setFilteredFlights(flightData); // Reset if search is empty
      setLoading(false);
    } else {
      const filtered = flightData.filter(
        flight =>
          flight.flightNumber.toLowerCase().includes(value.toLowerCase()) ||
          flight.airline.toLowerCase().includes(value.toLowerCase()),
      );
      setTimeout(() => {
        setLoading(false);
        setFilteredFlights(filtered);
      }, 2000);
    }
  };

  return (
    <View className="flex-1 bg-primary">
      <SafeArea>
        <SvgCss
          xml={apptheme === 'light' ? GlobalMapLight : GlobalMap}
          width={'100%'}
        />
        <View
          className={`absolute w-full h-full px-4 `}
          style={{top: insets.top}}>
          <Text className="text-title1 mt-4 font-bold text-center">
            Search Flights
          </Text>
          <Input
            value={value}
            onChangeText={e => {
              setLoading(true);
              setValue(e);
            }}
            style={{
              color: apptheme === 'light' ? 'black' : 'white',
            }}
            placeholder="Search Flight by airline name or number"
            placeholderTextColor={apptheme === 'light' ? 'black' : 'white'}
            onSubmitEditing={() => {
              searchFlights();
            }}
          />
          <View className="mt-4">
            {loading ? (
              <View>
                <ActivityIndicator animating={loading} />
              </View>
            ) : (
              <FlatList
                data={filteredFlights}
                bounces={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <FlightItem data={item} />}
                ListEmptyComponent={() => {
                  return (
                    <View>
                      <Text>No flights available</Text>
                    </View>
                  );
                }}
              />
            )}
          </View>
        </View>
      </SafeArea>
    </View>
  );
};

export default SearchScreen;
