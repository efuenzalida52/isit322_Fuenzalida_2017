import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore} from 'redux';
import spokesman from './spokesman';
import SimpleRedux from './SimpleRedux';
import {Provider} from "react-redux";

let store = createStore(spokesman);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
