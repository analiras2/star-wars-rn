import { createStackNavigator } from 'react-navigation';
import Main from '../views/Main';
import TabNavigator from './bottomTabNavigator';
import helper from './navigatorHelper';

export default createStackNavigator(
  {
    Main,
    Dashboard: {
      screen: TabNavigator,
    },
  },
  {
    initialRouteName: helper.main,
    defaultNavigationOptions: {
      header: null,
    },
  },
);
