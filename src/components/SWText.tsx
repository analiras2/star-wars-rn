import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import styles from '../res/styles';

interface Props {
  title: string;
  flex?: number;
  bold?: boolean;
  margin?: number;
  vertical?: number;
  top?: number;
  bottom?: number;
  horizontal?: number;
  right?: number;
  left?: number;
  color?: string;
  textAlign?: 'left' | 'right' | 'center' | 'auto' | 'justify';
  align?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'stretch'
    | 'baseline'
    | undefined;
  big?: boolean;
  small?: boolean;
  medium?: boolean;
  size?: number;
  spacing?: number;
}
export default class SWText extends PureComponent<Props> {
  public render() {
    return (
      <Text style={styles({ ...this.props }).swText}>{this.props.title}</Text>
    );
  }
}
