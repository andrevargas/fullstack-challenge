// @flow
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import Dashboard from '@features/Dashboard';
import Transactions from '@features/Transactions';
import CreateTransaction from '@features/CreateTransaction';

import Icon from '@components/Icon';
import { colors } from '@app/constants/styles';

function getIcon(routeName, focused) {
  switch (routeName) {
    case 'Dashboard':
      return `bar-graph${focused ? '-active' : ''}`;
    case 'CreateTransaction':
      return `squared-plus${focused ? '-active' : ''}`;
    case 'Transactions':
      return `list${focused ? '-active' : ''}`;
    default:
      return null;
  }
}

export default createBottomTabNavigator(
  {
    Dashboard,
    CreateTransaction,
    Transactions,
  },
  {
    initialRouteName: 'Dashboard',
    order: ['Dashboard', 'CreateTransaction', 'Transactions'],
    tabBarOptions: {
      showLabel: false,
      style: {
        borderTopWidth: 0,
        elevation: 10,
        backgroundColor: colors.white,
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
