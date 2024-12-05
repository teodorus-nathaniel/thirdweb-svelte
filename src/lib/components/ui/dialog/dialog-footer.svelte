<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div
	class={cn(
		'twsv-flex twsv-flex-col-reverse sm:twsv-flex-row sm:twsv-justify-end sm:twsv-space-x-2',
		className
	)}
	{...$$restProps}
>
	<slot />
</div>
