<script lang="ts">
	import { getContext } from 'svelte';
	import type { TableContext } from '$lib/types/table';
	type T = $$Generic;

	export let title: string;
	export let value: T;
	export let width: string | undefined = undefined;
	export let hideTitle: boolean = false;

	const { register } = getContext<TableContext>('columns');
	register({ title, width, hideTitle });
</script>

<td>
	<slot>{value}</slot>
</td>
