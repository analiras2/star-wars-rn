import { shallow } from 'enzyme';
import React from 'react';
import { render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import SWLoading from '../SWLoading';

describe('SWLoading', () => {
  const props = { title: 'Loading' };
  const wrapper = shallow(<SWLoading {...props} />);
  const { getByText } = render(<SWLoading {...props} />);

  describe('validating SWLoading texts', () => {
    it('should render Loading', () => {
      expect(getByText(/Loading/i)).toBeDefined();
    });
  });

  describe('rendering Components', () => {
    it('should render a <SWView />', () => {
      expect(wrapper.find('SWView')).toHaveLength(1);
    });

    it('should render a <SWText />', () => {
      expect(wrapper.find('SWText')).toHaveLength(1);
    });
  });

  it('renders SWLoading correctly', () => {
    const tree = renderer.create(<SWLoading {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
