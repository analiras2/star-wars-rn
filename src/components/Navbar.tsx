import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../res/colors';
import strings from '../res/strings';
import SWText from './SWText';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 52,
    alignItems: 'center',
    borderBottomColor: colors.divider,
    borderBottomWidth: 1,
  },
  icon: { marginLeft: 16, width: 52, height: 52, justifyContent: 'center' },
});

interface Props {
  title?: string;
  onBackPress?: () => void;
}
export default class Navbar extends PureComponent<Props> {
  public render() {
    const { title = strings.appName, onBackPress } = this.props;

    return (
      <View style={styles.container}>
        {onBackPress && (
          <TouchableOpacity
            style={styles.icon}
            activeOpacity={0.6}
            onPress={onBackPress}
          >
            <Icon name="md-arrow-back" color={colors.secondary} size={24} />
          </TouchableOpacity>
        )}
        <SWText
          flex={1}
          title={title.toUpperCase()}
          textAlign="center"
          color={colors.accent}
          medium
          bold
          spacing={2}
        />
        {onBackPress && <View style={styles.icon} />}
      </View>
    );
  }
}
