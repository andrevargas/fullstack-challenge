// @flow
import React from 'react';
import styled from 'styled-components/native';
import BalanceInfo from './BalanceInfo';
import TransactionList from './TransactionList';

const data = [
  {
    _id: '1',
    description: 'Test #1',
    value: 10,
    type: 'EXPENSE',
    date: new Date().toLocaleDateString(),
  },
  {
    _id: '2',
    description: 'Test #2',
    value: 10,
    type: 'REVENUE',
    date: new Date().toLocaleDateString(),
  },
  {
    _id: '3',
    description: 'Test #3',
    value: 10,
    type: 'EXPENSE',
    date: new Date().toLocaleDateString(),
  },
];

const Dashboard = () => (
  <Wrapper>
    <BalanceInfo balance={999.99} />
    <TransactionList data={data} />
  </Wrapper>
);

const Wrapper = styled.View`
  flex: 1;
`;

export default Dashboard;
