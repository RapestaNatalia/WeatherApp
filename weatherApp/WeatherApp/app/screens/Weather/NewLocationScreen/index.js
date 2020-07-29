import React from 'react';
import {Container,IconContainer,ButtonContainer,WeatherImageContainer,FlatListContainer, Item,LocalityOption,TempContainer, CityContainer} from './styled';
import FlatList from 'components/FlatList';
import { useDispatch, useSelector } from 'react-redux';
import theme from 'config/theme/';
import IconNames from 'components/Icon/iconNames';
import Icon from 'components/Icon';
import ScreenRoutes from 'config/constants/screenRoutes';
import Images from 'assets/images/';
import { Alert } from 'react-native';
import strings from 'config/constants/strings';
import { changeSelected } from 'actions/weather';

const NewLocationScreen= ({navigation})=>{
    const weatherReducer = useSelector(state => state.weatherReducer);
    const dispatch = useDispatch();

    function addLocation () {
        if(Object.keys(weatherReducer.currentWeather).length<5){
            navigation.navigate(ScreenRoutes.CITY_LIST_SCREEN);
        }else{
            Alert.alert(strings.alert,strings.locality_limits);
        }
    }
    const changeLocation = (item,index) =>{
        dispatch(changeSelected(index));
        navigation.goBack()
    }
    const renderItem = ({item ,index}) => {
        return (
           <LocalityOption
           onPress={()=>{changeLocation(item,index)}}
           key={index.toString()}
           >
            <TempContainer>  
            <Item>{item.temp} ºC</Item></TempContainer> 
            <CityContainer>
            <Item>{item.city}</Item></CityContainer>
            <WeatherImageContainer>
                <Icon
                    name={Images.weather[item.icon].iconName}
                    size={18}
                    enabled={false}
                    color={theme.colors.genoa}
                />
             </WeatherImageContainer>
          </LocalityOption>
        );
      };
    return (
        <Container>
          <IconContainer>  
          <ButtonContainer>
            <Icon name={IconNames.Add} size ={36} color={theme.colors.black} onPress={addLocation}> </Icon></ButtonContainer>
          </IconContainer>
          <FlatListContainer>
            <FlatList data={weatherReducer.currentWeather} renderItem={renderItem} />
          </FlatListContainer>
        </Container>
      );

}
export default NewLocationScreen;