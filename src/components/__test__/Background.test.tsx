import {shallow} from 'enzyme';
import React from 'react';
import {render} from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import {Text} from 'react-native';
import Background from '../Background';
import SWView from '../SWView';

const basicView = () => (
    <Background>
       <SWView>
           <Text>Star Wars</Text>
       </SWView>
    </Background>
);

describe('Background', () => {
    const wrapper = shallow(basicView());
    const { getByText } = render(basicView());

    describe('validating Background children', () => {
        it('should render a Star Wars App', () => {
            expect(getByText(/Star Wars App/i)).toBeDefined();
        });
    });

    describe('rendering Components', () => {
        it('should render a <Navbar />', () => {
            expect(wrapper.find('Navbar')).toHaveLength(1);
        });
        it('should render a <SWView />', () => {
            expect(wrapper.find('SWView')).toHaveLength(3);
        });
    });

    it('renders SWText correctly', () => {
        const tree = renderer.create(basicView()).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
