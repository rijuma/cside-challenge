import type { User } from "@/types/user";
import type { userQuery as UserQuery } from "@/utils/relay/__generated__/userQuery.graphql";
import { type PreloadedQuery, usePreloadedQuery } from "react-relay";
import { graphql } from "relay-runtime";

export const userQuery = graphql`
  query userQuery {
    viewer {
      name
			login
			avatarUrl
    }
  }
`;

export const useUserData = (queryRef: PreloadedQuery<UserQuery>): User => {
	const { viewer } = usePreloadedQuery<UserQuery>(userQuery, queryRef);

	console.log({ viewer });

	const username = viewer.login || "Guest";
	const displayName = viewer.name || "";
	const avatarUrl = viewer.avatarUrl || "";

	return {
		username,
		displayName,
		avatarUrl,
	} satisfies User;
};
