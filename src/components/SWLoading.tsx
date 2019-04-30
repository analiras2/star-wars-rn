import React, { PureComponent } from 'react';
import { ActivityIndicator } from 'react-native';
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
        <ActivityIndicator color={colors.accent} size={64} />
        <SWText
          title={this.props.title.toUpperCase()}
          textAlign="center"
          color={colors.accent}
          small={true}
        />
      </SWView>
    );
  }
}
