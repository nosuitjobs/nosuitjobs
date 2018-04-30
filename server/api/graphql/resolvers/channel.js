import { Offer } from '../../db/models';

export default {
  Query: {
    offer: (parent, args, context) => Offer.findById(args.id),
    offers: (parent, args, context) => Offer.findAll(),
  }
};
