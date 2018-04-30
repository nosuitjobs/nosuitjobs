import jwt from 'jsonwebtoken';
import { Company } from '../../db/models';

const SECRET_KEY = "RubenEsUnMariquita";

export default {
  Query: {
    company: (parent, args, context) => Company.findById(args.id),
    companies: (parent, args, context) => Company.findAll(),
  },
  Mutation: {
    login: async (parent, args, context) => {
      const company = await Company.find(args);
      console.log(company);
      token = jwt.sign(company.id, SECRET_KEY);
      console.log(token);
      return { company, token };
    },
  },
};
