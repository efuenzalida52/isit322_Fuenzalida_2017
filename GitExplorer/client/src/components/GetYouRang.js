import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import { Button } from 'react-bootstrap';


class GetYouRang extends Component {
    constructor() {
        super();

        this.state = {
            message: 'waiting for server...',
            result: 'waiting 2'
        }
    }

    getFoo = (event) => {
        const that = this;
        console.log('hello', event.target.id);
        let micro = event.target.id;
        fetch('/' + micro)
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
                    state.foo {this.state.message}
                </p>
                <p>
                    state.file {this.state.result}
                </p>

                <Button bsStyle='primary' id="qux/you-rang" onClick={this.getFoo}>Get qux Rang</Button>
                <Button bsStyle='primary' id="markdown/you-rang" onClick={this.getFoo}>Get markdown Rang</Button>
                <Button bsStyle='primary' id="git-user/you-rang" onClick={this.getFoo}>Get user Rang</Button>
                
            </div>
        );
    }
}
//
export default GetYouRang;