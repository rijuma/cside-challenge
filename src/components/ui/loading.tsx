import { Flex, Spinner, Text } from "@radix-ui/themes";
import type { FC } from "react";

export const Loading: FC = () => (
	<Flex direction="column" align="center" justify="center" gap="2">
		<Text color="gray" size="2">
			Loading...
		</Text>
		<Spinner size="3" />
	</Flex>
);
