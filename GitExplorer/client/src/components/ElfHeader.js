import React, {Component} from 'react';
import GetUserInfo from './GetUserInfo';
import GetFoo from './GetFoo';
import SmallNumbers from './SmallNumbers';
import numbersInit from '../components/numbers-data';
import '../css/menu.css';//i think this is where we put it.
import logo from '../images/International_Pokémon_logo.svg';
import {
    //BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import '../css/App.css';

class ElfHeader extends Component {

    render() {
        return (
            <div className="App">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/get-foo">BarFoo</Link></li>
                    <li><Link to="/get-numbers">Numbers</Link></li>
                </ul>
      {/*          <Route exact path="/" component={GetUserInfo}/>
             <Route path="/get-foo" component={GetFoo}/>
             <Route path="/get-numbers"
             render={(props) => (
             <SmallNumbers {...props}
             numbers={numbersInit}/>
             )}
             /> NOT WHERE THIS GOES FIND WHERE IT GOES*/}
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
            </div>
        );
    }

}

export default ElfHeader;