import { shallow } from 'enzyme';
import React from 'react';
import { render } from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import Dashboard from '../Dashboard';

describe('App', () => {
  const dashModule = <Dashboard navigation={true} />;
  const wrapper = shallow<Dashboard>(dashModule);
  const { getByText } = render(dashModule);

  describe('validating App texts', () => {
    it('should render a Ligar Motores', () => {
      expect(getByText(/Ligar propulsores/i)).toBeDefined();
    });
  });

  describe('rendering App components', () => {
    it('should render a <SWView />', () => {
      expect(wrapper.find('SWView')).toHaveLength(1);
    });

    it('should render a <SWButton />', () => {
      expect(wrapper.find('SWButton')).toHaveLength(1);
    });

    it('should render two <Image />', () => {
      expect(wrapper.find('Image')).toHaveLength(2);
    });
  });

  it('renders App correctly', () => {
    const tree = renderer.create(dashModule).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
