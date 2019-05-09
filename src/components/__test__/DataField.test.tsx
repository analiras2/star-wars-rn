import {shallow} from 'enzyme';
import React from 'react';
import {render} from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import DataField from "../DataField";

describe('DataField', () => {
    const props = { title: 'My Title', value: 'Star Wars App' };
    const wrapper = shallow(<DataField {...props} />);
    const { getByText } = render(<DataField {...props} />);

    describe('validating Background children', () => {
        it('should render a Star Wars App', () => {
            expect(getByText(/My Title/i)).toBeDefined();
        });
        it('should render a Star Wars App', () => {
            expect(getByText(/Star Wars App/i)).toBeDefined();
        });
    });

    describe('rendering Components', () => {
            it('should render a <SWView />', () => {
                expect(wrapper.find('SWView')).toHaveLength(1);
            });

            it('should render a <SWText />', () => {
                expect(wrapper.find('SWText')).toHaveLength(2);
            });
    });

    it('renders SWText correctly', () => {
        const tree = renderer.create(<DataField {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
