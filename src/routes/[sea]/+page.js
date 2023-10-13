import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        title: params.sea || "",
    };

	throw error(404, 'Not found');
}