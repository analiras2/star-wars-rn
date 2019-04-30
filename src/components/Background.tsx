import React, { PureComponent } from 'react';
import colors from '../res/colors';
import Navbar from './Navbar';
import SWView from './SWView';

interface Props {
  children: Element;
  title?: string;
}
export default class Background extends PureComponent<Props> {
  public render() {
    const { title, children } = this.props;

    return (
      <SWView bgColor={colors.background} flex={1}>
        <Navbar title={title} />
        <SWView padding={20}>{children}</SWView>
      </SWView>
    );
  }
}
