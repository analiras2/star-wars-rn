import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './navigator/AppNavigator';

// tslint:disable-next-line: variable-name
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  public render() {
    return <AppContainer />;
  }
}
