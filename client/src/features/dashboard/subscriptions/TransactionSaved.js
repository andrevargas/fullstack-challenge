// @flow
import { requestSubscription, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import environment from '@app/createRelayEnvironment';

const subscription = graphql`
  subscription TransactionSavedSubscription {
    TransactionSaved {
      transactionEdge {
        node {
          id
          value
          description
          type
          date
        }
      }
    }
  }
`;

export default function TransactionSavedSubscription() {
  requestSubscription(environment, {
    subscription,
    updater(store) {
      const rootField = store.getRootField('TransactionSaved');
      const transaction = rootField.getLinkedRecord('transactionEdge');

      const transactions = ConnectionHandler.getConnection(
        store.getRoot(),
        'TransactionList_transactions'
      );

      const edge = ConnectionHandler.createEdge(
        store,
        transactions,
        transaction,
        'Transaction'
      );

      ConnectionHandler.insertEdgeBefore(transactions, edge);
    },
  });
}
