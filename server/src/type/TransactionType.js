// @flow

import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLEnumType } from 'graphql';
import { globalIdField } from 'graphql-relay';
import { NodeInterface } from '../interface/NodeInterface';

import WalletType from './WalletType';

export const TransactionTypeEnum = new GraphQLEnumType({
  name: 'TransactionType',
  values: {
    EXPENSE: { value: 'expense' },
    REVENUE: { value: 'revenue' },
  },
});

export default new GraphQLObjectType({
  name: 'Transaction',
  description: 'Transaction data',
  fields: () => ({
    id: globalIdField('Transaction'),
    _id: {
      type: GraphQLString,
      resolve: transaction => transaction.id,
    },
    value: {
      type: GraphQLFloat,
      resolve: transaction => transaction.value,
    },
    description: {
      type: GraphQLString,
      resolve: transaction => transaction.description,
    },
    type: {
      type: TransactionTypeEnum,
      resolve: transaction => transaction.type,
    },
    date: {
      type: GraphQLString,
      resolve: transaction => transaction.date,
    },
    wallet: {
      type: WalletType,
      resolve: transaction => transaction.wallet,
    },
  }),
  interfaces: () => [NodeInterface],
});
