// @flow
import React from 'react';
import { QueryRenderer, createPaginationContainer, graphql } from 'react-relay';
import environment from '@app/createRelayEnvironment';
import TransactionList from '../components/TransactionList';

const TransactionListPaginationContainer = createPaginationContainer(
  TransactionList,
  {
    query: graphql`
      fragment TransactionList_query on Query {
        transactions(first: $count, after: $cursor)
          @connection(key: "TransactionList_transactions") {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              value
              description
              type
              date
            }
          }
        }
      }
    `,
  },
  {
    direction: 'forward',
    variables: { cursor: null },
    getConnectionFromProps(props) {
      return props.query && props.query.transactions;
    },
    getFragmentVariables(prevVars, totalCount) {
      return { ...prevVars, count: totalCount };
    },
    getVariables(props, { count, cursor }) {
      return { count, cursor };
    },
    query: graphql`
      query TransactionListPaginationQuery($count: Int!, $cursor: String) {
        ...TransactionList_query
      }
    `,
  }
);

const TransactionListQueryRenderer = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query TransactionListQuery($count: Int!, $cursor: String) {
        ...TransactionList_query
      }
    `}
    variables={{ cursor: null, count: 10 }}
    render={({ props }) => {
      if (props) {
        return <TransactionListPaginationContainer query={props} />;
      } else {
        return null;
      }
    }}
  />
);

export default TransactionListQueryRenderer;
