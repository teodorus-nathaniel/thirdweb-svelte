<script lang="ts">
	import type { ConnectWalletModalStepProps } from '../index.js';
	import { getWalletInfoQuery } from '$/queries/wallets.js';
	import { Spinner } from '$/components/ui/spinner/index.js';
	import { getInstalledWalletData, getInstalledWalletProviders } from '../wallet-selector/index.js';
	import InjectedWalletConnect from './injected-wallet-connect.svelte';
	import { isMobile } from '$/utils/platform.js';
	import type { Chain } from 'thirdweb';
	import type { Account, Wallet, WCSupportedWalletIds } from 'thirdweb/wallets';
	import DeepLinkConnect from './deep-link-connect.svelte';
	import WalletconnectConnect from './walletconnect-connect.svelte';
	import WalletconnectStandaloneConnect from './walletconnect-standalone-connect.svelte';

	type $$Props = ConnectWalletModalStepProps<'wallet-connect'>;
	export let additionalProps: $$Props['additionalProps'];
	export let chain: Chain | undefined;
	export let onFinishConnect: (account: Account) => void;
	export let walletConnect: $$Props['walletConnect'];
	export let chains: $$Props['chains'] = undefined;
	export let setModalOpen: $$Props['setModalOpen'];

	$: wallet = additionalProps.wallet;
	$: walletInfoQuery = getWalletInfoQuery(wallet.id);

	$: preferDeepLink = (wallet.getConfig() as { preferDeepLink: boolean | undefined } | undefined)
		?.preferDeepLink;

	$: wcSupportedWallet = wallet as Wallet<WCSupportedWalletIds>;
	$: wcWallet = wallet as Wallet<'walletConnect'>;
</script>

{#if $walletInfoQuery.isLoading}
	<div class="twsv-flex twsv-h-80 twsv-items-center twsv-justify-center">
		<Spinner class="twsv-h-16 twsv-w-16" />
	</div>
{:else if !$walletInfoQuery.data}
	{@const injectedProvider = getInstalledWalletData(wallet.id)}
	{#if injectedProvider}
		<InjectedWalletConnect {onFinishConnect} {wallet} {chain} />
	{:else}
		<!-- TODO: unsupported screen -->
	{/if}
{:else}
	{@const isInstalled = getInstalledWalletProviders().find((w) => w.info.rdns === wallet.id)}
	{#if $walletInfoQuery.data.deepLink && !isInstalled && preferDeepLink && isMobile()}
		<DeepLinkConnect deepLinkPrefix={$walletInfoQuery.data.deepLink.mobile} walletId={wallet.id} />
	{:else if $walletInfoQuery.data.rdns && isInstalled}
		<InjectedWalletConnect {chains} {onFinishConnect} {wallet} {chain} />
	{:else if $walletInfoQuery.data.mobile.native && $walletInfoQuery.data.mobile.universal}
		<WalletconnectConnect
			{chains}
			{chain}
			wallet={wcSupportedWallet}
			walletInfo={$walletInfoQuery.data}
			{onFinishConnect}
			{walletConnect}
		/>
	{:else if wallet.id === 'walletConnect'}
		<WalletconnectStandaloneConnect
			{chains}
			{chain}
			wallet={wcWallet}
			walletInfo={$walletInfoQuery.data}
			{onFinishConnect}
			{walletConnect}
			{setModalOpen}
		/>
	{:else if wallet.id}
		<!-- TODO: CoinbaseSDKWalletConnectUI -->
	{:else}
		<!-- // if can't connect in any way - show get started screen -->
	{/if}
{/if}
