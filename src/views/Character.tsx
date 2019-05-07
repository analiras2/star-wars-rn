import React, { Component } from 'react';
import Background from '../components/Background';
import SWText from '../components/SWText';

export default class Character extends Component {
  public render() {
    return (
      <Background>
        <SWText title="Character" big={true} bold={true} />
      </Background>
    );
  }
}
