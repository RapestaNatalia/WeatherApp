import {Container, Item, LocalityOption} from './styled';
import FlatList from 'components/FlatList';
import React, {useState, useEffect} from 'react';
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
import {getForecastedSelector,getCurrentSelector} from '../../../reducers/selectors';

const CityListScreen = ({navigation}) => {
  const [localities, setLocalities] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const currentWeather = useSelector(getCurrentSelector);
  const forestWeather = useSelector(getForecastedSelector);
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
  useEffect(() => {
    if (!localities) {
      new Promise(function () {
        const values = getLocations();
        let result = values.map((localities) => ({
          id: localities.id,
          name: localities.name,
        }));
        setLocalities(result.sort((a, b) => a.name.localeCompare(b.name)));
      });
    }
    if (localities) {
      setIsLoading(false);
    }
  }, [localities, isLoading]);
  return (
    <Container>
      {isLoading && (
        <Fetching animating={isLoading} color={theme.colors.keppel} />
      )}
      {!isLoading && localities && (
        <FlatList data={localities} renderItem={renderItem} />
      )}
    </Container>
  );
};
export default CityListScreen;
