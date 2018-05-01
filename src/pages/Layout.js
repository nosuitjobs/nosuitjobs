import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { Jobs, Job } from '../templates';
import { Footer, Header } from '../organisms';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Switch>
          <Route exact path="/" component={Jobs} />
          <Route exact path="/job/:id" component={Job} />
        </Switch>

        <Footer />
      </Fragment>
    );
  }
}

export default App;
