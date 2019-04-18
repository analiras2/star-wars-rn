import { shallow } from "enzyme";
import React from "react";
import { render } from "react-native-testing-library";
import renderer from "react-test-renderer";
import App from "../App";

describe("App", () => {
  const wrapper = shallow<App>(<App />);
  const { getByText } = render(<App />);

  describe("validating App texts", () => {
    it("should render a Ligar Motores", () => {
      expect(getByText(/Ligar Motores/i)).toBeDefined();
    });
  });

  describe("rendering App components", () => {
    it("should render a <SWView />", () => {
      expect(wrapper.find("SWView")).toHaveLength(1);
    });

    it("should render a <SWButton />", () => {
      expect(wrapper.find("SWButton")).toHaveLength(1);
    });

    it("should render two <Image />", () => {
      expect(wrapper.find("Image")).toHaveLength(2);
    });
  });

  it("renders App correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
