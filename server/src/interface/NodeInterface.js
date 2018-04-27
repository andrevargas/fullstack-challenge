// @flow
/* eslint consistent-return: off */

import { nodeDefinitions, fromGlobalId } from 'graphql-relay';

import User from '../loader/UserLoader';
import UserType from '../type/UserType';

import Transaction from '../loader/TransactionLoader';
import TransactionType from '../type/TransactionType';

import { UserLoader, TransactionLoader } from '../loader';

const { nodeField, nodeInterface } = nodeDefinitions(
  async (globalId, context) => {
    const { id, type } = fromGlobalId(globalId);
    if (type === 'User') {
      return UserLoader.load(context, id);
    }
    if (type === 'Transaction') {
      return TransactionLoader.load(context, id);
    }
  },
  obj => {
    if (obj instanceof User) {
      return UserType;
    }
    if (obj instanceof Transaction) {
      return TransactionType;
    }
  },
);

export const NodeInterface = nodeInterface;
export const NodeField = nodeField;
