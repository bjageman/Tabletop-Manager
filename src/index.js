import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import WebApp from './apps/WebApp';
import 'draft-js/dist/Draft.css'

import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => ( <Provider store={store}><WebApp /></Provider>)
injectTapEventPlugin();


ReactDOM.render(<App />, document.getElementById('root'));
