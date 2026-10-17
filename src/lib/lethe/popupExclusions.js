export const popupInterceptorExcludedDomains = ['discord.com', 'discordapp.com', 'discord.gg'];
export function isPopupInterceptorExcluded(url, excludedDomains) {
	try {
		const hostname = new URL(url).hostname.toLowerCase().replace(/\.$/, '');
		return excludedDomains.some((domain) => {
			const normalized = domain.toLowerCase().replace(/\.$/, '');
			return hostname === normalized || hostname.endsWith('.' + normalized);
		});
	} catch {
		return false;
	}
}
