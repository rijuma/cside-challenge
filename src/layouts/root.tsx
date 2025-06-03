import type { FC, PropsWithChildren } from "react";

export const RootLayout: FC<PropsWithChildren> = ({ children }) => (
	<div>
		<p>Hello</p>
		{children}
	</div>
);
