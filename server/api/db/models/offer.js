import db from '../index';

const TABLE = 'offers';

const findById = id => (
  db
    .table(TABLE)
    .get(id)
    .run()
    .then(offer => {
      if (!offer || offer.deletedAt) return null;

      return offer;
    })
)

const findAll = () => (
  db
    .table(TABLE)
    .run()
)

export default {
  findById,
  findAll,
};
