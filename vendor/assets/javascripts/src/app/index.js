import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import AppComponent from './components/app.component.js';

$(document).on('ready', () => {
  ReactDOM.render(<AppComponent />, document.getElementById('app-wrapper'));
});
