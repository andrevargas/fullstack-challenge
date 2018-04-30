import { GraphQLObjectType } from 'graphql';
import UserAdded from '../subscriptions/UserAdded';
import TransactionSaved from '../subscriptions/TransactionSaved';

export default new GraphQLObjectType({
  name: 'Subscription',
  fields: {
    UserAdded,
    TransactionSaved,
  },
});
