import React, { PureComponent } from "react";
import { TouchableOpacity } from "react-native";
import styles from "../res/styles";
import { colors } from "../res/colors";
import SWText from "./SWText";

interface Props {
  title: string;
  onPress(): void;
  color?: string;
  margin?: number;
  vertical?: number;
  horizontal?: number;
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
}
export default class SWButton extends PureComponent<Props> {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles({ ...this.props }).swButton}
      >
        <SWText
          title={this.props.title.toUpperCase()}
          textAlign="center"
          color={colors.primary}
          medium
          bold
        />
      </TouchableOpacity>
    );
  }
}
