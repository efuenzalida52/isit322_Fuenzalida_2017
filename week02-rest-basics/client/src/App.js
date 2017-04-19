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
            seven: '0',
            six: '0',
            five: '0',
            four: '0',
            three: '0',
            two: '0',
            one: '0',

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

    getSeven = () => {
        this.setState({seven: '7'});
    };
    getSix = () => {
        this.setState({six: '6'});
    };
    getFive = () => {
        this.setState({five: '5'});
    };
    getFour = () => {
        this.setState({four: '4'});
    };
    getThree = () => {
        this.setState({three: '3'});
    };
    getTwo = () => {
        this.setState({two: '2'});
    };
    getOne = () => {
        this.setState({one: '1'});
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
                <p className="App-intro">
                    state.seven: {this.state.seven}
                </p>
                <p className="App-intro">
                    state.six: {this.state.six}
                </p>
                <p className="App-intro">
                    state.five: {this.state.five}
                </p>
                <p className="App-intro">
                    state.four: {this.state.four}
                </p>
                <p className="App-intro">
                    state.three: {this.state.three}
                </p>
                <p className="App-intro">
                    state.two: {this.state.two}
                </p>
                <p className="App-intro">
                    state.one: {this.state.one}
                </p>

                <button onClick={this.bar}>Click Me</button>
                <button className="getFoo" onClick={this.getFoo}>Click Me</button>
                <button className="getNine" onClick={this.getNine}>Click Me</button>
                <button className="getEight" onClick={this.getEight}>Click Me</button>
                <button className="getSeven" onClick={this.getSeven}>Click Me</button>
                <button className="getSix" onClick={this.getSix}>Click Me</button>
                <button className="getFive" onClick={this.getFive}>Click Me</button>
                <button className="getFour" onClick={this.getFour}>Click Me</button>
                <button className="getThree" onClick={this.getThree}>Click Me</button>
                <button className="getTwo" onClick={this.getTwo}>Click Me</button>
                <button className="getOne" onClick={this.getOne}>Click Me</button>
            </div>
        );
    }

}

export default App;
