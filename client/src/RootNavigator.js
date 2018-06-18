// @flow
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CustomTabBar from '@components/CustomTabBar';

import Dashboard from '@features/Dashboard';
import Transactions from '@features/Transactions';
import CreateTransaction from '@features/CreateTransaction';

import Icon from '@components/Icon';
import { colors } from '@app/constants/styles';

export const Screens = {
  DASHBOARD: 'dashboard',
  CREATE_TRANSACTION: 'create_transaction',
  TRANSACTIONS: 'transactions',
};

function getIcon(routeName, focused) {
  switch (routeName) {
    case Screens.DASHBOARD:
      return `bar-graph${focused ? '-active' : ''}`;
    case Screens.CREATE_TRANSACTION:
      return `squared-plus${focused ? '-active' : ''}`;
    case Screens.TRANSACTIONS:
      return `list${focused ? '-active' : ''}`;
    default:
      return null;
  }
}

export default createBottomTabNavigator(
  {
    [Screens.DASHBOARD]: {
      screen: Dashboard,
    },
    [Screens.CREATE_TRANSACTION]: {
      screen: CreateTransaction,
    },
    [Screens.TRANSACTIONS]: {
      screen: Transactions,
    },
  },
  {
    initialRouteName: Screens.DASHBOARD,
    tabBarComponent: CustomTabBar,
    order: [
      Screens.DASHBOARD,
      Screens.CREATE_TRANSACTION,
      Screens.TRANSACTIONS,
    ],
    tabBarOptions: {
      showLabel: false,
      style: {
        borderTopWidth: 0,
        elevation: 10,
        backgroundColor: colors.white.toString(),
      },
    },
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        return <Icon name={getIcon(routeName, focused)} size={30} />;
      },
    }),
  }
);
