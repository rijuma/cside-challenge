import { Container } from "@radix-ui/themes";
import type { FC, PropsWithChildren } from "react";

import "@radix-ui/themes/styles.css";

export const RootLayout: FC<PropsWithChildren> = ({ children }) => (
	<div>
		<p>Hello</p>
		<Container>{children}</Container>
	</div>
);
