<script lang="ts">
	import { Table, TableColumn, Button } from '$lib';
	import { invalidateAll } from '$app/navigation';

	import type { PageData } from './$types';

	export let data: PageData;
	let { products, next, page } = data;

	function onClick() {
		next();
		invalidateAll();
		products = data.products;
		page = data.page;
	}
</script>

<h1>{page}</h1>
<Table data={products} let:row>
	<TableColumn title="ID" value={row.id} />
	<TableColumn title="Name" value={row.title} />
</Table>

<Button on:click={onClick}>Next</Button>
