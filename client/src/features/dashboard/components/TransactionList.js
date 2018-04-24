// @flow
import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import ListItem from '@components/ListItem';

type TransactionRecord = {
  _id: string,
  description: string,
  value: string,
  type: 'EXPENSE' | 'REVENUE',
  date: string,
};

type Props = {
  data: Array<TransactionRecord>,
};

const TransactionList = ({ data }: Props) => (
  <Wrapper>
    <Header>
      <Title>Transaction History</Title>
    </Header>
    <FlatList
      data={data}
      keyExtractor={item => item._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => (
        <ListItem
          title={item.description}
          subtitle={item.date}
          renderRight={() => (
            <Value type={item.type}>
              {item.type === 'EXPENSE' ? '\u2212' : '\u002B'} ${item.value.toFixed(
                2
              )}
            </Value>
          )}
        />
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
`;

const Title = styled.Text`
  color: hsl(233, 10%, 60%);
  font-size: 15px;
`;

const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: hsl(233, 21%, 93%);
`;

const Value = styled.Text`
  color: ${props => (props.type === 'EXPENSE' ? '#ff6350' : '#4AA2FB')};
  font-size: 16px;
  text-align: right;
  font-weight: 500;
`;

export default TransactionList;
