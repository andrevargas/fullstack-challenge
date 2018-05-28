// @flow
import React from 'react';
import { QueryRenderer, createFragmentContainer, graphql } from 'react-relay';
import environment from '@app/createRelayEnvironment';
import BalanceInfo from '../components/BalanceInfo';

const DashboardFragmentContainer = createFragmentContainer(
  BalanceInfo,
  graphql`
    fragment Dashboard_query on Query {
      dashboard {
        balance
        expenses
      }
    }
  `
);

const DashboardQueryRenderer = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query DashboardQuery {
        ...Dashboard_query
      }
    `}
    render={({ props }) => {
      if (props) {
        return <DashboardFragmentContainer query={props} />;
      } else {
        return null;
      }
    }}
  />
);

export default DashboardQueryRenderer;
