import db from '../index';

const TABLE = 'companies';

const findById = id => (
  db
    .table(TABLE)
    .get(id)
    .run()
    .then(company => {
      if (!company || company.deletedAt) return null;

      return company;
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
