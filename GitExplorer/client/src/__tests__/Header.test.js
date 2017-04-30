import React from 'react';
import Header from '../components/Header';
import {shallow} from 'enzyme';

var debug = require('debug')('git-convert');
debug('this is a test');

describe('My Header test', function () {

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });
    it('renders and reads h2 text', () => {
        const wrapper = shallow(<Header/>);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

});