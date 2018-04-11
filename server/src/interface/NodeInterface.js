// @flow
/* eslint consistent-return: off */

import { nodeDefinitions, fromGlobalId } from 'graphql-relay';

import User from '../loader/UserLoader';
import { UserLoader } from '../loader';

import UserType from '../type/UserType';

const { nodeField, nodeInterface } = nodeDefinitions(
  // A method that maps from a global id to an object
  async (globalId, context) => {
    const { id, type } = fromGlobalId(globalId);
    if (type === 'User') {
      return UserLoader.load(context, id);
    }
  },
  // A method that maps from an object to a type
  obj => {
    if (obj instanceof User) {
      return UserType;
    }
  },
);

export const NodeInterface = nodeInterface;
export const NodeField = nodeField;
