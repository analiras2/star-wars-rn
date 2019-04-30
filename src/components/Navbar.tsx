import React, { PureComponent } from 'react';
import { View } from 'react-native';
import colors from '../res/colors';
import strings from '../res/strings';
import SWText from './SWText';

interface Props {
  title?: string;
}
export default class Navbar extends PureComponent<Props> {
  public render() {
    const { title } = this.props;

    return (
      <View
        style={{
          width: '100%',
          height: 52,
          justifyContent: 'center',
          borderBottomColor: colors.divider,
          borderBottomWidth: 1,
        }}
      >
        <SWText
          title={title ? title.toUpperCase() : strings.appName.toUpperCase()}
          textAlign="center"
          color={colors.accent}
          medium={true}
          bold={true}
          spacing={2}
        />
      </View>
    );
  }
}
