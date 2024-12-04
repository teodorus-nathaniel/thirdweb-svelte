<script lang="ts">
	import type { ConnectWalletModalStepProps } from '../types.js';
	import { getDefaultWallets, getInstalledWallets, sortWallets } from './index.js';
	import { type Wallet } from 'thirdweb/wallets';
	import WalletSelectorItem from './wallet-selector-item.svelte';
	import Separator from '$/components/ui/separator/separator.svelte';
	import Button from '$/components/ui/button/button.svelte';

	type $$Props = ConnectWalletModalStepProps;
	export let setStep: $$Props['setStep'];

	const defaultWallets = getDefaultWallets();
	const installedWallets = getInstalledWallets();
	let _wallets: Wallet[] = [...defaultWallets];

	for (const iW of installedWallets) {
		if (!defaultWallets.find((w) => w.id === iW.id)) {
			_wallets.push(iW);
		}
	}

	const sorted = sortWallets(_wallets);
</script>

<div class="-twsv-ml-6 -twsv-mr-6 twsv-flex twsv-flex-col">
	<ul
		class="twsv-scrollbar-none twsv-flex twsv-max-h-96 twsv-flex-col twsv-items-center twsv-overflow-y-auto twsv-px-4 twsv-pb-6"
	>
		{#each sorted as wallet}
			<WalletSelectorItem {wallet} {setStep} />
		{/each}
	</ul>
	<Separator orientation="horizontal" />
	<div class="twsv-flex twsv-items-center twsv-justify-between twsv-p-6 twsv-pb-0 twsv-text-sm">
		<span class="twsv-text-muted-foreground">New to wallets?</span>
		<Button
			variant="link"
			size="auto"
			class="twsv-text-accent"
			href="https://blog.thirdweb.com/web3-wallet/"
			target="_blank">Get Started</Button
		>
	</div>
</div>
