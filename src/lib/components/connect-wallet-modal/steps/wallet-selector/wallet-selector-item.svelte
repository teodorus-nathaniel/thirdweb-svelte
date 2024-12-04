<script lang="ts">
	import { getWalletInfo, type Wallet } from 'thirdweb/wallets';
	import { getInstalledWalletProviders } from './index.js';
	import type { ConnectWalletModalStep } from '../types.js';
	import Button from '$/components/ui/button/button.svelte';
	import { createQuery } from '@tanstack/svelte-query';

	export let wallet: Wallet;
	export let setStep: (step: ConnectWalletModalStep) => void;

	$: installedWalletInfo = getInstalledWalletProviders().find((x) => x.info.rdns === wallet.id);
	$: installedWalletImage = installedWalletInfo?.info.icon;

	const walletInfoQuery = createQuery({
		queryKey: ['wallet-info', wallet.id],
		queryFn: () => getWalletInfo(wallet.id)
	});

	const walletInfoImageQuery = createQuery({
		queryKey: ['wallet-info-image', wallet.id],
		queryFn: () => getWalletInfo(wallet.id, true),
		enabled: !installedWalletImage
	});

	$: image = installedWalletImage || $walletInfoImageQuery.data;
	$: walletName = installedWalletInfo?.info.name || $walletInfoQuery.data?.name;
</script>

<li class="twsv-w-full">
	<Button
		size="auto"
		class="twsv-w-full twsv-justify-start twsv-gap-3 twsv-p-2 twsv-transition-transform hover:twsv-scale-[1.01]"
		variant="ghost"
	>
		<img class="twsv-h-12 twsv-w-12 twsv-rounded-lg" src={image} alt="" />
		<div class="twsv-flex twsv-flex-col twsv-text-left">
			<span class="twsv-font-semibold">{walletName}</span>
			{#if installedWalletInfo}
				<span class="twsv-text-sm twsv-font-normal twsv-text-muted-foreground">Installed</span>
			{/if}
		</div>
	</Button>
</li>
