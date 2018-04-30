import { PubSub } from 'graphql-subscriptions';

export const EVENTS = {
  USER: {
    ADDED: 'USER_ADDED',
  },
  TRANSACTION: {
    SAVED: 'TRANSACTION_SAVED',
  },
};

export default new PubSub();
