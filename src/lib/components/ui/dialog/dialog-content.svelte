<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import X from 'lucide-svelte/icons/x';
	import * as Dialog from './index.js';
	import { cn, flyAndScale } from '$lib/utils.js';

	type $$Props = DialogPrimitive.ContentProps & {
		theme?: 'light' | 'dark';
	};

	let className: $$Props['class'] = undefined;
	export let theme: $$Props['theme'] = 'dark';
	export let transition: $$Props['transition'] = flyAndScale;
	export let transitionConfig: $$Props['transitionConfig'] = {
		duration: 200
	};
	export { className as class };
</script>

<Dialog.Portal>
	<Dialog.Overlay class={cn(theme === 'dark' && 'dark')} />
	<DialogPrimitive.Content
		{transition}
		{transitionConfig}
		class={cn(
			'twsv-bg-background twsv-text-foreground twsv-fixed twsv-left-[50%] twsv-top-[50%] twsv-z-50 twsv-grid twsv-w-full twsv-max-w-md twsv-translate-x-[-50%] twsv-translate-y-[-50%] twsv-gap-4 twsv-border twsv-border-border twsv-p-6 twsv-shadow-lg sm:twsv-rounded-2xl md:twsv-w-full',
			theme === 'dark' && 'dark',
			className
		)}
		{...$$restProps}
	>
		<slot />
		<DialogPrimitive.Close
			class="twsv-ring-offset-background focus:twsv-ring-ring data-[state=open]:twsv-bg-accent data-[state=open]:twsv-text-muted-foreground twsv-absolute twsv-right-6 twsv-top-6 twsv-rounded-md twsv-opacity-70 twsv-transition-opacity hover:twsv-opacity-100 hover:twsv-bg-secondary focus:twsv-outline-none focus:twsv-ring-2 focus:twsv-bg-secondary focus:twsv-ring-offset-2 disabled:twsv-pointer-events-none"
		>
			<X class="twsv-h-6 twsv-w-6" />
			<span class="twsv-sr-only">Close</span>
		</DialogPrimitive.Close>
	</DialogPrimitive.Content>
</Dialog.Portal>
