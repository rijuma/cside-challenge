/**
 * @generated SignedSource<<94522708f6343245b75f24290ae6626e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type routesQuery$variables = Record<PropertyKey, never>;
export type routesQuery$data = {
  readonly viewer: {
    readonly name: string | null | undefined;
  };
};
export type routesQuery = {
  response: routesQuery$data;
  variables: routesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "routesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "routesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d191e72837273be6ed77485c4a67451b",
    "id": null,
    "metadata": {},
    "name": "routesQuery",
    "operationKind": "query",
    "text": "query routesQuery {\n  viewer {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "a16fbff518d6b24344df1577a2153dd2";

export default node;
