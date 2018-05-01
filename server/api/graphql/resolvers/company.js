import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Company } from '../../db/models';

export default {
  Query: {
    company: (parent, args, context) => Company.findById(args.id),
    companies: (parent, args, context) => Company.findAll.load(),
  },
  Mutation: {
    login: async (parent, args, context) => {
      const company = await Company.find({ email: args.email });
      const hasValidPassord = await bcrypt.compare(company.password, args.password);

      if (!company || !hasValidPassord) {
        throw new Error('TODO: Handle incorrect password');
      }

      const token = jwt.sign(company.id, process.env.SECRET);

      return { company, token };
    },
    register: async (parent, args, context) => {
      const password = await bcrypt.hash(args.password, 12);
      const company = await Company.findOrCreate({ ...args, password });

      const token = jwt.sign(company.id, process.env.SECRET);

      return { company, token };
    },
    updateCompany: (parent, args, context) => Company.update(args),
  },
};
