export function search(input, template) {
	let searchEngine;
	if (template == 'default') {
		searchEngine = 'https://www.duckduckgo.com/search?q=%s';
	} else if (template == 'ecosia') {
		searchEngine = 'https://www.ecosia.org/search?q=%s';
	} else if (template == 'ddg') {
		searchEngine = 'https://www.duckduckgo.com/search?q=%s';
	} else if (template == 'google') {
		searchEngine = 'https://google.com/search?q=%s';
	} else if (template == 'brave') {
		searchEngine = 'https://search.brave.com/search?q=%s';
	} else if (template == 'yahoo') {
		searchEngine = 'https://search.yahoo.com/search?p=%s';
	} else if (template == 'yep') {
		searchEngine = 'https://yep.com/?q=%s';
	} else if (template == 'startpage') {
		searchEngine = 'https://www.startpage.com/sp/search?query=%s';
	} else if (template == 'bing') {
		searchEngine = 'https://www.bing.com/search?q=%s';
	} else {
		searchEngine = 'https://google.com/search?q=%s';
	}
	try {
		return new URL(input).toString();
	} catch {}

	try {
		const url = new URL(`https://${input}`);
		if (url.hostname.includes('.')) return url.toString();
	} catch {}

	return searchEngine.replace('%s', encodeURIComponent(input));
}
