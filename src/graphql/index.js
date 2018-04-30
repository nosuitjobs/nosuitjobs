import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';

const httpLink = new HttpLink({
  uri: 'http://localhost:8080/api',
  credentials: 'same-origin',
});

const middlewareLink = setContext(() => ({
  headers: {
    'x-token': localStorage.getItem('token') || null,
    'x-refresh-token': localStorage.getItem('refreshToken') || null,
  },
}));

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (
    graphQLErrors && graphQLErrors.find(error => error.message.statusCode === 401)
  ) {
    window.location = '/login';
  }
});

const cache = new InMemoryCache();
const initialState = window.__APOLLO_STATE__; // eslint-disable-line

export const client = new ApolloClient({
  initialState,
  link: middlewareLink.concat(errorLink.concat(httpLink)),
  cache: cache.restore(initialState),
});
