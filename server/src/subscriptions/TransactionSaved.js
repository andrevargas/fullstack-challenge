import { GraphQLObjectType } from 'graphql';
import { offsetToCursor } from 'graphql-relay';
import TransactionConnection from '../connection/TransactionConnection';

import pubSub, { EVENTS } from '../pubSub';

const TransactionSavedPayloadType = new GraphQLObjectType({
  name: 'TransactionSavedPayload',
  fields: () => ({
    transactionEdge: {
      type: TransactionConnection.edgeType,
      resolve: ({ transaction }) => ({
        cursor: offsetToCursor(transaction.id),
        node: transaction,
      }),
    },
  }),
});

const transactionSaved = {
  type: TransactionSavedPayloadType,
  subscribe: () => pubSub.asyncIterator(EVENTS.TRANSACTION.SAVED),
};

export default transactionSaved;
