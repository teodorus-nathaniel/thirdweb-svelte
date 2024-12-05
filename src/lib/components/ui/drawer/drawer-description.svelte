<script lang="ts">
	import { Drawer as DrawerPrimitive } from 'vaul-svelte';
	import { cn } from '$/utils.js';

	type $$Props = DrawerPrimitive.DescriptionProps;

	export let el: $$Props['el'] = undefined;
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<DrawerPrimitive.Description
	bind:el
	class={cn('twsv-text-sm twsv-text-muted-foreground', className)}
	{...$$restProps}
>
	<slot />
</DrawerPrimitive.Description>
