import type { PageLoad } from './$types';
import { fetchProducts } from './helpers/products';
export const csr = true;

export const load: PageLoad = async ({ fetch }) => {
	const results = await fetchProducts(0, fetch);
	return {
		...results
	};
};
