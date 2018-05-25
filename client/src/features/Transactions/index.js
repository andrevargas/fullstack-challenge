import React from 'react';
import Container from '@components/Container';
import TransactionListQuery from './queries/TransactionList';

class Transactions extends React.Component {
  render() {
    return (
      <Container>
        <TransactionListQuery />
      </Container>
    );
  }
}

export default Transactions;
