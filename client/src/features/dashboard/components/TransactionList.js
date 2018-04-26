// @flow
import React, { Component } from 'react';
import styled from 'styled-components/native';
import List from '@components/List';
import { colors } from '@app/constants/styles';

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

class TransactionList extends Component<Props> {
  renderItem({ item }) {
    return (
      <List.Item
        title={item.description}
        subtitle={item.date}
        renderRight={() => (
          <Value type={item.type}>
            {item.type === 'EXPENSE' ? '\u2212' : '\u002B'}
            &nbsp; ${item.value.toFixed(2)}
          </Value>
        )}
      />
    );
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <Title>Transaction History</Title>
        </Header>
        <List
          data={this.props.data}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  flex: 2;
  background-color: ${colors.ghostwhite};
`;

const Header = styled.View`
  width: 100%;
  padding: 10px;
`;

const Title = styled.Text`
  color: hsl(233, 10%, 60%);
  font-size: 15px;
`;

const Value = styled.Text`
  color: ${props => (props.type === 'EXPENSE' ? colors.tomato : colors.blue)};
  font-size: 16px;
  text-align: right;
  font-weight: 500;
`;

export default TransactionList;
