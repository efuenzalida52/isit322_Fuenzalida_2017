import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
//import './mocks';

class App extends Component {
    constructor() {
        super();
        this.state = {
            file: 'Get Nine Result will be placed here.',
            foo: 'waiting for server',
            nine: '9',
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
        this.setState({nine: '9'})
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

/*    getFoo = () => {
        const that = this;
        this.fetch('/api/foo')
            .then(function (response) {
                return response.json();
            })
        .then(function(json) {
         console.log('parsed json', json);
         that.setState(foo => (json));
         }).catch(function(ex) {
         console.log('parsing failed', ex);
         });
    };*/

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
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    state.foo {this.state.foo}
                </p>
                <p className="App-intro">
                    state.foo {this.state.file}
                </p>
                <p className="App-intro">
                    state.foo {this.state.nine}
                </p>

                <button onClick={this.bar}>Click Me</button>
                <button className="getFoo" onClick={this.getFoo}>Click Me</button>
                <button className="getNine" onClick={this.getNine}>Click Me</button>
            </div>
        );
    }

}

export default App;
