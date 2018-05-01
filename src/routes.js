import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './pages';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    );
  }
}

export default Routes;
