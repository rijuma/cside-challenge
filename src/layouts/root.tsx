import { Container } from "@radix-ui/themes";
import type { FC, PropsWithChildren } from "react";

import { CSideLogo } from "@/components/ui/cside-logo";

export const RootLayout: FC<PropsWithChildren> = ({ children }) => (
	<div>
		<h1>
			<CSideLogo />
			Hello
		</h1>
		<Container>{children}</Container>
	</div>
);
