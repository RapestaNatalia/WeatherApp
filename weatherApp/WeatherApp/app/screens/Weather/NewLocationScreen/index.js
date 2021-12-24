import React from 'react';
import {
  Container,
  IconContainer,
  ButtonContainer,
  WeatherImageContainer,
  FlatListContainer,
  Item,
  LocalityOption,
  TempContainer,
  CityContainer,
} from './styled';
import FlatList from 'components/FlatList';
import {useDispatch, useSelector} from 'react-redux';
import theme from 'config/theme/';
import IconNames from 'components/Icon/iconNames';
import Icon from 'components/Icon';
import ScreenRoutes from 'config/constants/screenRoutes';
import Images from 'assets/images/';
import {Alert} from 'react-native';
import strings from 'config/constants/strings';
import {changeSelected, deleteACity} from 'actions/weather';
import Swipeout from 'react-native-swipeout';

const NewLocationScreen = ({navigation}) => {
  const weatherReducer = useSelector((state) => state.weatherReducer);

  const dispatch = useDispatch();

  function addLocation() {
    if (Object.keys(weatherReducer.currentWeather).length < 5) {
      navigation.navigate(ScreenRoutes.CITY_LIST_SCREEN);
    } else {
      Alert.alert(strings.alert, strings.locality_limits);
    }
  }
  const changeLocation = (item, index) => {
    dispatch(changeSelected(index));
    navigation.goBack();
  };
  const renderItem = ({item, index}) => {
    let greeting;

    if (index === 0) {
      greeting = true;
    } else {
      greeting = false;
    }
    const rightButton = [
      {
        text: 'Borrar',
        type: 'delete',
        backgroundColor: theme.colors.keppel,
        disabled: greeting,
        onPress: () => {
          dispatch(deleteACity(item.id));
        },
      },
    ];

    return (
      <Swipeout right={rightButton} autoClose={true}>
        {item && (
          <LocalityOption
            onPress={() => {
              changeLocation(item, index);
            }}
            key={index.toString()}>
            {item.temp && (
              <TempContainer>
                <Item>{item.temp} ºC</Item>
              </TempContainer>
            )}
            {item.city && (
              <CityContainer>
                <Item>{item.city}</Item>
              </CityContainer>
            )}
            {item.icon && (
              <WeatherImageContainer>
                <Icon
                  name={Images.weather[item.icon].iconName}
                  size={18}
                  enabled={false}
                  color={theme.colors.genoa}
                />
              </WeatherImageContainer>
            )}
          </LocalityOption>
        )}
      </Swipeout>
    );
  };
  return (
    <Container>
      <IconContainer>
        <ButtonContainer>
          <Icon
            name={IconNames.Add}
            size={36}
            color={theme.colors.black}
            onPress={addLocation}>
            {' '}
          </Icon>
        </ButtonContainer>
      </IconContainer>
      <FlatListContainer>
        <FlatList
          data={weatherReducer.currentWeather}
          renderItem={renderItem}
        />
      </FlatListContainer>
    </Container>
  );
};
export default NewLocationScreen;
