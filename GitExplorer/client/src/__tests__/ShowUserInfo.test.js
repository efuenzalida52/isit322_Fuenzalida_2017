import React from 'react';
import ReactDOM from 'react-dom';
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