// @flow
import React from 'react';
import { View } from 'react-native';
import DashboardQuery from './queries/Dashboard';
import TransactionListQuery from './queries/TransactionList';

const Dashboard = () => (
  <View style={{ flex: 1 }}>
    <DashboardQuery />
    <TransactionListQuery />
  </View>
);

export default Dashboard;
