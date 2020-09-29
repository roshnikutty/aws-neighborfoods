import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

import store from './store';
import App from './App';
import './index.css';

Amplify.configure(awsconfig);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
