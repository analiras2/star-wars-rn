import React, { Component } from 'react';
import SWText from '../components/SWText';
import SWView from '../components/SWView';
import colors from '../res/colors';

export default class Character extends Component {
  public render() {
    return (
      <SWView bgColor={colors.background} flex={1} align="center">
        <SWText title="Character" big={true} />
      </SWView>
    );
  }
}
