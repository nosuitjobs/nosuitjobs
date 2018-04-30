'use strict'

exports.up = function (r, connection) {
  return r
    .tableCreate('offers')
    .run(connection)
    .catch(err => {
      console.log(err);
      throw err;
    });
}

exports.down = function (r, connection) {
  return r
    .tableDrop('offers')
    .run(connection)
    .catch(err => {
      console.log(err);
      throw err;
    });
}
