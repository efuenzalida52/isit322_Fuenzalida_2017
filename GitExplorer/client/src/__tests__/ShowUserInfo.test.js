import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import ShowUserInfo from '../components/ShowUserInfo';
import fieldDefinitions from '../components/field-definitions';
describe('Show User Info mount Test', function () {

    let bodyData = {};

    beforeEach(function () {
        const tempBody = {};
        for (let value of fieldDefinitions) {
            tempBody[value.id] = value.sample;
        }
        bodyData = tempBody;
    });

    it('renders default login data', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <p className="ElfFormParagraph">login: Robin Dudette</p>;
        wrapper.find('button#getUser').simulate('click');
        elfDebug.getAll(wrapper, 'div');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ShowUserInfo
            fields={fieldDefinitions}
            body={bodyData}
            onChange={function () {
            }}
        />, div);
    });
});