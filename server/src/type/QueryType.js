// @flow

import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull, GraphQLID } from 'graphql';
import { connectionArgs, fromGlobalId } from 'graphql-relay';

import DashboardType from './DashboardType';

import UserType from './UserType';
import UserConnection from '../connection/UserConnection';

import TransactionType from '../type/TransactionType';
import TransactionConnection from '../connection/TransactionConnection';

import { NodeField } from '../interface/NodeInterface';
import { UserLoader, TransactionLoader } from '../loader';

import WalletType from '../type/WalletType';
import { Wallet } from '../model';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    node: NodeField,
    me: {
      type: UserType,
      resolve: (root, args, context) => (context.user ? UserLoader.load(context, context.user._id) : null),
    },
    user: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (obj, args, context) => {
        const { id } = fromGlobalId(args.id);
        return UserLoader.load(context, id);
      },
    },
    users: {
      type: UserConnection.connectionType,
      args: {
        ...connectionArgs,
        search: {
          type: GraphQLString,
        },
      },
      resolve: (obj, args, context) => UserLoader.loadUsers(context, args),
    },
    dashboard: {
      type: DashboardType,
      resolve: async () => {
        const total = await Wallet.aggregate([
          { $group: { _id: null, balance: { $sum: '$balance' } } },
          { $project: { _id: 0 } },
          { $limit: 1 },
        ]);

        return total[0];
      },
    },
    wallet: {
      type: WalletType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: async (rootValue, { id }) => Wallet.findById(id),
    },
    wallets: {
      type: new GraphQLList(WalletType),
      resolve: async () => Wallet.find({}),
    },
    transaction: {
      type: TransactionType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: (rootValue, args, context) => {
        const { id } = fromGlobalId(args.id);
        return TransactionLoader.load(context, id);
      },
    },
    transactions: {
      type: TransactionConnection.connectionType,
      args: connectionArgs,
      resolve: (rootValue, args, context) => TransactionLoader.loadTransactions(context, args),
    },
  }),
});
