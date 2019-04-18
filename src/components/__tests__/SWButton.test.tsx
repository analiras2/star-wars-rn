import { shallow } from "enzyme";
import React from "react";
import { render } from "react-native-testing-library";
import renderer from "react-test-renderer";
import SWButton from "../SWButton";

describe("SWButton", () => {
  const props = { title: "Star Wars", onPress: () => {} };
  const wrapper = shallow(<SWButton {...props} />);
  const { getByText } = render(<SWButton {...props} />);

  describe("validating SWButton texts", () => {
    it("should render a Star Wars", () => {
      expect(getByText(/Star Wars/i)).toBeDefined();
    });
  });

  describe("rendering Components", () => {
    it("should render a <TouchableOpacity />", () => {
      expect(wrapper.find("TouchableOpacity")).toHaveLength(1);
    });

    it("should render a <SWText />", () => {
      expect(wrapper.find("SWText")).toHaveLength(1);
    });
  });

  it("renders SWButton correctly", () => {
    const tree = renderer.create(<SWButton {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
