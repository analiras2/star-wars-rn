import React, { Component } from 'react';
import Background from '../components/Background';
import SWText from '../components/SWText';

export default class Movie extends Component {
  public render() {
    return (
      <Background>
        <SWText title="Movie" big={true} bold={true} />
      </Background>
    );
  }
}
