import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import SWText from '../components/SWText';
import SWView from '../components/SWView';
import colors from '../res/colors';

export default class Character extends Component {
  public render() {
    return (
      <SWView bgColor={colors.background} flex={1} align="center">
        <Navbar />
        <SWText title="Character" big={true} />
      </SWView>
    );
  }
}
