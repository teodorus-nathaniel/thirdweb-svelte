<script lang="ts">
	import { Separator as SeparatorPrimitive } from 'bits-ui';
	import { cn } from '$/utils.js';

	type $$Props = SeparatorPrimitive.Props;

	let className: $$Props['class'] = undefined;
	export let orientation: $$Props['orientation'] = 'horizontal';
	export let decorative: $$Props['decorative'] = undefined;
	export { className as class };
</script>

<SeparatorPrimitive.Root
	class={cn(
		'twsv-shrink-0 twsv-bg-border',
		orientation === 'horizontal' ? 'twsv-h-[1px] twsv-w-full' : 'twsv-min-h-full twsv-w-[1px]',
		className
	)}
	{orientation}
	{decorative}
	{...$$restProps}
/>
