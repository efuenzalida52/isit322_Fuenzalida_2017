import React from 'react';
import SmallNumbers from '../components/SmallNumbers';
import {shallow} from 'enzyme';
import numbersInit from '../components/numbers-data';

var debug = require('debug')('git-convert');
debug('this is a test');

describe('My Small Numbers test', function() {

    const getLast = (wrapper) => {
        const ninep = wrapper.find('p').last().debug();
        console.log(ninep);
    };

    it('renders Button click message for nine', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const nineSign = <p>state.nine: 9</p>;
        wrapper.find('Button#getNine').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.nine', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const nineSign = <p>state.nine: 0</p>;
        const ninep = wrapper.find('p').last().debug();
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders Button click message for eight', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const eightSign = <p>state.eight: 8</p>;
        wrapper.find('Button#getEight').simulate('click');
        getLast(wrapper);
        expect(wrapper.contains(eightSign)).toEqual(true);

    });

    it('renders initial value of paragraph with state.eight', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const eightSign = <p>state.eight: 0</p>;
        const eightp = wrapper.find('p').last().debug();
        expect(wrapper.contains(eightSign)).toEqual(true);
    });

    it('renders Button click message for seven', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const sevenSign = <p>state.seven: 7</p>;
        wrapper.find('Button#getSeven').simulate('click');
        expect(wrapper.contains(sevenSign)).toEqual(true);

    });

    it('renders initial value of paragraph with state.seven', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const sevenSign = <p>state.seven: 0</p>;
        expect(wrapper.contains(sevenSign)).toEqual(true);
    });

    it('renders Button click message for six', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const sixSign = <p>state.six: 6</p>;
        wrapper.find('Button#getSix').simulate('click');
        expect(wrapper.contains(sixSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.six', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const sixSign = <p>state.six: 0</p>;
        expect(wrapper.contains(sixSign)).toEqual(true);
    });

    it('renders Button click message for five', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const fiveSign = <p>state.five: 5</p>;
        wrapper.find('Button#getFive').simulate('click');
        expect(wrapper.contains(fiveSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.five', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const fiveSign = <p>state.five: 0</p>;
        const fivep = wrapper.find('p').last().debug();
        expect(wrapper.contains(fiveSign)).toEqual(true);
    });

    it('renders Button click message for four', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const fourSign = <p>state.four: 4</p>;
        wrapper.find('Button#getFour').simulate('click');
        expect(wrapper.contains(fourSign)).toEqual(true);

    });

    it('renders initial value of paragraph with state.four', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const fourSign = <p>state.four: 0</p>;
        const fourp = wrapper.find('p').last().debug();
        expect(wrapper.contains(fourSign)).toEqual(true);
    });

    it('renders Button click message for three', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const threeSign = <p>state.three: 3</p>;
        wrapper.find('Button#getThree').simulate('click');
        expect(wrapper.contains(threeSign)).toEqual(true);

    });

    it('renders initial value of paragraph with state.three', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const threeSign = <p>state.three: 0</p>;
        const threep = wrapper.find('p').last().debug();
        expect(wrapper.contains(threeSign)).toEqual(true);
    });

    it('renders Button click message for two', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const twoSign = <p>state.two: 2</p>;
        wrapper.find('Button#getTwo').simulate('click');
        expect(wrapper.contains(twoSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.two', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const twoSign = <p>state.two: 0</p>;
        expect(wrapper.contains(twoSign)).toEqual(true);
    });

    it('renders Button click message for one', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const oneSign = <p>state.one: 1</p>;
        wrapper.find('Button#getOne').simulate('click');
        expect(wrapper.contains(oneSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.one', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const oneSign = <p>state.one: 0</p>;
        expect(wrapper.contains(oneSign)).toEqual(true);
    });
});
