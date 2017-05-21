import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import fieldDefinitions from './field-definitions';
import ElfLogger from '../Debug/elf-logger';
import ShowUserInfo from './ShowUserInfo';

const logger = new ElfLogger(false);

class GetUserInfo extends Component {
    constructor() {
        super();
        const tempGitUser = {};
        for (let value of fieldDefinitions) {
            tempGitUser[value.id] = value.sample;
        }

        this.state = {
            gitUser: tempGitUser
        };

        logger.log('GetUserInfo constructor called.')
    }

    fetchUser = (event) => {

        const that = this;
        fetch('/api/user')
            .then(function (response) {
                // YOU WRITE IT
                return response.json();
            }).then(function (json) {
            // DISPLAY WITH LOGGER AS NEEDED
            // PARSE THE JSON BODY INTO JS SINCE IT IS PROPABLY A STRING:
            var body = JSON.parse(json.body);
            that.setState({gitUser: body});
        }).catch(function (ex) {
            // DISPLAY WITH LOGGER
        });
        event.preventDefault()
    };

    render() {
        return (
            <div className="App">
                <ShowUserInfo
                    fields={fieldDefinitions}
                    gitUser={this.state.gitUser}
                    onChange={this.fetchUser}
                />
            </div>
        );
    }

}
export default GetUserInfo;
