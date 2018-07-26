// @flow
import React, { Component } from 'react';
import styled from 'styled-components/native';
import List from '@components/List';
import { colors } from '@app/constants/styles';
import { types } from '@app/constants/app';

class TransactionList extends Component {
  handleEndReached = () => {
    const { relay } = this.props;

    if (relay.hasMore() && !relay.isLoading()) {
      relay.loadMore(10);
    }
  };

  renderItem({ item }) {
    const { node } = item;
    return (
      <List.Item
        title={node.description}
        subtitle={new Date(node.date).toLocaleDateString()}
        renderRight={() => (
          <Value type={node.type}>
            {node.type === types.EXPENSE ? '\u2212' : '\u002B'}
            &nbsp; ${node.value.toFixed(2)}
          </Value>
        )}
      />
    );
  }

  render() {
    const { transactions } = this.props.query;
    return (
      <Wrapper>
        <List
          data={transactions.edges}
          keyExtractor={item => item.node.id}
          renderItem={this.renderItem}
          onEndReached={this.handleEndReached}
          onEndReachedThreshold={0.5}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  flex: 2;
  background-color: ${colors.white.toString()};
`;

const Value = styled.Text`
  color: ${props =>
    props.type === types.EXPENSE
      ? colors.coral.toString()
      : colors.blue.toString()};
  font-size: 16px;
  text-align: right;
  font-weight: 500;
`;

export default TransactionList;
