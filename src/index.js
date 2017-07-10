import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WebApp from './apps/WebApp';

import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => ( <Provider store={store}><MuiThemeProvider><WebApp /></MuiThemeProvider></Provider>)
injectTapEventPlugin();


ReactDOM.render(<App />, document.getElementById('root'));
