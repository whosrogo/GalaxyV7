// ADSTERRA
let sites = [
'https://www.profitableratecpmnetwork.com/i2ip6jnm46?key=ae903e4a1461da45565827692f795117',
'https://www.profitableratecpmnetwork.com/gp551ce0zi?key=8c2d0d64f3352e928652fd244ff79894',
'https://www.profitableratecpmnetwork.com/bmtea972?key=9cbe70e81a81d4202fc18d76358c6091',
'https://www.profitableratecpmnetwork.com/qfm2pv2hm5?key=5ad31492a5064c15edf508464c54cfa8',
'https://www.profitableratecpmnetwork.com/dnjar020?key=9ca419f0d3556c4514d16bce61a1601b',
'https://www.profitableratecpmnetwork.com/x6jqru9y?key=36f77b48f0bb7067c5e26817d846f6ea',
'https://www.profitableratecpmnetwork.com/z2cnbsn0?key=2947362c6a3e8692fd3fcf327f4a1161',
'https://www.profitableratecpmnetwork.com/ct51z7sww7?key=114a461e6bf49215b9dbff9b6d35ba4e',
'https://www.profitableratecpmnetwork.com/v5j7rdfxcy?key=6049e877ad11fdf217761b03e100e797',
'https://www.profitableratecpmnetwork.com/f1zmi6zf?key=901275d9f62f7301737099fa0bc51b39'
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
