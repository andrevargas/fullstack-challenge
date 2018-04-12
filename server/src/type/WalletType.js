// @flow

import { GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';
import { globalIdField } from 'graphql-relay';
import { NodeInterface } from '../interface/NodeInterface';

export default new GraphQLObjectType({
  name: 'Wallet',
  description: 'Wallet data',
  fields: () => ({
    id: globalIdField('Wallet'),
    _id: {
      type: GraphQLString,
      resolve: wallet => wallet._id,
    },
    name: {
      type: GraphQLString,
      resolve: wallet => wallet.name,
    },
    description: {
      type: GraphQLString,
      resolve: wallet => wallet.description,
    },
    balance: {
      type: GraphQLFloat,
      resolve: wallet => wallet.balance,
    },
  }),
  interfaces: () => [NodeInterface],
});
