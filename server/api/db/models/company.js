import DataLoader from 'dataloader'
import db from '../index';

const TABLE = 'companies';

const find = where => (
  db
    .table(TABLE)
    .filter(where)
    .limit(1)
    .run()
    .then(companies => {
      return companies[0];
    })
)

const findById = ids => (
  db
    .table(TABLE)
    .get(id)
    .run()
    .then(company => {
      if (!company || company.deletedAt) return null;

      return company;
    })
)

const findByIds = ids => (
  db
    .table(TABLE)
    .getAll(...ids)
    .run()
)

const findAll = () => (
  db
    .table(TABLE)
    .run()
)

export default {
  find,
  findById,
  findByIds: new DataLoader(findByIds),
  findAll: new DataLoader(findAll),
};
