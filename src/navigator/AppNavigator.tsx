import { createStackNavigator } from 'react-navigation';
import CharacterDetails from '../screens/character/CharacterDetails';
import Main from '../screens/Main';
import MovieDetails from '../screens/movie/MovieDetails';
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
