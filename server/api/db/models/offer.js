import db from '../index';

const findById = id => (
  db
    .table('offers')
    .get(id)
    .run()
    .then(offer => {
      if (!offer || offer.deletedAt) return null;

      return offer;
    })
)

const findAll = () => (
  db
    .table('offers')
    .run()
)

export default {
  findById,
  findAll,
};
