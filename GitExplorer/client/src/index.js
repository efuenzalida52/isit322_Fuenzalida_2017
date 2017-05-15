/*import React from 'react';
import ReactDOM from 'react-dom';
import GetUserInfo from './components/GetUserInfo';
import './css/index.css';
import Header from './components/ElfHeader';
import SmallNumbers from './components/SmallNumbers';
import numbersInit from './components/numbers-data';
import GetFoo from './components/GetFoo';

ReactDOM.render(
    <div>
        <Header/>
        <GetUserInfo />
        <GetFoo/>
        <SmallNumbers numbers={numbersInit} />
    </div>,
    document.getElementById('root')
);*/
import React from 'react';
import ReactDOM from 'react-dom';
import DataMaven from './components/DataMaven';
import './css/index.css';

ReactDOM.render(
    <div>
        <DataMaven/>
    </div>,
    document.getElementById('root')
);
