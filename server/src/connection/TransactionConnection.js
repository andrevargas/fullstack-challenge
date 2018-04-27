// @flow
import { GraphQLInt } from 'graphql';
import { connectionDefinitions } from 'graphql-relay';

import TransactionType from '../type/TransactionType';

export default connectionDefinitions({
  name: 'Transaction',
  nodeType: TransactionType,
  connectionFields: {
    count: {
      type: GraphQLInt,
    },
  },
});
