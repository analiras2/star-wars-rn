import React, { Component } from "react";
import { Image, StatusBar } from "react-native";
import { colors } from "./res/colors";
import SWButton from "./components/SWButton";
import SWView from "./components/SWView";

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <SWView flex={1} align="center">
        <StatusBar
          animated
          backgroundColor={colors.primary}
          barStyle="light-content"
        />
        <Image
          style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
          source={require("./res/img/space.jpg")}
        />
        <Image
          style={{ width: 280, height: 200, marginTop: 38 }}
          source={require("./res/img/logo.png")}
        />
        <SWButton
          top={150}
          color={colors.accent}
          title="Ligar Motores"
          onPress={() => {}}
        />
      </SWView>
    );
  }
}
