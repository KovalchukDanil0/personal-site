import { deLocalizeUrl } from "#lib/paraglide/runtime.js";

export function reroute(request) {
	return deLocalizeUrl(request.url).pathname;
}
