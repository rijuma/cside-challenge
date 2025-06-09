import { Badge, Box, type BoxProps, Heading } from "@radix-ui/themes";
import type { FC, PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren<
	{
		title: string;
		badge?: string;
	} & BoxProps &
		React.RefAttributes<HTMLHeadingElement>
>;

export const DetailSection: FC<LayoutProps> = ({
	children,
	title,
	badge,
	...boxProps
}) => (
	<Box {...boxProps}>
		<Heading as="h3" size="2" mt="2">
			{title}
			{badge !== undefined ? (
				<Badge color="gold" ml="2">
					{badge}
				</Badge>
			) : null}
		</Heading>
		{children}
	</Box>
);
