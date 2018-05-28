/**
 * @flow
 * @relayHash 8078bed83f8bcc553d7d6a449aab3e7d
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
      +expenses: ?number,
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
      expenses
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
  "name": "expenses",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
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
        v2,
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
  "text": "subscription TransactionSavedSubscription {\n  TransactionSaved {\n    dashboard {\n      balance\n      expenses\n      id\n    }\n    transaction {\n      node {\n        id\n        value\n        description\n        type\n        date\n      }\n    }\n  }\n}\n",
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
              v0,
              v1
            ]
          },
          v3
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
              v1,
              v2
            ]
          },
          v3
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'b60c99ff34dc304712f7a8c1688530c7';
module.exports = node;
