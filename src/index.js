import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Foot from './ft';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';


const store = createStore (allReducers);

ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'));
ReactDOM.render(<Foot/>, document.getElementById('foot'));
registerServiceWorker();
