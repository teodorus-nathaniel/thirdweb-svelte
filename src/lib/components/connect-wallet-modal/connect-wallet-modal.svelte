<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import { Button } from '../ui/button/index.js';
	import ProviderSelector from './steps/provider-selector.svelte';
	import Thirdweb from './components/thirdweb.svelte';
	import type { Props } from './index.js';
	import type { ConnectWalletModalStep } from './steps/types.js';
	import { cn } from '$/utils.js';
	import { WalletSelector } from './steps/wallet-selector/index.js';
	import type { Action } from 'svelte/action';

	type $$Props = Props;
	export let theme: $$Props['theme'] = 'dark';

	let step: ConnectWalletModalStep = 'provider-selector';
	const stepsHistory: ConnectWalletModalStep[] = [];

	const changeStep = (nextStep: ConnectWalletModalStep) => {
		stepsHistory.push(step);
		step = nextStep;
	};
	const back = () => {
		step = stepsHistory.pop()!;
	};

	let height = 0;
	const heightObserver: Action = (node) => {
		const resizeObserver = new ResizeObserver(() => {
			height = node.scrollHeight;
		});
		resizeObserver.observe(node);

		return {
			destroy: () => resizeObserver.disconnect()
		};
	};

	$: showBackButton = step !== 'provider-selector' && stepsHistory.length > 0;
</script>

<Dialog.Root {...$$restProps}>
	<Dialog.Content {theme} class={cn('twsv-pb-4')}>
		<Dialog.Header
			class={cn(
				'twsv-relative twsv-flex-row twsv-space-y-0',
				showBackButton && 'twsv-justify-center'
			)}
		>
			{#if showBackButton}
				<Button
					variant="ghost"
					size="auto"
					class="twsv-absolute -twsv-left-2 twsv-top-0 twsv-text-muted-foreground"
					on:click={back}
				>
					<ChevronLeft />
				</Button>
			{/if}
			<Dialog.Title class="twsv-w-fit twsv-text-xl">Sign in</Dialog.Title>
		</Dialog.Header>
		<div
			style="--height: {height ? `${height}px` : 'auto'}"
			class="twsv-h-[var(--height)] twsv-transition-[height] twsv-duration-[210ms] twsv-ease-[cubic-bezier(0.175,_0.885,_0.32,_1.1)]"
		>
			<div class="twsv-flex twsv-flex-col" use:heightObserver>
				{#if step === 'provider-selector'}
					<ProviderSelector setStep={changeStep} />
				{:else if step === 'wallet-selector'}
					<WalletSelector setStep={changeStep} />
				{/if}
				<Button
					href="https://thirdweb.com/connect?utm_source=cw_text"
					variant="link"
					size="auto"
					target="_blank"
					class="twsv-mx-auto twsv-mt-8 twsv-flex twsv-w-fit twsv-items-center twsv-justify-center twsv-gap-1 twsv-text-muted-foreground !twsv-no-underline hover:twsv-text-foreground focus-visible:twsv-text-foreground"
				>
					<span class="twsv-text-sm twsv-font-semibold twsv-leading-normal">Powered by</span>
					<Thirdweb height={12} class="twsv-relative twsv-top-px" />
				</Button>
			</div>
		</div>
	</Dialog.Content>
</Dialog.Root>
