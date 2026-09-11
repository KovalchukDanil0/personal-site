import { deLocalizeUrl } from "$lib/paraglide/runtime";

export function reroute(request) {
	return deLocalizeUrl(request.url).pathname;
}
