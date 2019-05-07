import React, { Component } from 'react';
import Background from '../components/Background';
import SWText from '../components/SWText';
import GlobalStorage from '../data/GlobalStorage';
import constants from '../utils/constants';

export default class Character extends Component {
  public render() {
    console.log(
      'AQUI PEOPLE_KEY ->',
      new GlobalStorage(constants.PEOPLE_KEY).getItems(),
    );
    console.log(
      'AQUI MOVIES_KEY ->',
      new GlobalStorage(constants.MOVIES_KEY).getItems(),
    );
    console.log(
      'AQUI SPECIES_KEY ->',
      new GlobalStorage(constants.SPECIES_KEY).getItems(),
    );
    console.log(
      'AQUI PLANETS_KEY ->',
      new GlobalStorage(constants.PLANETS_KEY).getItems(),
    );
    return (
      <Background>
        <SWText title="Character" big={true} bold={true} />
      </Background>
    );
  }
}
