import { useRepository } from "@/context";
import {
	repositoryStarsAddMutation,
	repositoryStarsRemoveMutation,
} from "@/queries/repository-stars";
import type { repositoryStarsAddMutation as RepositoryStarsAddMutation } from "@/utils/relay/__generated__/repositoryStarsAddMutation.graphql";
import type { repositoryStarsRemoveMutation as RepositoryStarsRemoveMutation } from "@/utils/relay/__generated__/repositoryStarsRemoveMutation.graphql";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { Button, Spinner } from "@radix-ui/themes";
import { useState } from "react";
import { useMutation } from "react-relay";
import type { PayloadError } from "relay-runtime";

export const StarButton = () => {
	const repository = useRepository();
	const [error, setError] = useState<string | null>(null);

	const [commitAddStar, isInFlightAddStar] =
		useMutation<RepositoryStarsAddMutation>(repositoryStarsAddMutation);
	const [commitRemoveStar, isInFlightRemoveStar] =
		useMutation<RepositoryStarsRemoveMutation>(repositoryStarsRemoveMutation);

	if (!repository) return null;

	const {
		data: { id, starred },
	} = repository;

	const checkForErrors = (errors: PayloadError[] | null) => {
		if (!errors?.length) return; // Ok

		const error = errors[0].message || "Please check token access.";
		setError(error);
	};

	const updateStar = (value: boolean) => {
		setError(null);

		if (value) {
			commitAddStar({
				variables: { input: { starrableId: id } },
				onCompleted: (_, errors) => checkForErrors(errors),
			});
		} else {
			commitRemoveStar({
				variables: { input: { starrableId: id } },
				onCompleted: (_, errors) => checkForErrors(errors),
			});
		}
	};

	const updating = isInFlightAddStar || isInFlightRemoveStar;

	return (
		<Button
			size="1"
			type="button"
			onClick={() => updateStar(!starred)}
			disabled={updating}
			color={error ? "red" : undefined}
			title={error ? `Error: ${error}.` : undefined}
		>
			<Spinner loading={updating}>
				{starred ? <StarFilledIcon /> : <StarIcon />}
			</Spinner>
			{starred ? "Unstar" : "Star"}
		</Button>
	);
};
