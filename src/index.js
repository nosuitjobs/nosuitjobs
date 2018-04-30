import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { ApolloProvider } from 'react-apollo';
import Routes from './routes';
import { client } from './graphql';

const history = createBrowserHistory();

const App = (
  <ApolloProvider client={client}>
    <Router history={history}>
      <Routes />
    </Router>
  </ApolloProvider>
);

const renderMethod = !!window.__APOLLO_STATE__ // eslint-disable-line
  ? ReactDOM.hydrate
  : ReactDOM.render;

function render() {
  return renderMethod(App, document.getElementById('root'));
}

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./routes', () => {
    const NewRoutes = require('./routes').default;

    ReactDOM.render(
      <ApolloProvider client={client}>
        <Router history={history}>
          <NewRoutes />
        </Router>
      </ApolloProvider>,
      document.getElementById('root'),
    );
  });
}

render();
