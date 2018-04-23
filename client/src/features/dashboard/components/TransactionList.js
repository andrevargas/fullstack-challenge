// @flow
import React from 'react';
import styled from 'styled-components/native';

const TransactionList = () => (
  <Wrapper>
    <Header>Transaction History</Header>
  </Wrapper>
);

const Wrapper = styled.View`
  width: 100%;
  height: 60%;
  background-color: #f5f5f8;
`;

const Header = styled.Text`
  width: 100%;
  padding: 10px;
  color: hsl(0, 0%, 60%);
  background-color: hsl(0, 0%, 90%);
  font-size: 15px;
  margin-top: 110px;
`;

export default TransactionList;
