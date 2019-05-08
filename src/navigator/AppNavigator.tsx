import { createStackNavigator } from 'react-navigation';
import CharacterDetails from '../views/character/CharacterDetails';
import Main from '../views/Main';
import MovieDetails from '../views/movie/MovieDetails';
import TabNavigator from './bottomTabNavigator';
import { ROUTES } from './routes';

export default createStackNavigator(
  {
    Main,
    CharacterDetails,
    MovieDetails,
    Dashboard: {
      screen: TabNavigator,
    },
  },
  {
    initialRouteName: ROUTES.MAIN,
    defaultNavigationOptions: {
      header: null,
    },
  },
);
