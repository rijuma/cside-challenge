import { Loading } from "@/components/ui/loading";
import { Flex } from "@radix-ui/themes";
import type { FC } from "react";

export const LoadingLayout: FC = () => (
	<Flex direction="column" height="100dvh" align="center" justify="center">
		<Loading />
	</Flex>
);
