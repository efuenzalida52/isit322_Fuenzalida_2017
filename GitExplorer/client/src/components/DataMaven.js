import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import fieldDefinitions from './field-definitions';
import ElfHeader from './ElfHeader';
import ElfLogger from './elf-logger';
import ShowUserInfo from './ShowUserInfo';
import GetFoo from './GetFoo';
import SmallNumbers from './SmallNumbers';
import numbersInit from './numbers-data';
import ShowNewGist from './ShowNewGist';
import ShowNotifications from './ShowNotifications';
import '../css/menu.css';//i think this is where we put it.
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

const logger = new ElfLogger(false);

class DataMaven extends Component {
    constructor() {
        super();
        const tempGitUser = {};
        for (let value of fieldDefinitions) {
            tempGitUser[value.id] = value.sample;
        }

        this.state = {
            gitUser: tempGitUser,
            gitGist: {
                'name':'you',
                'url':'are'
            },
            gitNotifications: {
                'The Notifications':'are...'
            }
        };
        logger.log('GetUserInfo constructor called.')
    }

    fetchGist = (event) => {
        const that = this;
        fetch('/api/gist-test')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
            logger.log('parsed json', json);
            that.setState({
                gitGist: json.result
            });
        }).catch(function (ex) {
            // DISPLAY WITH LOGGER
            logger.log('parsing failed ', ex);
        });
        event.preventDefault();
    };

    fetchNotifications = (event) => {
        const that = this;
        fetch('/api/Notifications')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
            logger.log('parsed json', json);
            that.setState({
                gitNotifications: json
            });
        }).catch(function (ex) {
            // DISPLAY WITH LOGGER
            logger.log('parsing failed ', ex);
        });
        event.preventDefault();
    };

    fetchUser = (event) => {
        const that = this;
        fetch('/api/user')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
            console.log('parsed json', json);
            that.setState(foo => (json));
            let body = JSON.parse(json.body);
            that.setState({gitUser: body});
        }).catch(function (ex) {
            console.log('parsing failed', ex);
        });
        event.preventDefault();
    };

    render() {
        return (
            <Router>
                <div className="App">

                    <ElfHeader/>

                    <Route exact path="/" render={(props) => (
                        <ShowUserInfo {...props} gitUser={this.state.gitUser}
                                      fields={fieldDefinitions}
                                      onChange={this.fetchUser}/>
                    )}/>
                    <Route path="/get-gist" render={(props) => (
                        <ShowNewGist {...props} gitGist={this.state.gitGist}
                                      onChange={this.fetchGist}/>
                    )}/>
                    <Route path="/get-Notifications" render={(props) => (
                        <ShowNotifications {...props} gitNotifications={this.state.gitNotifications}
                                     onChange={this.fetchNotifications}/>
                    )}/>
                    <Route path="/get-foo" component={GetFoo}/>
                    <Route path="/get-numbers" render={(props) => (
                        <SmallNumbers {...props} numbers={numbersInit}/>
                    )}/>

                </div>
            </Router>
        );
    }
}
export default DataMaven;
