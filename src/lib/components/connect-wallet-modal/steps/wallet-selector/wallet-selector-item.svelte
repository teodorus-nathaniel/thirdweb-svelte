<script lang="ts">
	import { type Wallet } from 'thirdweb/wallets';
	import { getInstalledWalletProviders } from './index.js';
	import type { ConnectWalletModalStepProps } from '../index.js';
	import Button from '$/components/ui/button/button.svelte';
	import Skeleton from '$/components/ui/skeleton/skeleton.svelte';
	import { getWalletInfoQuery } from '$/queries/wallets.js';
	import WalletImage from '../../components/wallet-image.svelte';

	export let wallet: Wallet;
	export let setStep: ConnectWalletModalStepProps<'wallet-selector'>['setStep'];

	$: installedWalletInfo = getInstalledWalletProviders().find((x) => x.info.rdns === wallet.id);
	$: walletInfoQuery = getWalletInfoQuery(wallet.id);

	$: walletName = installedWalletInfo?.info.name || $walletInfoQuery.data?.name;
</script>

<li class="twsv-w-full">
	<Button
		size="auto"
		class="twsv-w-full twsv-justify-start twsv-gap-3 twsv-p-2 twsv-transition-transform hover:twsv-scale-[1.01]"
		variant="ghost"
		on:click={async () => {
			await wallet.onConnectRequested?.();
			setStep('wallet-connect', { wallet });
		}}
	>
		<WalletImage walletId={wallet.id} />
		<div class="twsv-flex twsv-flex-col twsv-text-left">
			{#if walletName}
				<span class="twsv-font-semibold">{walletName}</span>
			{:else}
				<Skeleton class="twsv-h-4 twsv-w-24" />
			{/if}
			{#if installedWalletInfo}
				<span class="twsv-text-sm twsv-font-normal twsv-text-muted-foreground">Installed</span>
			{/if}
		</div>
	</Button>
</li>
