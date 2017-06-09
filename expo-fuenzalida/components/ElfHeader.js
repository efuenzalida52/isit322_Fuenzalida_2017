import React, {Component} from 'react';
import logo from '../images/001.png';

class ElfHeader extends Component {

    render() {
        return (
            <div className='App-header'>
                <img src={logo} className='App-logo' alt='logo'/>
                <h2>Welcome to React</h2>
            </div>
        );
    }

}
export default ElfHeader;
