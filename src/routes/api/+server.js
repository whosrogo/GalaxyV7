import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
	const params = new URLSearchParams(url.searchParams);
	if (!params.has('resource') && params.has('url')) {
		params.set('resource', params.get('url') ?? '');
	}
	params.delete('url');
	redirect(307, `/launch${params.size ? `?${params}` : ''}`);
}
