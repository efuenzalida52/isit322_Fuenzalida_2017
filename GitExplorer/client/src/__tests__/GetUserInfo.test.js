import React from 'react';
import ReactDOM from 'react-dom';
//import {shallow} from 'enzyme';
import GetUserInfo from "../components/GetUserInfo";
import {mount} from 'enzyme';
import ElfDebug from '../ElfDebug';
const elfDebug = new ElfDebug(true);


describe('My Get User Info Test', function () {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GetUserInfo />, div);
    });


    it('renders default data', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <p className='ElfFormParagraph' id='avatar_url'>aiunknown</p>;
        console.log(nineSign);
        elfDebug.getFirst(wrapper, 'p');
        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);
    });

    it('renders default login data', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <p className='ElfFormParagraph' id='login'>login-unknown</p>;
        console.log(nineSign);
        elfDebug.getFirst(wrapper, 'p');
        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);
    });
// onChange={function() {}}

    it('renders button click message', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <p className='ElfFormParagraph' id='login'>Robin Dudette</p>;
        wrapper.find('button#getUser').simulate('click');
        //console.log(nineSign);
        //elfDebug.getFirst(wrapper, 'p');
        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);
    });
});
