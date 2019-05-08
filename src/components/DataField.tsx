import React, { PureComponent } from 'react';
import SWText from './SWText';
import SWView from './SWView';

interface Props {
  title: string;
  value: string;
}
export default class DataField extends PureComponent<Props> {
  public render() {
    const { title, value } = this.props;

    return (
      value && (
        <SWView flex={1}>
          <SWText title={title} small />
          <SWText title={value} bold />
        </SWView>
      )
    );
  }
}
