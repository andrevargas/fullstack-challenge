// @flow
import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import ListItem from '@components/ListItem';

const data = [
  {
    _id: '1',
    description: 'Test #1',
    value: 10,
    type: 'EXPENSE',
    date: new Date().toISOString(),
  },
  {
    _id: '2',
    description: 'Test #2',
    value: 10,
    type: 'REVENUE',
    date: new Date().toISOString(),
  },
  {
    _id: '3',
    description: 'Test #3',
    value: 10,
    type: 'EXPENSE',
    date: new Date().toISOString(),
  },
];

const TransactionList = () => (
  <Wrapper>
    <Header>
      <Title>Transaction History</Title>
    </Header>
    <FlatList
      data={data}
      keyExtractor={item => item._id}
      renderItem={({ item }) => (
        <ListItem title={item.description} detail={item.date} />
      )}
    />
  </Wrapper>
);

const Wrapper = styled.View`
  width: 100%;
  height: 60%;
  background-color: #f5f5f8;
`;

const Header = styled.View`
  width: 100%;
  padding: 10px;
  background-color: hsl(233, 21%, 90%);
  margin-top: 120px;
`;

const Title = styled.Text`
  color: hsl(233, 10%, 60%);
  font-size: 15px;
`;

export default TransactionList;
