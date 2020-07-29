import IconNames from 'components/Icon/iconNames';

const Images = {
  weather: {
    ['01']: {
      background: require('assets/images/weather/clear-sky.png'),
      iconName: IconNames.ClearSky
    },
    ['02']: {
      background: require('assets/images/weather/few-clouds.png'),
      iconName: IconNames.FewClouds
    },
    ['03']: {
      background: require('assets/images/weather/scattered-clouds.png'),
      iconName: IconNames.ScatteredClouds
    },
    ['04']: {
      background: require('assets/images/weather/broken-clouds.png'),
      iconName: IconNames.BrokenClouds
    },
    ['09']: {
      background: require('assets/images/weather/shower-rain.png'),
      iconName: IconNames.ShowerRain
    },
    ['10']: {
      background: require('assets/images/weather/rain.png'),
      iconName: IconNames.Rain
    },
    ['11']: {
      background: require('assets/images/weather/thunderstorm.png'),
      iconName: IconNames.ThunderStorm
    },
    ['13']: {
      background: require('assets/images/weather/snow.png'),
      iconName: IconNames.Snow
    },
    ['50']: {
      background: require('assets/images/weather/mist.png'),
      iconName: IconNames.Mist
    }
  }
};

export default Images;
