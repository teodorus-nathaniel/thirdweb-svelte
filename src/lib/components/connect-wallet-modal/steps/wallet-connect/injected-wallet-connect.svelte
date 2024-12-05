<script lang="ts">
	import { getWalletInfoImageQuery, getWalletInfoQuery } from '$/queries/wallets.js';
	import type { Wallet } from 'thirdweb/wallets';
	import WalletImage from '../../components/wallet-image.svelte';

	export let wallet: Wallet;

	$: walletInfoQuery = getWalletInfoQuery(wallet.id);
</script>

<div class="twsv-flex twsv-flex-col">
	<div class="twsv-flex twsv-items-center twsv-justify-center twsv-py-16">
		<WalletImage walletId={wallet.id} />
	</div>
</div>
