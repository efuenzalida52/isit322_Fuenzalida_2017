import React from 'react';
import SmallNumbers from '../components/SmallNumbers';
import {shallow} from 'enzyme';
import numbersInit from '../components/numbers-data';

describe('My Small Numbers test', function () {

    const getLast = (wrapper) => {
        const ninep = wrapper.find('p').last().debug();
        console.log(ninep);
    };
//9
    it('renders button click message for nine', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const nineSign = <p className="App-intro">state.nine: 9</p>;
        wrapper.find('button.getNine').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.nine', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const nineSign = <p className="App-intro">state.nine: 0</p>;
        const ninep = wrapper.find('p').last().debug();
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
//8 getLast can go in the same place in any function for debugging
    it('renders button click message for eight', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const eightSign = <p className="App-intro">state.eight: 8</p>;
        wrapper.find('button.getEight').simulate('click');
        getLast(wrapper);
        expect(wrapper.contains(eightSign)).toEqual(true);

    });

    it('renders initial value of paragraph with state.eight', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const eightSign = <p className="App-intro">state.eight: 0</p>;
        const eightp = wrapper.find('p').last().debug();
        expect(wrapper.contains(eightSign)).toEqual(true);
    });
//7
    it('renders button click message for seven', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const sevenSign = <p className="App-intro">state.seven: 7</p>;
        wrapper.find('button.getSeven').simulate('click');
        expect(wrapper.contains(sevenSign)).toEqual(true);

    });

    it('renders initial value of paragraph with state.seven', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const sevenSign = <p className="App-intro">state.seven: 0</p>;
        expect(wrapper.contains(sevenSign)).toEqual(true);
    });
//6
    it('renders button click message for six', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const sixSign = <p className="App-intro">state.six: 6</p>;
        wrapper.find('button.getSix').simulate('click');
        expect(wrapper.contains(sixSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.six', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const sixSign = <p className="App-intro">state.six: 0</p>;
        expect(wrapper.contains(sixSign)).toEqual(true);
    });
//5
    it('renders button click message for five', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const fiveSign = <p className="App-intro">state.five: 5</p>;
        wrapper.find('button.getFive').simulate('click');
        expect(wrapper.contains(fiveSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.five', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const fiveSign = <p className="App-intro">state.five: 0</p>;
        const fivep = wrapper.find('p').last().debug();
        expect(wrapper.contains(fiveSign)).toEqual(true);
    });
//4
    it('renders button click message for four', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const fourSign = <p className="App-intro">state.four: 4</p>;
        wrapper.find('button.getFour').simulate('click');
        expect(wrapper.contains(fourSign)).toEqual(true);

    });

    it('renders initial value of paragraph with state.four', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const fourSign = <p className="App-intro">state.four: 0</p>;
        const fourp = wrapper.find('p').last().debug();
        expect(wrapper.contains(fourSign)).toEqual(true);
    });
//3
    it('renders button click message for three', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const threeSign = <p className="App-intro">state.three: 3</p>;
        wrapper.find('button.getThree').simulate('click');
        expect(wrapper.contains(threeSign)).toEqual(true);

    });

    it('renders initial value of paragraph with state.three', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const threeSign = <p className="App-intro">state.three: 0</p>;
        const threep = wrapper.find('p').last().debug();
        expect(wrapper.contains(threeSign)).toEqual(true);
    });
//2
    it('renders button click message for two', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const twoSign = <p className="App-intro">state.two: 2</p>;
        wrapper.find('button.getTwo').simulate('click');
        expect(wrapper.contains(twoSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.two', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const twoSign = <p className="App-intro">state.two: 0</p>;
        expect(wrapper.contains(twoSign)).toEqual(true);
    });
//1
    it('renders button click message for one', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const oneSign = <p className="App-intro">state.one: 1</p>;
        wrapper.find('button.getOne').simulate('click');
        expect(wrapper.contains(oneSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.one', () => {
        const wrapper = shallow(<SmallNumbers numbers={numbersInit}/>);
        const oneSign = <p className="App-intro">state.one: 0</p>;
        expect(wrapper.contains(oneSign)).toEqual(true);
    });
});