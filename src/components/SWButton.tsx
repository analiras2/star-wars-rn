import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import colors from '../res/colors';
import styles from '../res/styles';
import SWText from './SWText';

interface Props {
  color?: string;
  margin?: number;
  vertical?: number;
  horizontal?: number;
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
  title: string;
  onPress(): void;
}
export default class SWButton extends PureComponent<Props> {
  public render() {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles({ ...this.props }).swButton}
        onPress={this.props.onPress}
      >
        <SWText
          title={this.props.title.toUpperCase()}
          textAlign="center"
          color={colors.primary}
          medium={true}
          bold={true}
        />
      </TouchableOpacity>
    );
  }
}
