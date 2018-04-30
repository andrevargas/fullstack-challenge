// @flow
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const SERVER_URL = 'localhost:5000';
const HTTP_ENDPOINT = `http://${SERVER_URL}/graphql`;
const WEBSOCKET_ENDPOINT = `ws://${SERVER_URL}/subscriptions`;

function fetchQuery(operation, variables) {
  return fetch(HTTP_ENDPOINT, {
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

function setupSubscription(config, variables, cacheConfig, observer) {
  const query = config.text;
  const client = new SubscriptionClient(WEBSOCKET_ENDPOINT, {
    reconnect: true,
  });

  client.subscribe({ query, variables }, (error, result) => {
    observer.onNext({ data: result });
  });
}

const network = Network.create(fetchQuery, setupSubscription);

const source = new RecordSource();
const store = new Store(source);

const environment = new Environment({
  network,
  store,
});

export default environment;
