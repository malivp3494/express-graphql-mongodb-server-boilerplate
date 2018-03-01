import UserResolver from './user-resolver.js';
import GraphQLDate from 'graphql-date';

export default {
  Date: GraphQLDate,
  Query: {
    getUsers: UserResolver.getUsers
  },
  Mutation: {
    addUser: UserResolver.addUser
  }
};
