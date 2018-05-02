import { GraphQLObjectType } from 'graphql';
import { offsetToCursor } from 'graphql-relay';
import DashboardType from '../type/DashboardType';
import TransactionConnection from '../connection/TransactionConnection';

import pubSub, { EVENTS } from '../pubSub';

const TransactionSavedPayloadType = new GraphQLObjectType({
  name: 'TransactionSavedPayload',
  fields: () => ({
    transaction: {
      type: TransactionConnection.edgeType,
      resolve: ({ transaction }) => ({
        cursor: offsetToCursor(transaction.id),
        node: transaction,
      }),
    },
    dashboard: {
      type: DashboardType,
      resolve: ({ dashboard }) => dashboard,
    },
  }),
});

const transactionSaved = {
  type: TransactionSavedPayloadType,
  subscribe: () => pubSub.asyncIterator(EVENTS.TRANSACTION.SAVED),
};

export default transactionSaved;
