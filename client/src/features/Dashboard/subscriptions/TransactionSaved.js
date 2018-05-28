// @flow
import { requestSubscription, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import environment from '@app/createRelayEnvironment';

const subscription = graphql`
  subscription TransactionSavedSubscription {
    TransactionSaved {
      dashboard {
        balance
        expenses
      }
      transaction {
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
      const transaction = store
        .getRootField('TransactionSaved')
        .getLinkedRecord('transaction')
        .getLinkedRecord('node');

      const transactions = ConnectionHandler.getConnection(
        store.getRoot(),
        'TransactionList_transactions'
      );

      const edge = ConnectionHandler.createEdge(
        store,
        transactions,
        transaction,
        'TransactionEdge'
      );

      ConnectionHandler.insertEdgeBefore(transactions, edge);
    },
  });
}
