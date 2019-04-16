import React, {Component} from 'react';
import {Image, StyleSheet, View, StatusBar} from 'react-native';
import {colors} from "./res/colors";

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar animated backgroundColor={colors.primary} barStyle="light-content" />
        <Image style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} source={require('./res/img/space.jpg')}/>
        <Image style={{ width: 200, height: 148, marginTop: 38 }} source={require('./res/img/logo.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
});
