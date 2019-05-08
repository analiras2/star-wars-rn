import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import colors from '../res/colors';
import Character from '../views/character/Character';
import Movie from '../views/Movie';

const menuItem = (
  focused: boolean,
  icon: string,
  tintColor: string,
  title: string,
) => {
  return (
    <Icon
      style={{ marginTop: 8 }}
      name={icon}
      color={tintColor}
      size={focused ? 24 : 16}
    />
  );
};

const tabNavigator = createBottomTabNavigator(
  {
    Character: {
      screen: Character,
      navigationOptions: () => ({
        tabBarIcon: (item: { focused: boolean; tintColor: string }) =>
          menuItem(item.focused, 'md-person', item.tintColor, 'Character'),
      }),
    },
    Movie: {
      screen: Movie,
      navigationOptions: () => ({
        tabBarIcon: (item: { focused: boolean; tintColor: string }) =>
          menuItem(item.focused, 'md-videocam', item.tintColor, 'Movie'),
      }),
    },
  },
  {
    initialRouteName: 'Character',
    tabBarOptions: {
      activeTintColor: colors.accent,
      inactiveTintColor: colors.disable,
      style: {
        height: 68,
        backgroundColor: colors.primary,
        paddingBottom: 8,
      },
      tabStyle: {
        borderTopColor: colors.divider,
        borderTopWidth: 1,
      },
    },
  },
);

export default createAppContainer(tabNavigator);
