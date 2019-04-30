import React, { Component } from 'react';
import { Image, StatusBar } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import SWLoading from '../components/SWLoading';
import SWView from '../components/SWView';
import navigatorHelper from '../navigator/navigatorHelper';
import colors from '../res/colors';

const resetAction = StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: navigatorHelper.dashboard }),
  ],
});
interface Props {
  navigation: any;
}
export default class Main extends Component<Props> {
  public componentWillMount(): void {
    setTimeout(() => this.props.navigation.dispatch(resetAction), 3000);
  }

  public render() {
    return (
      <SWView bgColor={colors.background} flex={1} align="center">
        <StatusBar
          animated={true}
          backgroundColor={colors.primary}
          barStyle="light-content"
        />
        <Image
          style={{ width: 300, height: 200, marginTop: 38, marginBottom: 88 }}
          source={require('../res/img/logo.png')}
        />
        <SWLoading title="Loading..." />
      </SWView>
    );
  }
}
