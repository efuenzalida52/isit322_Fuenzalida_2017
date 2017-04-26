import React from 'react';
import GetUserInfo from '../components/GetUserInfo';
import {shallow} from 'enzyme';

describe('My GetFoo test', function () {

    it('expects true to be true', function () {
        expect(true).toBe(true);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<GetUserInfo />);
        const nineSign = <p className="App-intro">Nine: 9</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

});