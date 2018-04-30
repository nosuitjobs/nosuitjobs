import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs, resolvers } from './graphql';

const debug = require('debug')('strange');

debug('\n⚙️  GraphQL server is starting...');
debug('Logging with debug enabled!');
debug('');

const PORT = process.env.PORT || 3002;

const schema = makeExecutableSchema({ typeDefs, resolvers });
const server = express();

// -- Middlewares
server.use(bodyParser.urlencoded({ extended: false }));

// -- GraphQL
server.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(req => ({
    schema,
    context: {
      // TODO: Add user
    },
  })),
);

// -- GraphiQL
server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

server.listen(PORT, 'localhost', () => {
  debug(`💉  Healthcheck server running at http://localhost:${PORT}`);
});
