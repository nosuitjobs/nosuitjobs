import r from 'rethinkdbdash';

const DEFAULT_CONFIG = {
  db: 'nosuitjobs',
  max: 100, // Maximum number of connections, default is 1000
  buffer: 10, // Minimum number of connections open at any given moment, default is 50
  timeoutGb: 60 * 1000, // How long should an unused connection stick around, default is an hour, this is a minute
};

const db = r(DEFAULT_CONFIG);

export default db;
