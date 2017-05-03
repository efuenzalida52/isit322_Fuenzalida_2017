import React from 'react';
import ReactDOM from 'react-dom';
//import {shallow} from 'enzyme';
import GetUserInfo from "../components/GetUserInfo";
import {mount} from 'enzyme';
import ElfDebug from '../ElfDebug';
const elfDebug = new ElfDebug(false);
//jest.mock('whatwg-fetch');

describe('My Get User Info test', function () {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GetUserInfo />, div);
    });
});

describe('My Get User Info Test', function () {

    let getFirst = function (wrapper, element) {
        const ninep = wrapper.find(element).first().debug();
        /*ninep just for debugging*/
        console.log(ninep);
    };

    it('renders button click message', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <p className="ElfFormParagraph">Robin Dudette</p>;
        elfDebug.getFirst(wrapper, 'p');
        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);
    });

    it('renders default login data', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <p className="App-intro">login: Robin Dudette</p>;
        wrapper.find('button#getUser').simulate('click');
        elfDebug.getAll(wrapper, 'div');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });



});
