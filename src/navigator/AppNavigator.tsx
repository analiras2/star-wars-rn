import { createStackNavigator } from 'react-navigation';
import Dashboard from '../views/Dashboard';
import ListByType from '../views/ListByType';
import helper from './navigatorHelper';

export default createStackNavigator(
  {
    Dashboard,
    ListByType,
  },
  {
    initialRouteName: helper.dash,
    defaultNavigationOptions: {
      header: null,
    },
  },
);
