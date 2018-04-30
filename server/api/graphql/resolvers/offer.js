import { Offer, Company } from '../../db/models';

export default {
  Query: {
    offer: (parent, args, context) => Offer.findById(args.id),
    offers: (parent, args, context) => Offer.findAll(),
  },
  Offer: {
    company: (parent, args, context) => Company.findByIds.load(parent.companyId),
  },
};
