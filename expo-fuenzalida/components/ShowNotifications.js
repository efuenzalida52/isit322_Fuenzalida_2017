import React, {Component} from 'react';
import '../css/App.css';
import ElfLogger from '../Debug/elf-logger';
import { Button } from 'react-bootstrap';
const logger = new ElfLogger(false);

class ShowNewGist extends Component {
    constructor(props) {
        super(props);
        logger.log('ShowUserInfo constructor called.');
        logger.log('ShowUserInfo props.' + JSON.stringify(this.props.userData, null, 4));
    }

    render() {

        return (
            <div>
                <pre> {JSON.stringify(this.props.gitNotifications, null, 4)} </pre>
                <Button bsStyle='primary' id='gistLister' onClick={this.props.onChange}>Get Notifications</Button>
            </div>
        );
    }
}

export default ShowNewGist;
