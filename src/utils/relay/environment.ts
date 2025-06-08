import { proxyUrl } from "@/const";
import {
	type CacheConfig,
	Environment,
	Network,
	RecordSource,
	type RequestParameters,
	Store,
	type UploadableMap,
	type Variables,
} from "relay-runtime";

async function fetchRelay(
	request: RequestParameters,
	variables: Variables,
	_cacheConfig: CacheConfig,
	_uploadables?: UploadableMap | null,
) {
	if (proxyUrl && import.meta.env.VITE_GH_TOKEN)
		throw new Error(
			"You are using a GitHub proxy. Please remove VITE_GH_PROXY_URL from the env vars, since it's a security risk.",
		);

	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: "",
		},
		body: JSON.stringify({
			query: request.text,
			variables,
		}),
	} satisfies RequestInit;

	if (!proxyUrl) {
		if (!import.meta.env.VITE_GH_TOKEN)
			throw new Error(
				"Missing VITE_GH_TOKEN and VITE_GH_PROXY_URL. Check .env file.",
			);
		/**
		 * THIS IS A BASIC FRONTEND VITE APP
		 * DO NOT PUBLISH THIS APPLICATION ONLINE
		 * YOUR GITHUB TOKEN WILL BE PUBLICLY AVAILABLE
		 * */
		options.headers.Authorization = `Bearer ${import.meta.env.VITE_GH_TOKEN}`;
	}

	const url = proxyUrl || "https://api.github.com/graphql";

	return fetch(url, options).then((res) => res.json());
}

export default new Environment({
	network: Network.create(fetchRelay),
	store: new Store(new RecordSource()),
});
