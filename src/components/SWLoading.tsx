import LottieView from 'lottie-react-native';
import React, { PureComponent } from 'react';
import colors from '../res/colors';
import SWText from './SWText';
import SWView from './SWView';

interface Props {
  title: string;
}
export default class SWLoading extends PureComponent<Props> {
  public render() {
    return (
      <SWView>
        <LottieView
          style={{ width: 180 }}
          source={require('../res/bb8.json')}
          autoPlay
          loop
        />
        <SWText
          title={this.props.title.toUpperCase()}
          textAlign="center"
          color={colors.textPrimary}
          small
        />
      </SWView>
    );
  }
}
