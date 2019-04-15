/**
 * @format
 */

// import 'react-native';
// import React from 'react';
// import App from '../App';
//
// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
//
// it('renders correctly', () => {
//   renderer.create(<App />);
// });

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

  describe("rendering", () => {
    it("should render a <View />", () => {
      expect(wrapper.find("View")).toHaveLength(1);
    });
  });
});

const createTestProps2 = (props?: object) => ({
  ...props
});

describe("App2", () => {
  const props = createTestProps2();
  const { getByText } = render(<App {...props} />);

  it("should render a welcome", () => {
    expect(getByText(/welcome/i)).toBeDefined();
  });
});
