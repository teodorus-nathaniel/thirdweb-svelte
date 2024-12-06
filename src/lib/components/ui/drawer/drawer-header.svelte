<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		el?: HTMLDivElement;
	};
	export let el: $$Props['el'] = undefined;
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div
	bind:this={el}
	class={cn('twsv-grid twsv-gap-1.5 twsv-py-6 twsv-text-center sm:twsv-text-left', className)}
	{...$$restProps}
>
	<slot />
</div>
