import React from 'react';
import GetFoo from '../components/GetFoo';
import {shallow} from 'enzyme';

var debug = require('debug')('git-convert');
debug('this is a test');

describe('My GetFoo test', function() {

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<GetFoo />);
        const nineSign = <p>state.foo bar</p>;
        wrapper.find('Button#getFoo').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

});
