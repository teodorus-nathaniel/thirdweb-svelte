<script lang="ts">
	import { getWalletInfoQuery } from '$/queries/wallets.js';
	import type { Wallet } from 'thirdweb/wallets';
	import WalletLogoSpinner from './wallet-logo-spinner.svelte';
	import { getInstalledWalletData } from '../wallet-selector/index.js';
	import type { Chain } from 'thirdweb';
	import { wait } from '$/utils.js';
	import { getThirdwebSvelteContext } from '$/components/thirdweb-svelte-provider/context.js';
	import { Button } from '$/components/ui/button/index.js';
	import RotateCw from 'lucide-svelte/icons/rotate-cw';

	export let wallet: Wallet;
	export let chain: Chain | undefined = undefined;

	const context = getThirdwebSvelteContext();

	let connectPrompted = false;
	let errorConnecting = false;
	const connectToExtension = async () => {
		try {
			connectPrompted = true;
			errorConnecting = false;
			await wait(1000);
			await wallet.connect({
				client: context.client,
				chain
			});

			// TODO: done handling
			// done();
		} catch (e) {
			errorConnecting = true;
			console.error(e);
		}
	};

	$: connectToExtension();

	$: installedWalletInfo = getInstalledWalletData(wallet.id);
	$: walletInfoQuery = getWalletInfoQuery(wallet.id);

	$: walletName = installedWalletInfo?.info.name || $walletInfoQuery.data?.name;
</script>

<div class="twsv-flex twsv-flex-col">
	<div class="twsv-flex twsv-flex-col twsv-items-center twsv-justify-center">
		<WalletLogoSpinner error={errorConnecting} walletId={wallet.id} class="twsv-py-14" />
		<div
			class="twsv-flex twsv-w-full twsv-flex-col twsv-items-center twsv-gap-4 twsv-pb-6 twsv-text-center"
		>
			{#if !errorConnecting}
				<span class="twsv-text-xl twsv-font-semibold">Awaiting Confirmation</span>
				<span class="twsv-max-w-64 twsv-text-balance twsv-font-medium twsv-text-muted-foreground"
					>Accept the connection request in {walletName}</span
				>
			{:else}
				<span class="twsv-text-xl twsv-font-semibold">Connection Failed</span>
				<Button variant="accent" on:click={connectToExtension}>
					<div class="twsv-flex twsv-items-center twsv-gap-2 twsv-text-sm">
						<RotateCw strokeWidth={1} class="twsv-h-4 twsv-w-4" />
						<span>Try Again</span>
					</div>
				</Button>
			{/if}
		</div>
	</div>
</div>
