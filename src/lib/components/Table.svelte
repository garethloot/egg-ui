<script lang="ts">
	import { setContext, onDestroy } from 'svelte';
	import type { TableColumnConfig } from '$lib/types/table';
	import { stringify } from 'postcss';
	type T = $$Generic;

	let columns: TableColumnConfig[] = [];

	setContext('columns', {
		register: (column: TableColumnConfig) => {
			if (columns.find((c) => c.title == column.title)) return;

			columns = [...columns, column];

			onDestroy(() => {
				columns = columns.filter((c) => c.title != column.title);
			});
		},
		getColumns: () => columns
	});

	export let data: T[] = [];
</script>

<table class="table w-full">
	<thead>
		<tr>
			{#each columns as column}
				<th class={column.width}>{column.hideTitle ? '' : column.title}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each data as row}
			<tr><slot {row} /></tr>
		{/each}
	</tbody>
</table>
