<script lang="ts">
	import { getThirdwebSvelteContext } from '$/components/thirdweb-svelte-provider/context.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { SocialIcon } from '../../components/social-icon/index.js';
	import { type Chain, type ThirdwebClient } from 'thirdweb';

	const context = getThirdwebSvelteContext();
	export let client: ThirdwebClient | null = context?.client ?? null;
	export let chain: Chain | undefined = undefined;
	export let strategy: 'google' | 'apple' | 'x';

	let isLoading = false;
	const handleClick = () => {
		if (!context || !client) {
			throw new Error(
				'ThirdwebSvelteContext not found. Make sure the ThirdwebSvelteProvider is mounted.'
			);
		}
		isLoading = true;
		context.wallet.connect({
			client,
			chain,
			strategy
		});
	};
</script>

<Button on:click={handleClick} variant="outline" size="auto" class="twsv-flex-1 twsv-p-3">
	<SocialIcon iconName={strategy} class="twsv-h-6 twsv-w-6" />
</Button>
