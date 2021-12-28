import {Container, Item, LocalityOption} from './styled';
import FlatList from 'components/FlatList';
import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {Dimensions} from 'react-native';
import {
  getLocations,
  getCurrentWeatherPosition,
  getForecastWeatherPosition,
} from 'actions/weather';
import {useDispatch, useSelector} from 'react-redux';
import Fetching from 'components/ActivityIndicator/';
import theme from 'config/theme';
import {searchById} from 'helpers/utils';
import {Alert} from 'react-native';
import strings from 'config/constants/strings';

const {height} = Dimensions.get('window');
const ITEM_HEIGHT = height * 0.25;
const CityListScreen = ({navigation}) => {
  const [localities, setLocalities] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const {currentWeather, forestWeather} = useSelector(
    (state) => state.weatherReducer,
  );

  const handleGetLocations = useCallback(async () => {
    const values = await getLocations();
    let result = values.map((localities) => ({
      id: localities.id,
      name: localities.name,
    }));
    setLocalities(result.sort((a, b) => a.name.localeCompare(b.name)));
  }, []);

  useEffect(() => {
    if (!localities) {
      handleGetLocations();
    }
    if (localities) {
      setIsLoading(false);
    }
  }, [localities, isLoading]);

  // List Logic performance optimization

  const keyExtractor = (item, index) => item.id;
  const getItemLayout = (data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });
  const renderItem = ({item}) => {
    return (
      <LocalityOption
        key={item.id}
        onPress={() => {
          const currentAlreadyExist = searchById(currentWeather, item.id);
          const forestAlreadyExist = searchById(forestWeather, item.id);
          if (currentAlreadyExist || forestAlreadyExist) {
            Alert.alert(strings.alert, strings.city_already_exist);
          } else {
            dispatch(getCurrentWeatherPosition(item.name));
            dispatch(getForecastWeatherPosition(item.name));
            navigation.goBack();
          }
        }}>
        <Item numberOfLines={1} ellipsizeMode={'tail'}>
          {item && item.name}
        </Item>
      </LocalityOption>
    );
  };

  const Localities = () => {
    return useMemo(() => {
      return (
        <FlatList
          data={localities}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          getItemLayout={getItemLayout}
        />
      );
    }, [localities]);
  };

  return (
    <Container>
      {isLoading && (
        <Fetching animating={isLoading} color={theme.colors.keppel} />
      )}
      {!isLoading && localities && <Localities />}
    </Container>
  );
};
export default CityListScreen;
