<script lang="ts">
	import { getWalletInfoQuery } from '$/queries/wallets.js';
	import type { Wallet } from 'thirdweb/wallets';
	import WalletLogoSpinner from './wallet-logo-spinner.svelte';
	import { getInstalledWalletData } from '../wallet-selector/index.js';

	export let wallet: Wallet;

	$: installedWalletInfo = getInstalledWalletData(wallet.id);
	$: walletInfoQuery = getWalletInfoQuery(wallet.id);

	$: walletName = installedWalletInfo?.info.name || $walletInfoQuery.data?.name;
</script>

<div class="twsv-flex twsv-flex-col">
	<div class="twsv-flex twsv-flex-col twsv-items-center twsv-justify-center">
		<WalletLogoSpinner walletId={wallet.id} class="twsv-py-14" />
		<div class="twsv-flex twsv-flex-col twsv-gap-4 twsv-pb-6 twsv-text-center">
			<span class="twsv-text-xl twsv-font-semibold">Awaiting Confirmation</span>
			<span class="twsv-max-w-64 twsv-text-balance twsv-font-medium twsv-text-muted-foreground"
				>Accept the connection request in {walletName}</span
			>
		</div>
	</div>
</div>
