<script lang="ts">
	import { getClasses } from '$lib/styles/button';
	import type { ButtonSize, ButtonWide, ButtonStyle, ButtonColor } from '$lib/types/button';
	import Icon from './Icon.svelte';

	export let size: ButtonSize = 'medium';
	export let wide: ButtonWide = 'default';
	export let style: ButtonStyle = 'default';
	export let color: ButtonColor = 'default';
	export let active: boolean = false;
	export let disabled: boolean = false;
	export let loading: boolean = false;
	export let noAnimation: boolean = false;
	export let icon: string = '';
	export let iconEnd: boolean = false;

	const classes = getClasses(size, wide, style, color);
</script>

<button
	on:click
	class:loading
	class:btn-active={active}
	class:no-animation={noAnimation}
	class={classes}
	{disabled}
>
	{#if iconEnd === false}
		<Icon name={icon} />
	{/if}
	<slot />
	{#if iconEnd === true}
		<Icon name={icon} />
	{/if}
</button>
