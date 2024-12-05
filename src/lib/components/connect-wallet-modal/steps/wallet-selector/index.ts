import { createStore, type EIP6963ProviderDetail, type Store } from 'mipd';
import WalletSelector from './wallet-selector.svelte';
import {
	createWallet,
	type InjectedSupportedWalletIds,
	type Wallet,
	type WalletId
} from 'thirdweb/wallets';
import type { Chain } from 'thirdweb';
import { COINBASE, METAMASK, RAINBOW, ZERION } from './constants.js';

const mipdStore: Store | undefined = (() =>
	typeof window !== 'undefined' ? createStore() : undefined)();

function getInstalledWalletProviders(): readonly EIP6963ProviderDetail[] {
	const providers = mipdStore?.getProviders() || [];

	for (const provider of providers) {
		// Map io.metamask.mobile to io.metamask rdns to fix double entry issue in MetaMask mobile browser
		if ((provider.info.rdns as string) === 'io.metamask.mobile') {
			provider.info.rdns = 'io.metamask';
			break;
		}
	}

	return providers;
}

function getInstalledWallets() {
	let _installedWallets: Wallet[] = [];
	if (_installedWallets.length === 0) {
		const providers = getInstalledWalletProviders();
		const walletIds = providers.map((provider) => provider.info.rdns);
		_installedWallets = walletIds.map((w) => createWallet(w as InjectedSupportedWalletIds));
	}

	return _installedWallets;
}

type AppMetadata = {
	/**
	 * the name of your app
	 */
	name: string;
	/**
	 * the url where your app is hosted
	 */
	url?: string;
	/**
	 * optional - a description of your app
	 */
	description?: string;
	/**
	 * optional - a url that points to a logo (or favicon) of your app
	 */
	logoUrl?: string;
};
function getDefaultWallets(options?: { appMetadata?: AppMetadata; chains?: Chain[] }): Wallet[] {
	return [
		createWallet(METAMASK),
		createWallet(COINBASE, {
			appMetadata: options?.appMetadata,
			chains: options?.chains
		}),
		createWallet(RAINBOW),
		createWallet(ZERION),
		createWallet('com.trustwallet.app')
	];
}

function sortWallets<T extends { id: string }>(
	wallets: T[],
	recommendedWallets?: { id: WalletId }[]
): T[] {
	const providers = getInstalledWalletProviders();
	return (
		wallets
			// show the installed wallets first
			.sort((a, b) => {
				const aInstalled = providers.find((p) => p.info.rdns === a.id);
				const bInstalled = providers.find((p) => p.info.rdns === b.id);

				if (aInstalled && !bInstalled) {
					return -1;
				}
				if (!aInstalled && bInstalled) {
					return 1;
				}
				return 0;
			})
			// show the recommended wallets even before that
			.sort((a, b) => {
				const aIsRecommended = recommendedWallets?.find((w) => w.id === a.id);
				const bIsRecommended = recommendedWallets?.find((w) => w.id === b.id);

				if (aIsRecommended && !bIsRecommended) {
					return -1;
				}
				if (!aIsRecommended && bIsRecommended) {
					return 1;
				}
				return 0;
			})
			// show in-app wallets first
			.sort((a, b) => {
				const aIsInApp = a.id === 'inApp' || a.id === 'embedded';
				const bIsInApp = b.id === 'inApp' || b.id === 'embedded';
				if (aIsInApp && !bIsInApp) {
					return -1;
				}
				if (!aIsInApp && bIsInApp) {
					return 1;
				}
				return 0;
			})
	);
}

export {
	WalletSelector,
	getInstalledWalletProviders,
	getInstalledWallets,
	getDefaultWallets,
	sortWallets
};
