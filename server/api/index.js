import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs, resolvers } from './graphql';

const debug = require('debug')('api');

debug('\n⚙️  GraphQL server is starting...');
debug('Logging with debug enabled!');
debug('');

require('dotenv').config();

const PORT = process.env.PORT || 3002;

const schema = makeExecutableSchema({ typeDefs, resolvers });
const server = express();

// -- Middlewares
server.use(bodyParser.urlencoded({ extended: false }));
server.use((req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    req.companyId = decoded;

    next();
  });
});

// -- GraphQL
server.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(req => ({
    schema,
    context: {
      companyId: req.companyId,
    },
  })),
);

// -- GraphiQL
server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

server.listen(PORT, 'localhost', () => {
  debug(`💉  Healthcheck server running at http://localhost:${PORT}`);
});
