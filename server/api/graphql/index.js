import path from 'path';
import GraphQLJSON from 'graphql-type-json';
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';

export const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')));
export const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

resolvers.JSON = GraphQLJSON;

export default { typeDefs, resolvers };
