<script lang="ts">
	import {
		getThirdwebSvelteContext,
		setThirdwebSvelteContext
	} from '$/components/thirdweb-svelte-provider/context.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { SocialIcon } from '../../components/social-icon/index.js';
	import { type Chain, type ThirdwebClient } from 'thirdweb';
	import type { ConnectWalletModalStepProps } from '../index.js';
	import type { SupportedSocialProvider } from './index.js';

	const context = getThirdwebSvelteContext();
	export let client: ThirdwebClient | null = context?.client ?? null;
	export let chain: Chain | undefined = undefined;
	export let provider: SupportedSocialProvider;
	export let setStep: ConnectWalletModalStepProps<'provider-selector'>['setStep'];
	export let closeModal: ConnectWalletModalStepProps<'provider-selector'>['closeModal'];

	const handleClick = async () => {
		if (!context || !client) {
			throw new Error(
				'ThirdwebSvelteContext not found. Make sure the ThirdwebSvelteProvider is mounted.'
			);
		}
		setStep('oauth-loading', undefined);
		try {
			const acc = await context.wallet.connect({
				client,
				chain,
				strategy: provider
			});
			setThirdwebSvelteContext({ account: acc });
			closeModal();
		} catch (err) {
			const message = (err as Error)?.message || 'An error occurred';
			setStep('oauth-error', {
				message,
				retry: async () => {
					const acc = await context.wallet.connect({
						client,
						chain,
						strategy: provider
					});
					return acc;
				}
			});
		}
	};
</script>

<Button on:click={handleClick} variant="outline" size="auto" class="twsv-flex-1 twsv-p-3">
	<SocialIcon iconName={provider} class="twsv-h-6 twsv-w-6" />
</Button>
