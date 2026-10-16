export function normalizeUrl(input: string) {
	return /^https?:\/\//iu.test(input) ? input : `https://${input}`;
}
