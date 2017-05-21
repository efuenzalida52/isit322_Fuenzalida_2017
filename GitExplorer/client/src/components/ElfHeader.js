import React, {Component} from 'react';
import '../css/menu.css';
import logo from '../images/International_Pokémon_logo.svg';
import {
    Link
} from 'react-router-dom';
import '../css/App.css';

class ElfHeader extends Component {

    render() {
        return (
            <div className='App'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/get-gist'>Gist</Link></li>
                    <li><Link to='/get-foo'>Foo</Link></li>
                    <li><Link to='/get-numbers'>Numbers</Link></li>
                    <li><Link to='/get-notifications'>Notifications</Link></li>
                </ul>

                <div className='App-header'>
                    <img src={logo} className='App-logo' alt='logo'/>
                    <h2>Welcome to React</h2>
                </div>
            </div>
        );
    }

}

export default ElfHeader;
