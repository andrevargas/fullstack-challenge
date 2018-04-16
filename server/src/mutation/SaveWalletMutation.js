// @flow

import { GraphQLString, GraphQLFloat, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { Wallet } from '../model';
import WalletType from '../type/WalletType';

export default mutationWithClientMutationId({
  name: 'SaveWallet',
  inputFields: {
    _id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    },
    balance: {
      type: GraphQLNonNull(GraphQLFloat),
    },
  },
  mutateAndGetPayload: async ({ _id, name, description, balance }) => {
    try {
      let wallet = await Wallet.findById(_id);

      if (wallet) {
        wallet.name = name;
        wallet.description = description;
        wallet.balance = balance;
      } else {
        wallet = new Wallet({
          name,
          description,
          balance,
        });
      }

      const newWallet = await wallet.save();

      return {
        newWallet,
        error: null,
      };
    } catch (error) {
      return {
        newWallet: null,
        error: 'SAVE_WALLET_FAIL',
      };
    }
  },
  outputFields: {
    newWallet: {
      type: WalletType,
      resolve: ({ newWallet }) => newWallet,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});
