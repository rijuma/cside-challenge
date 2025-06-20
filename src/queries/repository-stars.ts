import { graphql } from "relay-runtime";

export const repositoryStarsAddMutation = graphql`
  mutation repositoryStarsAddMutation($input: AddStarInput!) {
    addStar(input: $input) {
      starrable {
        ... on Repository {
          id
          stargazerCount
          viewerHasStarred
        }
      }
    }
  }
`;

export const repositoryStarsRemoveMutation = graphql`
  mutation repositoryStarsRemoveMutation($input: RemoveStarInput!) {
    removeStar(input: $input) {
      starrable {
        ... on Repository {
          id
          stargazerCount
          viewerHasStarred
        }
      }
    }
  }
`;
