<script lang="ts">
	import type { ConnectWalletModalStepProps } from '../index.js';
	import { getWalletInfoQuery } from '$/queries/wallets.js';
	import { Spinner } from '$/components/ui/spinner/index.js';
	import { getInstalledWalletData, getInstalledWalletProviders } from '../wallet-selector/index.js';
	import InjectedWalletConnect from './injected-wallet-connect.svelte';
	import { isMobile } from '$/utils/platform.js';
	import type { Chain } from 'thirdweb';

	type $$Props = ConnectWalletModalStepProps<'wallet-connect'>;
	export let additionalProps: $$Props['additionalProps'];
	export let chain: Chain | undefined;

	$: wallet = additionalProps.wallet;
	$: walletInfoQuery = getWalletInfoQuery(wallet.id);

	$: preferDeepLink = (wallet.getConfig() as { preferDeepLink: boolean | undefined } | undefined)
		?.preferDeepLink;
</script>

{#if $walletInfoQuery.isLoading}
	<div class="twsv-flex twsv-h-80 twsv-items-center twsv-justify-center">
		<Spinner class="twsv-h-16 twsv-w-16" />
	</div>
{:else if !$walletInfoQuery.data}
	{@const injectedProvider = getInstalledWalletData(wallet.id)}
	{#if injectedProvider}
		<InjectedWalletConnect {wallet} {chain} />
	{:else}
		<!-- TODO: unsupported screen -->
	{/if}
{:else}
	{@const isInstalled = getInstalledWalletProviders().find((w) => w.info.rdns === wallet.id)}
	{#if $walletInfoQuery.data.deepLink && !isInstalled && preferDeepLink && isMobile()}
		<!-- TODO: DeepLinkConnectUI -->
	{:else if $walletInfoQuery.data.rdns && isInstalled}
		<InjectedWalletConnect {wallet} {chain} />
	{:else if $walletInfoQuery.data.mobile.native && $walletInfoQuery.data.mobile.universal}
		<!-- TODO: WalletConnectConnection -->
	{:else if wallet.id === 'walletConnect'}
		<!-- TODO: WalletConnectStandaloneConnection -->
	{:else if wallet.id}
		<!-- TODO: CoinbaseSDKWalletConnectUI -->
	{:else}
		<!-- // if can't connect in any way - show get started screen -->
	{/if}
{/if}
