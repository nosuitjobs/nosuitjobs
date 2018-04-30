import { Company } from '../../db/models';

export default {
  Query: {
    company: (parent, args, context) => Company.findById(args.id),
    companies: (parent, args, context) => Company.findAll(),
  }
};
