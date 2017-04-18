import React, {Component} from 'react';
import './App.css';
import 'whatwg-fetch';
import logo from './International_Pokémon_logo.svg';

class App extends Component {
    constructor() {
        super();
        this.state = {
            file: 'Get Nine Result will be placed here.',
            foo: 'waiting for server',
            nine: '0',
            eight: '0',
        };

    }

    bar = () => {
        const that = this;
        fetch('/api/foo')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
            console.log('parsed json', json);
            that.setState(foo => (json));
        }).catch(function (ex) {
            console.log('parsing failed', ex);
        });
    };

    getNine = () => {
        this.setState({nine: '9'});
    };

    getEight = () => {
        this.setState({eight: '8'});
    };

    fetch() {
        this.setState({foo: "bar"});
        return {
            then: function() {
                return {
                    then: function() {
                        return {
                            catch: function() {

                            }
                        }

                    }
                }

            }
        }
    }

    getFoo = () => {
        const that = this;
        this.fetch('/api/foo')
            .then(function(response) {
                console.log('got response');
                return response.json();
            }).then(function(json) {
            console.log('parsed json', json);
            that.setState(foo => (json));
        }).catch(function(ex) {
            console.log('parsing failed', ex);
        });
    };

    render() {
        return (
            <div className="App">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                <p className="App-intro">
                    state.foo {this.state.foo}
                </p>
                <p className="App-intro">
                    state.file {this.state.file}
                </p>
                <p className="App-intro">
                    state.nine: {this.state.nine}
                </p>
                <p className="App-intro">
                    state.eight: {this.state.eight}
                </p>

                <button onClick={this.bar}>Click Me</button>
                <button className="getFoo" onClick={this.getFoo}>Click Me</button>
                <button className="getNine" onClick={this.getNine}>Click Me</button>
                <button className="getEight" onClick={this.getEight}>Click Me</button>
            </div>
        );
    }

}

export default App;
