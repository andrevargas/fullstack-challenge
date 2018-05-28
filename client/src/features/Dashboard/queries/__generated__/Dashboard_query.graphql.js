/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type Dashboard_query$ref: FragmentReference;
export type Dashboard_query = {|
  +dashboard: ?{|
    +balance: ?number,
    +expenses: ?number,
  |},
  +$refType: Dashboard_query$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Dashboard_query",
  "type": "Query",
  "metadata": null,
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
        }
      ]
    }
  ]
};
(node/*: any*/).hash = '70dd4ef77e540715c584bc911d49ed4a';
module.exports = node;
