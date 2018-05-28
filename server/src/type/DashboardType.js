import { GraphQLObjectType, GraphQLFloat } from 'graphql';
import { globalIdField } from 'graphql-relay';
import { NodeInterface } from '../interface/NodeInterface';

export default new GraphQLObjectType({
  name: 'Dashboard',
  description: 'Dashboard information',
  fields: () => ({
    id: globalIdField('Dashboard'),
    balance: {
      type: GraphQLFloat,
      resolve: dashboard => dashboard.balance,
    },
    expenses: {
      type: GraphQLFloat,
      resolve: dashboard => dashboard.expenses,
    },
  }),
  interfaces: () => [NodeInterface],
});
