import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Home from './views/Home';
import Test from './views/Test';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
