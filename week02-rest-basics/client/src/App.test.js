import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

describe('My react basic test', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });
    it('renders and reads h1 text', () => {
        const wrapper = shallow(<App/>);
        const welcome = <h2>Welcome to React</h2>
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">Nine: 9</p>;
        wrapper.find('button.getFoo').simulate('click');
        const ninep = wrapper.find('p').first().debug();
        console.log(ninep);
        //wrapper.find('p').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
});
