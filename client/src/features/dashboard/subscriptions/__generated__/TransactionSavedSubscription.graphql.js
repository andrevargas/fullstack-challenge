/**
 * @flow
 * @relayHash d198df632dbd55cb0a15befc23fa9178
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TransactionTypeEnum = ('EXPENSE' | 'REVENUE' | '%future added value');
export type TransactionSavedSubscriptionVariables = {| |};
export type TransactionSavedSubscriptionResponse = {|
  +TransactionSaved: ?{|
    +dashboard: ?{|
      +balance: ?number,
    |},
    +transaction: ?{|
      +node: ?{|
        +id: string,
        +value: ?number,
        +description: ?string,
        +type: ?TransactionTypeEnum,
        +date: ?string,
      |},
    |},
  |},
|};
*/


/*
subscription TransactionSavedSubscription {
  TransactionSaved {
    dashboard {
      balance
      id
    }
    transaction {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "balance",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "transaction",
  "storageKey": null,
  "args": null,
  "concreteType": "TransactionEdge",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "node",
      "storageKey": null,
      "args": null,
      "concreteType": "Transaction",
      "plural": false,
      "selections": [
        v1,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "value",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "description",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "type",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "date",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "TransactionSavedSubscription",
  "id": null,
  "text": "subscription TransactionSavedSubscription {\n  TransactionSaved {\n    dashboard {\n      balance\n      id\n    }\n    transaction {\n      node {\n        id\n        value\n        description\n        type\n        date\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TransactionSavedSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "TransactionSaved",
        "storageKey": null,
        "args": null,
        "concreteType": "TransactionSavedPayload",
        "plural": false,
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
              v0
            ]
          },
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TransactionSavedSubscription",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "TransactionSaved",
        "storageKey": null,
        "args": null,
        "concreteType": "TransactionSavedPayload",
        "plural": false,
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
              v0,
              v1
            ]
          },
          v2
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'd87eaf66171a3cc8447d73b32e2ee373';
module.exports = node;
