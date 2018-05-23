// @flow
import React from 'react';
import { View } from 'react-native';
import DashboardQuery from './queries/Dashboard';
import TransactionSavedSubscription from './subscriptions/TransactionSaved';

class Dashboard extends React.Component {
  componentDidMount() {
    TransactionSavedSubscription();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <DashboardQuery />
      </View>
    );
  }
}

export default Dashboard;
