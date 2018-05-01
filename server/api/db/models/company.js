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
)

const findByIds = ids => (
  db
    .table(TABLE)
    .getAll(...ids)
    .run()
)

const findOrCreate = args => {
  const company = find({ email: args.email });

  if (company) return company;

  return db
    .table(TABLE)
    .insert(args, { returnChanges: true })
    .run()
    .then(result => result.changes[0].new_val)
}

const update = ({ id, ...data }) => (
  db
    .table(TABLE)
    .get(id)
    .update(data, { returnChanges: true })
    .run()
    .then(result => result.changes[0].new_val)
)

export default {
  find,
  findById,
  findByIds: new DataLoader(findByIds),
  findOrCreate,
  update,
};
