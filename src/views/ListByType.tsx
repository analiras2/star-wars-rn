import React, { Component } from 'react';
import { Image, StatusBar } from 'react-native';
import SWText from '../components/SWText';
import SWView from '../components/SWView';
import colors from '../res/colors';

export default class ListByType extends Component {
  public render() {
    return (
      <SWView bgColor={colors.background} flex={1} align="center">
        <Image
          style={{ width: 280, height: 200, marginTop: 38 }}
          source={require('../res/img/logo.png')}
        />
        <SWText title="ListByType" big={true} />
      </SWView>
    );
  }
}
