import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import { Button } from 'react-bootstrap';

class GetFoo extends Component {
    constructor() {
        super();

        this.state = {
            foo: 'waiting for server...',
            file: 'waiting 2'
        }
    }

    getFoo = () => {
        const that = this;
        fetch('/foo')
            .then(function (response) {
                console.log('getone-fetch-one');
                return response.json();
            }).then(function (json) {
            console.log('GETONE-FETCH-TWO');
            console.log('parsed json', json);
            that.setState(foo => (json));
        }).catch(function (ex) {
            console.log('parsing failed', ex);
        });
    };

    render() {
        return (
            <div className="App">
                <p>
                    state.foo {this.state.foo}
                </p>
                <p>
                    state.file {this.state.file}
                </p>

                <Button bsStyle='primary' id="getFoo" onClick={this.getFoo}>Click Get Foo</Button>

            </div>
        );
    }
}

export default GetFoo;