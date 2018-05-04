// @flow
import React, { Component } from 'react';
import styled from 'styled-components/native';
import List from '@components/List';
import TransactionSavedSubscription from '../subscriptions/TransactionSaved';
import { colors } from '@app/constants/styles';
import { types } from '@app/constants/app';

class TransactionList extends Component {
  componentDidMount() {
    TransactionSavedSubscription();
  }

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
    const { isLoading } = this.props.relay;
    return (
      <Wrapper>
        <Header>
          <Title>Transaction History</Title>
        </Header>
        <List
          data={transactions.edges}
          keyExtractor={item => item.node.id}
          renderItem={this.renderItem}
          onEndReached={this.handleEndReached}
          onEndReachedThreshold={0.5}
          ListFooterComponent={<Footer animating={isLoading()} size="small" />}
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
  color: ${props =>
    props.type === types.EXPENSE ? colors.tomato : colors.blue};
  font-size: 16px;
  text-align: right;
  font-weight: 500;
`;

const Footer = styled.ActivityIndicator`
  width: 100%;
  height: 50px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

export default TransactionList;
