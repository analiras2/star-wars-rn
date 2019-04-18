import React, { Component } from 'react';
import { Image, StatusBar } from 'react-native';
import SWButton from './components/SWButton';
import SWView from './components/SWView';
import colors from './res/colors';

export default class App extends Component {
  public render() {
    return (
      <SWView bgColor={colors.background} flex={1} align="center">
        <StatusBar
          animated={true}
          backgroundColor={colors.primary}
          barStyle="light-content"
        />
        <Image
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100%',
            opacity: 0.6,
          }}
          source={require('./res/img/space.jpg')}
        />
        <Image
          style={{ width: 280, height: 200, marginTop: 38 }}
          source={require('./res/img/logo.png')}
        />
        <SWButton
          top={150}
          color={colors.accent}
          title="Ligar Propulsores"
          onPress={() => {}}
        />
      </SWView>
    );
  }
}
