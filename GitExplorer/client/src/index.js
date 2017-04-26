import React from 'react';
import ReactDOM from 'react-dom';
import GetUserInfo from './components/GetUserInfo';
import './css/index.css';
import Header from './components/Header';
import SmallNumbers from './components/SmallNumbers';
import numbersInit from './numbers-data';

/*var numbersInit = {
    nine: '0',
    eight: '0'
};*/

ReactDOM.render(
    <div>
        <Header/>
        <GetUserInfo />
        <SmallNumbers numbers={numbersInit} />
    </div>,
    document.getElementById('root')
);
