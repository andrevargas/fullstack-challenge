// @flow

import { GraphQLString, GraphQLFloat, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { Transaction } from '../model';
import TransactionType, { TransactionTypeEnum } from '../type/TransactionType';
import pubSub, { EVENTS } from '../pubSub';

export default mutationWithClientMutationId({
  name: 'SaveTransaction',
  inputFields: {
    _id: {
      type: GraphQLString,
    },
    value: {
      type: GraphQLNonNull(GraphQLFloat),
    },
    description: {
      type: GraphQLNonNull(GraphQLString),
    },
    type: {
      type: GraphQLNonNull(TransactionTypeEnum),
    },
    date: {
      type: GraphQLNonNull(GraphQLString),
    },
    walletId: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ _id, value, description, type, date, walletId }) => {
    try {
      let transaction = await Transaction.findById(_id);

      if (transaction) {
        transaction.value = value;
        transaction.description = description;
        transaction.type = type;
        transaction.date = date;
        transaction.wallet = walletId;
      } else {
        transaction = new Transaction({
          value,
          description,
          type,
          date,
          wallet: walletId,
        });
      }

      const newTransaction = await transaction.save();
      await newTransaction.populate('wallet').execPopulate();

      await pubSub.publish(EVENTS.TRANSACTION.SAVED, { TransactionSaved: { transaction } });

      return {
        newTransaction,
        error: null,
      };
    } catch (error) {
      return {
        newTransaction: null,
        error: 'SAVE_TRANSACTION_FAIL',
      };
    }
  },
  outputFields: {
    newTransaction: {
      type: TransactionType,
      resolve: ({ newTransaction }) => newTransaction,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});
