// @flow
import React from 'react';
import Container from '@components/Container';
import DashboardQuery from './queries/Dashboard';
import TransactionSavedSubscription from './subscriptions/TransactionSaved';

class Dashboard extends React.Component {
  componentDidMount() {
    TransactionSavedSubscription();
  }

  render() {
    return (
      <Container>
        <DashboardQuery />
      </Container>
    );
  }
}

export default Dashboard;
