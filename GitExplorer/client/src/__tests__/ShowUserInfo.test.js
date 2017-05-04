import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import ShowUserInfo from '../components/ShowUserInfo';
import fieldDefinitions from '../components/field-definitions';
import ElfDebug from '../ElfDebug';
const elfDebug = new ElfDebug(false);

describe('Show User Info mount Test', function () {

    let bodyData = {};

    beforeEach(function () {
        const tempBody = {};
        for (let value of fieldDefinitions) {
            tempBody[value.id] = value.sample;
        }
        bodyData = tempBody;
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={function () {
            }}
        />, div);
    });

    it('renders default login data', () => {
        const wrapper = mount(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={bodyData}
            onChange={function () {
            }}
        />);
        const nineSign = <p className="ElfFormParagraph" id="login" >login-unknown</p>;
        //console.log(nineSign);
        elfDebug.getFirst(wrapper, 'p');
        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);
    });


});