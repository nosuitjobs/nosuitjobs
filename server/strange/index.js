import express from 'express';
import Renderer from './renderer';

const debug = require('debug')('strange');

debug('\n👨🏻‍⚕️  Dr.Strange, the rendering worker, is starting...');
debug('Logging with debug enabled!');
debug('');

const PORT = process.env.PORT || 3001;

const server = express();

// -- Middlewares
// server.use(express.static('public'));

// -- React SSR
server.use(Renderer);

server.listen(PORT, 'localhost', () => {
  debug(`💉  Healthcheck server running at http://localhost:${PORT}`);
});
