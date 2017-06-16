import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import fieldDefinitions from './field-definitions';
import ElfHeader from './ElfHeader';
import ElfLogger from '../Debug/elf-logger';
import ShowUserInfo from './ShowUserInfo';
import GetFoo from './GetFoo';
import SmallNumbers from './SmallNumbers';
import numbersInit from './numbers-data';
import ShowNewGist from './ShowNewGist';
import ShowNotifications from './ShowNotifications';
import GetYouRang from './GetYouRang';
import ElfMenu from './ElfMenu';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import GistLister from "./GistLister";

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
            gitGists: {
                'name': 'you',
                'url': 'are'
            },
            gitNotifications: {
                'The Notifications': 'are...'
            },
            gistList: [{
                avatarUrl: '/',
                createdAt: 'Created At',
                description: 'Description',
                gitPullUrl: 'Git Pull URL',
                htmlUrl: 'HTML URL',
                id: 'ID',
                ownerLogin: 'Owner Login',
                updatedAt: 'Updated At',
                url: 'URL'
            }],
            gistIterate: false
        };
        logger.log('GetUserInfo constructor called.');
    }

    fetchGist = (event) => {
        const that = this;
        fetch('/gitapi/gist/create')
            .then(function(response) {
                return response.json();
            }).then(function(json) {
            logger.log('parsed json', json);
            that.setState({
                gitGist: json.result
            });
        }).catch(function(ex) {
            // DISPLAY WITH LOGGER
            logger.log('parsing failed ', ex);
        });
        event.preventDefault();
    };

    fetchNotifications = (event) => {
        const that = this;
        fetch('/gitapi/notifications')
            .then(function(response) {
                return response.json();
            }).then(function(json) {
            logger.log('parsed json', json);
            that.setState({
                gitNotifications: json
            });
        }).catch(function(ex) {
            // DISPLAY WITH LOGGER
            logger.log('parsing failed ', ex);
        });
        event.preventDefault();
    };

    fetchUser = (event) => {
        const that = this;
        fetch('/gitapi/user')
            .then(function(response) {
                return response.json();
            }).then(function(json) {
            console.log('parsed json', json);
            that.setState(foo => (json));
            let body = JSON.parse(json.body);
            that.setState({gitUser: body});
        }).catch(function(ex) {
            console.log('parsing failed', ex);
        });
        event.preventDefault();
    };

    fetchGistList = (event) => {
        const that = this;
        fetch('/gitapi/gist/get-basic-list')
            .then(function(response) {
                return response.json();
            }).then(function(json) {
            logger.log('parsed json', json);
            that.setState({
                gistList: json.result,
                gistIterate: true
            });
        }).catch(function(ex) {
            // DISPLAY WITH LOGGER
            logger.log('parsing failed ', ex);
        });
        event.preventDefault();
    };

    render() {
        return (
            <Router>
                <div className='App'>
                    <div className='container-fluid App-header'>
                        <ElfMenu/>
                        <ElfHeader/>
                    </div>
                    <div className='container-fluid'>
                        <Route exact path="/" render={(props) => (
                            <ShowUserInfo {...props}
                                          gitUser={this.state.gitUser}
                                          fields={fieldDefinitions}
                                          onChange={this.fetchUser}/>
                        )}/>
                        <Route path="/get-gist" render={(props) => (
                            <ShowNewGist {...props} gitGist={this.state.gitGist}
                                         onChange={this.fetchGist}/>
                        )}/>
                        <Route path="/get-notifications" render={(props) => (
                            <ShowNotifications {...props} gitNotifications={this.state.gitNotifications}
                                               onChange={this.fetchNotifications}/>
                        )}/>
                        <Route path="/get-foo" component={GetFoo}/>
                        <Route path="/get-you-rang" component={GetYouRang}/>
                        <Route path="/get-numbers" render={(props) => (
                            <SmallNumbers {...props} numbers={numbersInit}/>
                        )}/>
                        <Route path="/get-gist-list" render={(props) => (
                            <GistLister {...props} gistList={this.state.gistList}
                                        onChange={this.fetchGistList}
                                        gistIterate={this.state.gistIterate}
                            />
                        )}/>
                    </div>
                </div>
            </Router>
        );
    }
}
export default DataMaven;
