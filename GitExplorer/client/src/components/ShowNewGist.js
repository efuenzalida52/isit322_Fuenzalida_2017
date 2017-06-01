/** Created by bcuser on 5/13/17.*/
import React, {Component} from 'react';
import '../css/App.css';
import ElfLogger from '../Debug/elf-logger';
const logger = new ElfLogger(false);
import { Button } from 'react-bootstrap';

class ShowNewGist extends Component {
    constructor(props) {
        super(props);
        logger.log('ShowUserInfo constructor called.');
        logger.log('ShowUserInfo props.' + JSON.stringify(this.props.userData, null, 4));
    }

    render() {

        return (
            <div>
{/*                { Object.keys(this.props.gitGist).map((name) => {
                    let value = this.props.gitGist[name];
                    return <h1> {name} : {value} </h1>;
                })}*/}
                <pre> {JSON.stringify(this.props.gitGist, null, 4)} </pre>
                <Button bsStyle='primary' id='getUser' onClick={this.props.onChange}>Get Gist</Button>
            </div>
        );
    }
}

export default ShowNewGist;
