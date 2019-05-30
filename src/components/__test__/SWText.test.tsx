import { shallow } from 'enzyme';
import React from 'react';
import { render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import SWText from '../SWText';

describe('SWText', () => {
  const props = { title: 'Star Wars App' };
  const wrapper = shallow(<SWText {...props} />);
  const { getByText } = render(<SWText {...props} />);

  describe('validating SWText texts', () => {
    it('should render a Star Wars App', () => {
      expect(getByText(/Star Wars App/i)).toBeDefined();
    });
  });

  describe('rendering Components', () => {
    it('should render a <SWText />', () => {
      expect(wrapper.find('Text')).toHaveLength(1);
    });
  });

  it('renders SWText correctly', () => {
    const tree = renderer.create(<SWText {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
