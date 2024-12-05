<script lang="ts">
	import * as Dialog from '$/components/ui/dialog/index.js';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import { Button } from '../ui/button/index.js';
	import Thirdweb from './components/thirdweb.svelte';
	import type { ConnectWalletModalProps } from './index.js';
	import { type ConnectWalletModalStep } from './steps/index.js';
	import { ProviderSelector } from './steps/provider-selector/index.js';
	import { WalletSelector } from './steps/wallet-selector/index.js';
	import OauthLoading from './steps/oauth-loading.svelte';
	import OauthError from './steps/oauth-error.svelte';
	import { cn } from '$/utils.js';
	import type { Action } from 'svelte/action';
	import { WalletConnect } from './steps/wallet-connect/index.js';
	import type { Account } from 'thirdweb/wallets';
	import { getThirdwebSvelteContext } from '../thirdweb-svelte-provider/context.js';

	type $$Props = ConnectWalletModalProps;
	export let chain: $$Props['chain'] = undefined;
	export let theme: $$Props['theme'] = 'dark';
	export let open: $$Props['open'] = false;

	const context = getThirdwebSvelteContext();

	let step: ConnectWalletModalStep = 'provider-selector';
	let additionalProps: any = undefined;

	const setStep = (nextStep: ConnectWalletModalStep, nextAdditionalProps: unknown = undefined) => {
		additionalProps = nextAdditionalProps;
		step = nextStep;
	};
	const closeModal = () => {
		open = false;
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

	const onFinishConnect = (account: Account) => {
		context.account.set(account);
		closeModal();
	};

	$: showBackButton = step !== 'provider-selector';
	$: {
		if (open) {
			step = 'provider-selector';
		}
	}
	$: hideFooter = step === 'oauth-error' || step === 'oauth-loading' || step === 'wallet-connect';
</script>

<Dialog.Root {...$$restProps} {open}>
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
			<Dialog.Title class="twsv-w-fit twsv-text-xl">Sign in</Dialog.Title>
		</Dialog.Header>
		<div
			style="--height: {height ? `${height}px` : 'auto'}"
			class="twsv-h-[var(--height)] twsv-transition-[height] twsv-duration-[210ms] twsv-ease-[cubic-bezier(0.175,_0.885,_0.32,_1.1)]"
		>
			<div class="twsv-flex twsv-flex-col" use:heightObserver>
				{#if step === 'provider-selector'}
					<ProviderSelector {setStep} {onFinishConnect} {chain} {additionalProps} />
				{:else if step === 'wallet-selector'}
					<WalletSelector {setStep} {onFinishConnect} {chain} {additionalProps} />
				{:else if step === 'oauth-loading'}
					<OauthLoading {setStep} {onFinishConnect} {chain} {additionalProps} />
				{:else if step === 'oauth-error'}
					<OauthError {setStep} {onFinishConnect} {chain} {additionalProps} />
				{:else if step === 'wallet-connect'}
					<WalletConnect {setStep} {onFinishConnect} {chain} {additionalProps} />
				{/if}
				{#if !hideFooter}
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
				{/if}
			</div>
		</div>
	</Dialog.Content>
</Dialog.Root>
