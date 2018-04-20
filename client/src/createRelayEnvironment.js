// @flow
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const GRAPHQL_SERVER_URL = 'http://localhost:5000/graphql';

function fetchQuery(operation, variables) {
  return fetch(GRAPHQL_SERVER_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => response.json());
}

const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

const environment = new Environment({
  network,
  store,
});

export default environment;
