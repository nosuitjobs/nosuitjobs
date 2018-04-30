import DataLoader from 'dataloader'
import db from '../index';

const TABLE = 'companies';

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
  findById: findById,
  findByIds: new DataLoader(findByIds),
  findAll: new DataLoader(findAll),
};
