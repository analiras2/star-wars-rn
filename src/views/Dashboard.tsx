import React, { Component } from 'react';
import { Image, StatusBar } from 'react-native';
import SWText from '../components/SWText';
import SWView from '../components/SWView';
import colors from '../res/colors';

export default class Dashboard extends Component {
  public render() {
    return (
      <SWView bgColor={colors.background} flex={1} align="center">
        <SWText title="Dashboard" big={true} />
      </SWView>
    );
  }
}
