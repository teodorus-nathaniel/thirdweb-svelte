<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	type $$Props = DialogPrimitive.TitleProps;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<DialogPrimitive.Title
	class={cn('twsv-text-lg twsv-font-semibold twsv-leading-tight twsv-tracking-tight', className)}
	{...$$restProps}
>
	<slot />
</DialogPrimitive.Title>
