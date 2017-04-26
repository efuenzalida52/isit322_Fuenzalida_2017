import React from 'react';
import {shallow} from 'enzyme';
import GetUserInfo from "../components/GetUserInfo";

describe('My Get User Info Test', function () {

    let getFirst = function(wrapper, element){
        const ninep = wrapper.find(element).first().debug();/*ninep just for debugging*/
        console.log(ninep);
    };

    it('renders default login data', () => {
        const wrapper = shallow(<GetUserInfo/>);
        const nineSign = <p className="App-intro">login:</p>;
        getFirst(wrapper, 'p');
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<GetUserInfo/>);
        const nineSign = <p className="App-intro">login: Robin</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

});
