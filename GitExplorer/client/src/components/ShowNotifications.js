import React, {Component} from 'react';
import '../css/App.css';
import ElfLogger from './elf-logger';
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
                <button className='getNotifications' onClick={this.props.onChange}>Get Notifications</button>
            </div>
        );
    }
}

export default ShowNewGist;
