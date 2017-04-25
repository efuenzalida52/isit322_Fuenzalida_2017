import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
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
        <App />
        <SmallNumbers numbers={numbersInit} />
    </div>,
    document.getElementById('root')
);
