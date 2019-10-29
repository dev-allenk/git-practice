import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Root';

const Hot = hot(App);

ReactDOM.render(<Hot />, document.querySelector('#root'));
