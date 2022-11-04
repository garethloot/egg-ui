export type Products = {
	id: number;
	title: string;
	description: string;
};

export type Response = {
	products: Products[];
	total: number;
	skip: number;
	limit: number;
};

const limit = 20;

export async function fetchProducts(
	skip: number,
	fetch: {
		(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<globalThis.Response>;
		(arg0: string): any;
	}
) {
	const path = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
	const productRes = await fetch(path);
	const products: Response = await productRes.json();
	return products;
}
