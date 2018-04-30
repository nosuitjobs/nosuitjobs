import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Company } from '../../db/models';

const SECRET_KEY = 'MikelEsUnMariquita';

export default {
  Query: {
    company: (parent, args, context) => Company.findById(args.id),
    companies: (parent, args, context) => Company.findAll(),
  },
  Mutation: {
    login: async (parent, args, context) => {
      const company = await Company.find({ email: args.email });
      const hasValidPassord = await bcrypt.compare(company.password, args.password);

      if (!company || !hasValidPassord) {
        throw new Error('TODO: Handle incorrect password');
      }

      const token = jwt.sign(company.id, SECRET_KEY);

      return { company, token };
    },
    register: async (parent, args, context) => {
      const password = await bcrypt.hash(args.password, 12);
      const company = await Company.create({ ...args, password });

      // TODO: Handle errors

      const token = jwt.sign(company.id, SECRET_KEY);

      return { company, token };
    },
  },
};
