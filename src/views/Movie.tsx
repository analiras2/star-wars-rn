import React, { Component } from 'react';
import SWText from '../components/SWText';
import SWView from '../components/SWView';
import colors from '../res/colors';

export default class Movie extends Component {
  public render() {
    return (
      <SWView bgColor={colors.background} flex={1} align="center">
        <SWText title="Movie" big={true} />
      </SWView>
    );
  }
}
