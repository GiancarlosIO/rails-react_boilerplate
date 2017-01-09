import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';

import AppComponent from './components/app.component';
import Children1Component from "./components/children1.component";
import Children2Component from "./components/children2.component";

$(document).on('ready', () => {
  ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={Children1Component}></IndexRoute>
      <Route path="children2" component={Children2Component}></Route>
    </Route>
  </Router>,
  document.getElementById('app-wrapper'))
});
