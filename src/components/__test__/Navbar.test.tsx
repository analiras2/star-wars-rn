import {shallow} from 'enzyme';
import React from 'react';
import {render} from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import Navbar from "../Navbar";
import {TouchableOpacity} from "react-native";

describe('Navbar', () => {
    const props = { title: 'Star Wars App', onBackPress: () => {} };
    const wrapper = shallow(<Navbar />);
    const wrapperWithProps = shallow(<Navbar {...props} />);
    const { getByText } = render(<Navbar />);

    describe('validating Navbar children', () => {
        it('should render a Star Wars App', () => {
            expect(getByText(/Star Wars App/i)).toBeDefined();
        });
    });

    describe('rendering Components', () => {
        describe('Without props', () => {
            it('should render a <View />', () => {
                expect(wrapper.find('View')).toHaveLength(1);
            });

            it('should render a <SWText />', () => {
                expect(wrapper.find('SWText')).toHaveLength(1);
            });

            it('should render a <SWText />', () => {
                expect(wrapper.contains(<TouchableOpacity />)).toBe(false)
            });
        });

        describe('With props', () => {
            it('should render a <TouchableOpacity />', () => {
                expect(wrapperWithProps.find('TouchableOpacity')).toHaveLength(1);
            });

            it('should render a <View />', () => {
                expect(wrapperWithProps.find('View')).toHaveLength(2);
            });
        });
    });

    it('renders SWText correctly', () => {
        const tree = renderer.create(<Navbar />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
