/**
 * @generated SignedSource<<9b1543680e40992acef9c71f46494571>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type repositoryQuery$variables = {
  owner: string;
  slug: string;
};
export type repositoryQuery$data = {
  readonly repository: {
    readonly branches: {
      readonly totalCount: number;
    } | null | undefined;
    readonly collaborators: {
      readonly nodes: ReadonlyArray<{
        readonly avatarUrl: any;
        readonly name: string | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
    readonly defaultBranchRef: {
      readonly name: string;
      readonly target: {
        readonly history?: {
          readonly totalCount: number;
        };
      } | null | undefined;
    } | null | undefined;
    readonly descriptionHTML: any;
    readonly forkCount: number;
    readonly id: string;
    readonly issueCount: {
      readonly totalCount: number;
    };
    readonly name: string;
    readonly owner: {
      readonly login: string;
    };
    readonly stargazerCount: number;
    readonly url: any;
    readonly " $fragmentSpreads": FragmentRefs<"repositoryIssuesPaginatedFragment">;
  } | null | undefined;
};
export type repositoryQuery = {
  response: repositoryQuery$data;
  variables: repositoryQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "owner"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "slug"
  },
  {
    "kind": "Variable",
    "name": "owner",
    "variableName": "owner"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "descriptionHTML",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "stargazerCount",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "forkCount",
  "storageKey": null
},
v9 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
],
v10 = {
  "alias": "branches",
  "args": [
    {
      "kind": "Literal",
      "name": "refPrefix",
      "value": "refs/heads/"
    }
  ],
  "concreteType": "RefConnection",
  "kind": "LinkedField",
  "name": "refs",
  "plural": false,
  "selections": (v9/*: any*/),
  "storageKey": "refs(refPrefix:\"refs/heads/\")"
},
v11 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CommitHistoryConnection",
      "kind": "LinkedField",
      "name": "history",
      "plural": false,
      "selections": (v9/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Commit",
  "abstractKey": null
},
v12 = {
  "alias": "issueCount",
  "args": null,
  "concreteType": "IssueConnection",
  "kind": "LinkedField",
  "name": "issues",
  "plural": false,
  "selections": (v9/*: any*/),
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v15 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v17 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "repositoryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v10/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Ref",
            "kind": "LinkedField",
            "name": "defaultBranchRef",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "target",
                "plural": false,
                "selections": [
                  (v11/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v12/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "RepositoryCollaboratorConnection",
            "kind": "LinkedField",
            "name": "collaborators",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v13/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "repositoryIssuesPaginatedFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "repositoryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              (v14/*: any*/),
              (v5/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v10/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Ref",
            "kind": "LinkedField",
            "name": "defaultBranchRef",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "target",
                "plural": false,
                "selections": [
                  (v14/*: any*/),
                  (v11/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v12/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "RepositoryCollaboratorConnection",
            "kind": "LinkedField",
            "name": "collaborators",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v13/*: any*/),
                  (v3/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v15/*: any*/),
            "concreteType": "IssueConnection",
            "kind": "LinkedField",
            "name": "issues",
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
                      (v4/*: any*/),
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
                              (v3/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "description",
                                "storageKey": null
                              },
                              (v2/*: any*/)
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
                        "selections": (v9/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": "details",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "bodyHTML",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": (v15/*: any*/),
                        "concreteType": "IssueCommentConnection",
                        "kind": "LinkedField",
                        "name": "comments",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "IssueCommentEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "IssueComment",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v2/*: any*/),
                                  {
                                    "alias": "contents",
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "bodyHTML",
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
                                      (v14/*: any*/),
                                      (v4/*: any*/),
                                      (v13/*: any*/),
                                      (v5/*: any*/),
                                      {
                                        "kind": "InlineFragment",
                                        "selections": [
                                          (v2/*: any*/)
                                        ],
                                        "type": "Node",
                                        "abstractKey": "__isNode"
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  (v14/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v16/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v17/*: any*/)
                        ],
                        "storageKey": "comments(first:10)"
                      },
                      {
                        "alias": null,
                        "args": (v15/*: any*/),
                        "filters": null,
                        "handle": "connection",
                        "key": "Issue_comments",
                        "kind": "LinkedHandle",
                        "name": "comments"
                      },
                      (v2/*: any*/),
                      (v14/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v16/*: any*/)
                ],
                "storageKey": null
              },
              (v17/*: any*/)
            ],
            "storageKey": "issues(first:10)"
          },
          {
            "alias": null,
            "args": (v15/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "Repository_issues",
            "kind": "LinkedHandle",
            "name": "issues"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d2a89736f6565e811f52c6455b0bba9b",
    "id": null,
    "metadata": {},
    "name": "repositoryQuery",
    "operationKind": "query",
    "text": "query repositoryQuery(\n  $owner: String!\n  $slug: String!\n) {\n  repository(owner: $owner, name: $slug) {\n    id\n    name\n    url\n    owner {\n      __typename\n      login\n      id\n    }\n    descriptionHTML\n    stargazerCount\n    forkCount\n    branches: refs(refPrefix: \"refs/heads/\") {\n      totalCount\n    }\n    defaultBranchRef {\n      name\n      target {\n        __typename\n        ... on Commit {\n          history {\n            totalCount\n          }\n        }\n        id\n      }\n      id\n    }\n    issueCount: issues {\n      totalCount\n    }\n    collaborators {\n      nodes {\n        avatarUrl\n        name\n        id\n      }\n    }\n    ...repositoryIssuesPaginatedFragment\n  }\n}\n\nfragment issueCommentsPaginatedFragment on Issue {\n  comments(first: 10) {\n    edges {\n      node {\n        id\n        contents: bodyHTML\n        author {\n          __typename\n          url\n          avatarUrl\n          login\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment repositoryIssuesPaginatedFragment on Repository {\n  issues(first: 10) {\n    edges {\n      node {\n        number\n        url\n        title\n        createdAt\n        tags: labels(first: 99) {\n          nodes {\n            color\n            name\n            description\n            id\n          }\n        }\n        commentCount: comments {\n          totalCount\n        }\n        details: bodyHTML\n        ...issueCommentsPaginatedFragment\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "a1154cdc57ac76a3b7d8565a5d47b2b1";

export default node;
