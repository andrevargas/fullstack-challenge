// @flow
import React from 'react';
import Container from '@components/Container';
import Header from '@components/Header';
import DashboardQuery from './queries/Dashboard';
import TransactionSavedSubscription from './subscriptions/TransactionSaved';

class Dashboard extends React.Component {
  componentDidMount() {
    TransactionSavedSubscription();
  }

  render() {
    return (
      <Container>
        <Header />
        <DashboardQuery />
      </Container>
    );
  }
}

export default Dashboard;
