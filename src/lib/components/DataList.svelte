<script lang="ts">
	type T = $$Generic;

	export let data: T[] = [];

	interface $$Slots {
		default: { item: T };
	}
</script>

{#each data as item}
	<slot {item} />
{/each}
