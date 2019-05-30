import React, { PureComponent } from 'react';
import colors from '../res/colors';
import Navbar from './Navbar';
import SWView from './SWView';

interface Props {
  children: Element;
  title?: string;
  noPadding?: boolean;
  onBackPress?: () => void;
}
export default class Background extends PureComponent<Props> {
  public render() {
    const { title, children, noPadding, onBackPress } = this.props;

    return (
      <SWView bgColor={colors.background} flex={1}>
        <Navbar title={title} onBackPress={onBackPress} />
        <SWView padding={noPadding ? 0 : 20}>{children}</SWView>
      </SWView>
    );
  }
}
