// ADSTERRA
let sites = [
	'https://araplhn.org/4/b23e3965e3f92f6f60319e1ae94de789', //runaround.org, Filehosts
	'https://araplhn.org/4/37f918c6b471c12bfb6ce52d26763e01', //ncs.rich, Torrents
	'https://araplhn.org/4/710cc2945d20faa4361bf4e152ce88a5', //ncs.fyi, URLShortener
	'https://araplhn.org/4/9f72f1268cc5a6b6bf16ff7a9d438a95', //natureloom.org, MP3
	'https://araplhn.org/4/45f5cb218deb0150a63e279d09c7d4a2', //mtgcgs.org, Converter
	'https://demper.org/4/ae903e4a1461da45565827692f795117', //danceintensified.org, Videohosts
	'https://araplhn.org/4/8c2d0d64f3352e928652fd244ff79894', //cittedu.org, Books
	'https://araplhn.org/4/9cbe70e81a81d4202fc18d76358c6091', //canva-helpdesk.com, Other
	'https://araplhn.org/4/5ad31492a5064c15edf508464c54cfa8' //cakeshops.org, Books
];

export function launchAds() {
	if (location.hostname.includes('localhost')) {
		return;
	} else {
		let i = Math.floor(Math.random() * sites.length);
		let newTab = window.open(sites[i]);

		if (newTab) {
			newTab.opener = null;
		}

		document.removeEventListener('mousedown', launchAds);
	}
}
