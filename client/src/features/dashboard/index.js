// @flow
import React from 'react';
import { View } from 'react-native';
import BalanceInfo from './components/BalanceInfo';
import TransactionListQuery from './queries/TransactionList';

const Dashboard = () => (
  <View style={{ flex: 1 }}>
    <BalanceInfo balance={999.99} />
    <TransactionListQuery />
  </View>
);

export default Dashboard;
