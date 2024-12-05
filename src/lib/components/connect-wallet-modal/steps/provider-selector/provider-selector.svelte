<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { SocialIcon } from '../../components/social-icon/index.js';
	import type { ConnectWalletModalStepProps } from '../types.js';
	import SocialProviderButton from './social-provider-button.svelte';

	type $$Props = ConnectWalletModalStepProps;
	export let setStep: $$Props['setStep'];
</script>

<div class="twsv-flex twsv-items-center twsv-gap-3">
	<SocialProviderButton strategy="google" />
	<SocialProviderButton strategy="apple" />
	<SocialProviderButton strategy="x" />
</div>
<div class="twsv-relative">
	<Separator orientation="horizontal" class="twsv-relative twsv-my-6" />
	<span
		class="twsv-absolute twsv-left-1/2 twsv-top-1/2 -twsv-translate-x-1/2 -twsv-translate-y-1/2 twsv-bg-background twsv-px-3 twsv-text-sm twsv-text-muted-foreground"
		>OR</span
	>
</div>
<Button
	class="twsv-justify-start twsv-gap-3"
	variant="outline"
	on:click={() => setStep('wallet-selector')}
>
	<SocialIcon iconName="wallet" class="twsv-h-5  twsv-w-5" />
	<span class="twsv-font-medium">Connect a Wallet</span>
</Button>
