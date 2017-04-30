import React from 'react';
import {shallow} from 'enzyme';
import GetUserInfo from "../components/GetUserInfo";
import { mount } from 'enzyme';
import ElfTestShow from '../ElfTestShow';
const elfShow = new ElfTestShow(false);
jest.mock('whatwg-fetch');

var debug = require('debug')('git-convert');
debug('this is a test');

describe('My Get User Info test', function () {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GetUserInfo />, div);
    });
});

describe('My Get User Info Test', function () {

    let getFirst = function(wrapper, element){
        const ninep = wrapper.find(element).first().debug();/*ninep just for debugging*/
        console.log(ninep);
    };

    it('renders button click message', () => {
        const wrapper = shallow(<GetUserInfo/>);
        const nineSign = <p className="App-intro">login: Robin Dudette</p>;
        wrapper.find('button.getUser').simulate('click');
        getFirst(wrapper);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

});
