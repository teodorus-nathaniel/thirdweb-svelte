<script lang="ts">
	import { mediaQuery } from 'svelte-legos';
	import * as Dialog from '$/components/ui/dialog/index.js';
	import * as Drawer from '$/components/ui/drawer/index.js';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import { Button } from '../ui/button/index.js';
	import type { ConnectWalletModalProps } from './index.js';
	import { type ConnectWalletModalStep } from './steps/index.js';
	import { cn } from '$/utils.js';
	import ConnectWalletModalContent from './connect-wallet-modal-content.svelte';

	type $$Props = ConnectWalletModalProps;
	export let chain: $$Props['chain'] = undefined;
	export let theme: $$Props['theme'] = 'dark';
	export let open: $$Props['open'] = false;
	export let walletConnect: $$Props['walletConnect'] = undefined;
	export let chains: $$Props['chains'] = undefined;

	const isDesktop = mediaQuery('(min-width: 768px)');

	let step: ConnectWalletModalStep = 'provider-selector';
	let additionalProps: any = undefined;
	let customTitle = '';

	const setStep = (
		nextStep: ConnectWalletModalStep,
		nextAdditionalProps: unknown = undefined,
		nextCustomTitle?: string
	) => {
		additionalProps = nextAdditionalProps;
		step = nextStep;
		if (nextCustomTitle) customTitle = nextCustomTitle;
		else customTitle = '';
	};
	const closeModal = () => {
		open = false;
	};

	$: showBackButton = step !== 'provider-selector';
	$: {
		if (open) {
			step = 'provider-selector';
		}
	}

	$: title = customTitle || 'Sign in';
</script>

{#if $isDesktop}
	<Dialog.Root {...$$restProps} bind:open>
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
						on:click={() => setStep('provider-selector')}
					>
						<ChevronLeft />
					</Button>
				{/if}
				<Dialog.Title class="twsv-w-fit twsv-text-xl">{title}</Dialog.Title>
			</Dialog.Header>
			<ConnectWalletModalContent
				{walletConnect}
				{additionalProps}
				{closeModal}
				{chain}
				{setStep}
				{step}
				{chains}
			/>
		</Dialog.Content>
	</Dialog.Root>
{:else}
	<Drawer.Root bind:open>
		<Drawer.Content>
			<Drawer.Header
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
						on:click={() => setStep('provider-selector')}
					>
						<ChevronLeft />
					</Button>
				{/if}
				<Drawer.Title class="twsv-w-fit twsv-text-xl">{title}</Drawer.Title>
			</Drawer.Header>
			<ConnectWalletModalContent
				{walletConnect}
				{additionalProps}
				{closeModal}
				{chain}
				{setStep}
				{step}
				{chains}
			/>
		</Drawer.Content>
	</Drawer.Root>
{/if}
