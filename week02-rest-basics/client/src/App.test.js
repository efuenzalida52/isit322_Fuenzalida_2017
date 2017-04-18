import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

describe('My react basic test', function() {

    const getLast = (wrapper) => {
        const ninep = wrapper.find ('p').last().debug();
        console.log(ninep);
    }

    const getFirst= (wrapper) => {
        const ninep = wrapper.find ('p').first().debug();
        console.log(ninep);
    }


    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });
    it('renders and reads h1 text', () => {
        const wrapper = shallow(<App/>);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message for nine', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">state.nine: 9</p>;
        wrapper.find('button.getNine').simulate('click');

        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.nine', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">state.nine: 0</p>;
        const ninep = wrapper.find('p').last().debug();
        console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.eight', () => {
        const wrapper = shallow(<App />);
        const eightSign = <p className="App-intro">state.eight: 0</p>;
        const eightp = wrapper.find('p').last().debug();
        console.log(eightp);
        expect(wrapper.contains(eightSign)).toEqual(true);
    });

    it('renders button click message for eight', () => {
        const wrapper = shallow(<App />);
        const eightSign = <p className="App-intro">state.eight: 8</p>;
        wrapper.find('button.getEight').simulate('click');
        getLast(wrapper);
        expect(wrapper.contains(eightSign)).toEqual(true);

    });
});