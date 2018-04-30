/**
 * @flow
 * @relayHash 9442fe4f06d75ed8989a44c35ceda83e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TransactionTypeEnum = ('EXPENSE' | 'REVENUE' | '%future added value');
export type TransactionSavedSubscriptionVariables = {| |};
export type TransactionSavedSubscriptionResponse = {|
  +TransactionSaved: ?{|
    +transactionEdge: ?{|
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
    transactionEdge {
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
var v0 = [
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
        "name": "transactionEdge",
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "TransactionSavedSubscription",
  "id": null,
  "text": "subscription TransactionSavedSubscription {\n  TransactionSaved {\n    transactionEdge {\n      node {\n        id\n        value\n        description\n        type\n        date\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TransactionSavedSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "TransactionSavedSubscription",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node/*: any*/).hash = 'ea5b0732051bf2a523931684780e58ed';
module.exports = node;
