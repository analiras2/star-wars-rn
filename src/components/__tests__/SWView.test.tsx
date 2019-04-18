import { shallow } from 'enzyme';
import React from 'react';
import { Text } from 'react-native';
import { render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import SWView from '../SWView';

const getView = () => (
  <SWView>
    <Text>Star Wars</Text>
  </SWView>
);

describe('SWView', () => {
  const wrapper = shallow(getView());
  const { getByText } = render(getView());

  describe('validating SWView texts', () => {
    it('should render a Star Wars', () => {
      expect(getByText(/Star Wars/i)).toBeDefined();
    });
  });

  describe('rendering Components', () => {
    it('should render a <View/>', () => {
      expect(wrapper.find('View')).toHaveLength(1);
    });

    it('should render a <Text />', () => {
      expect(wrapper.find('Text')).toHaveLength(1);
    });
  });

  it('renders SWView correctly', () => {
    const tree = renderer.create(getView()).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
