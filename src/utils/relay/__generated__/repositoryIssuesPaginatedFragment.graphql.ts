/**
 * @generated SignedSource<<696f68936d246c48519c43bbeaaa20db>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type repositoryIssuesPaginatedFragment$data = {
  readonly id: string;
  readonly issues: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly author: {
          readonly avatarUrl: any;
          readonly username: string;
        } | null | undefined;
        readonly bodyHTML: any;
        readonly commentCount: {
          readonly totalCount: number;
        };
        readonly createdAt: any;
        readonly number: number;
        readonly tags: {
          readonly nodes: ReadonlyArray<{
            readonly color: string;
            readonly description: string | null | undefined;
            readonly name: string;
          } | null | undefined> | null | undefined;
        } | null | undefined;
        readonly title: string;
        readonly url: any;
        readonly " $fragmentSpreads": FragmentRefs<"issueCommentsPaginatedFragment">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  };
  readonly " $fragmentType": "repositoryIssuesPaginatedFragment";
};
export type repositoryIssuesPaginatedFragment$key = {
  readonly " $data"?: repositoryIssuesPaginatedFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"repositoryIssuesPaginatedFragment">;
};

import RepositoryIssuesPaginationQuery_graphql from './RepositoryIssuesPaginationQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "issues"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": RepositoryIssuesPaginationQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "repositoryIssuesPaginatedFragment",
  "selections": [
    {
      "alias": "issues",
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": {
            "direction": "DESC",
            "field": "UPDATED_AT"
          }
        },
        {
          "kind": "Literal",
          "name": "states",
          "value": "OPEN"
        }
      ],
      "concreteType": "IssueConnection",
      "kind": "LinkedField",
      "name": "__Repository_issues_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "IssueEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Issue",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "number",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "url",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "title",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "createdAt",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": null,
                  "kind": "LinkedField",
                  "name": "author",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "avatarUrl",
                      "storageKey": null
                    },
                    {
                      "alias": "username",
                      "args": null,
                      "kind": "ScalarField",
                      "name": "login",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": "tags",
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "first",
                      "value": 99
                    }
                  ],
                  "concreteType": "LabelConnection",
                  "kind": "LinkedField",
                  "name": "labels",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "Label",
                      "kind": "LinkedField",
                      "name": "nodes",
                      "plural": true,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "color",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "name",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "description",
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": "labels(first:99)"
                },
                {
                  "alias": "commentCount",
                  "args": null,
                  "concreteType": "IssueCommentConnection",
                  "kind": "LinkedField",
                  "name": "comments",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "totalCount",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "bodyHTML",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "issueCommentsPaginatedFragment"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "__Repository_issues_connection(orderBy:{\"direction\":\"DESC\",\"field\":\"UPDATED_AT\"},states:\"OPEN\")"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};
})();

(node as any).hash = "034a8e5934fc7b08da918ec130f6e338";

export default node;
