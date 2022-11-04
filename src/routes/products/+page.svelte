<script lang="ts">
	import { Table, TableColumn } from '$lib';
	import type { PageData } from './$types';
	import { fetchProducts } from './helpers/products';
	import InfiniteScroll from 'svelte-infinite-scroll';

	export let data: PageData;
	let { products, limit, total, skip } = data;

	const next = async () => {
		if (skip < total - limit) {
			skip += limit;
			const nextProducts = await fetchProducts(skip, fetch);
			products = [...products, ...nextProducts.products];
		}
	};
</script>

<Table data={products} let:row>
	<TableColumn title="ID" value={row.id} />
	<TableColumn title="Name" value={row.title} />
</Table>

<InfiniteScroll threshold={100} window on:loadMore={next} />
