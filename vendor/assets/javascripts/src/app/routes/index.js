import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import App from '../components/app';
import Children1 from "../components/children1";
import NotFound from "../components/not-found";

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/children1" component={Children1} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);