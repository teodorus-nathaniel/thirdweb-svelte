<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div
	class={cn(
		'twsv-flex twsv-flex-col twsv-space-y-1.5 twsv-text-center sm:twsv-text-left',
		className
	)}
	{...$$restProps}
>
	<slot />
</div>
