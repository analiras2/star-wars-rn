import { createStackNavigator } from 'react-navigation';
import Dashboard from '../views/Dashboard';
import Main from '../views/Main';
import helper from './navigatorHelper';

export default createStackNavigator(
  {
    Main,
    Dashboard,
  },
  {
    initialRouteName: helper.main,
    defaultNavigationOptions: {
      header: null,
    },
  },
);
