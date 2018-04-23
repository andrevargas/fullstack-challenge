// @flow
import React from 'react';
import styled from 'styled-components/native';
import BalanceInfo from './BalanceInfo';
import TransactionList from './TransactionList';
import WalletCard from './WalletCard';

const Dashboard = () => (
  <Wrapper>
    <BalanceInfo balance={999.99} />
    <WalletCard />
    <TransactionList />
  </Wrapper>
);

const Wrapper = styled.View`
  flex: 1;
`;

export default Dashboard;
