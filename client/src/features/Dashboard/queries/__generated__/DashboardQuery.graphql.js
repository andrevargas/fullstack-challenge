/**
 * @flow
 * @relayHash 3fb4ec5e936288bf5b1dc2b0fafb1779
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Dashboard_query$ref = any;
export type DashboardQueryVariables = {| |};
export type DashboardQueryResponse = {|
  +$fragmentRefs: Dashboard_query$ref,
|};
*/


/*
query DashboardQuery {
  ...Dashboard_query
}

fragment Dashboard_query on Query {
  dashboard {
    balance
    expenses
    id
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "DashboardQuery",
  "id": null,
  "text": "query DashboardQuery {\n  ...Dashboard_query\n}\n\nfragment Dashboard_query on Query {\n  dashboard {\n    balance\n    expenses\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DashboardQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Dashboard_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DashboardQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "dashboard",
        "storageKey": null,
        "args": null,
        "concreteType": "Dashboard",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "balance",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "expenses",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
(node/*: any*/).hash = '2344155df52bff3a612a8dfa1fcda17d';
module.exports = node;
