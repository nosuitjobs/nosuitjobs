'use strict'

exports.up = function (r, connection) {
  return r
    .tableCreate('companies')
    .run(connection)
    .catch(err => {
      console.log(err);
      throw err;
    });
}

exports.down = function (r, connection) {
  return r
    .tableDrop('companies')
    .run(connection)
    .catch(err => {
      console.log(err);
      throw err;
    });
}
