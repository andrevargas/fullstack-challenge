// @flow
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Dashboard from '@features/Dashboard';
import CreateTransaction from '@features/CreateTransaction';
import Icon from '@components/Icon';

const icons = {
  Dashboard: 'bar-graph',
  CreateTransaction: 'squared-plus',
  TransactionList: 'credit',
  User: 'user',
};

export default createBottomTabNavigator(
  {
    Dashboard,
    CreateTransaction,
    TransactionList: { screen: () => null },
    User: { screen: () => null },
  },
  {
    initialRouteName: 'Dashboard',
    tabBarOptions: {
      showLabel: false,
      style: { borderTopWidth: 0, elevation: 10 },
    },
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state;
        return <Icon name={icons[routeName]} size={25} />;
      },
    }),
  }
);
