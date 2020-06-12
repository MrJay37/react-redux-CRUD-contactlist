import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './js/store';
import {Provider} from 'react-redux'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './js/components/App';
import * as serviceWorker from './serviceWorker';
import {Container} from 'react-bootstrap'

const store = configureStore();

ReactDOM.render(<Container fluid="true"><Provider store={store}> <App /> </Provider></Container>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
