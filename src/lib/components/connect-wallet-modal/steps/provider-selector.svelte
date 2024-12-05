<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { SocialIcon } from '../components/social-icon/index.js';
	import type { ConnectWalletModalStepProps } from './types.js';

	type $$Props = ConnectWalletModalStepProps;
	export let setStep: $$Props['setStep'];
</script>

<div class="twsv-flex twsv-items-center twsv-gap-3">
	<Button variant="outline" size="auto" class="twsv-p-3 twsv-flex-1">
		<SocialIcon iconName="google" class="twsv-h-6 twsv-w-6" />
	</Button>
	<Button variant="outline" size="auto" class="twsv-p-3 twsv-flex-1">
		<SocialIcon iconName="apple" class="twsv-h-6 twsv-w-6" />
	</Button>
	<Button variant="outline" size="auto" class="twsv-p-3 twsv-flex-1">
		<SocialIcon iconName="x" class="twsv-h-6 twsv-w-6" />
	</Button>
</div>
<div class="twsv-relative">
	<Separator orientation="horizontal" class="twsv-my-6 twsv-relative" />
	<span
		class="twsv-absolute twsv-left-1/2 twsv-top-1/2 -twsv-translate-y-1/2 -twsv-translate-x-1/2 twsv-px-3 twsv-text-muted-foreground twsv-text-sm twsv-bg-background"
		>OR</span
	>
</div>
<Button
	class="twsv-justify-start twsv-gap-3"
	variant="outline"
	on:click={() => setStep('wallet-selector')}
>
	<SocialIcon iconName="wallet" class="twsv-w-5  twsv-h-5" />
	<span class="twsv-font-medium">Connect a Wallet</span>
</Button>
