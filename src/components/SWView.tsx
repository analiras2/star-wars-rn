import React, { PureComponent } from 'react';
import { View } from 'react-native';
import styles from '../res/styles';

interface Props {
  children: Element;
  row?: boolean;
  flex?: number;
  bgColor?: string;
  align?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'stretch'
    | 'baseline'
    | undefined;
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  padding?: number;
  right?: number;
  horizontal?: number;
  left?: number;
  top?: number;
  vertical?: number;
  bottom?: number;
  width?: number;
}
export default class SWView extends PureComponent<Props> {
  public render() {
    return (
      <View style={styles({ ...this.props }).swView}>
        {this.props.children}
      </View>
    );
  }
}
