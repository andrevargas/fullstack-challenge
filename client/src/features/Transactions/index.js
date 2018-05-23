import React from 'react';
import { View } from 'react-native';
import TransactionListQuery from './queries/TransactionList';

class Transactions extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TransactionListQuery />
      </View>
    );
  }
}

export default Transactions;
