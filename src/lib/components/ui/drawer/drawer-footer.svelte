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
	class={cn('twsv-mt-auto twsv-flex twsv-flex-col twsv-gap-2 twsv-p-4', className)}
	{...$$restProps}
>
	<slot />
</div>
