import { shallow } from "enzyme";
import React from "react";
import App from "../App";
import { render } from "react-native-testing-library";

const createTestProps = (props: object) => ({
  ...props
});

describe("App", () => {
  const props = createTestProps({});
  const wrapper = shallow<App>(<App {...props} />);

  describe("rendering View", () => {
    it("should render a <View />", () => {
      expect(wrapper.find("View")).toHaveLength(1);
    });
  });

  describe("rendering Images", () => {
    it("should render a <View />", () => {
      expect(wrapper.find("Image")).toHaveLength(2);
    });
  });
});
