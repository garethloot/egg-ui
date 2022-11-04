<script lang="ts">
	export let name: string = '';
	const icon = name ? `bi-${name}` : '';
</script>

{#if name}
	<i class={icon} />
{/if}
