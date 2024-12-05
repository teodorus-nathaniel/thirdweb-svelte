import { createQuery } from '@tanstack/svelte-query';
import { getWalletInfo, type WalletId } from 'thirdweb/wallets';

export function getWalletInfoQuery(walletId: WalletId, config?: { enabled: boolean }) {
	return createQuery({
		...config,
		queryKey: ['wallet-info', walletId],
		queryFn: () => getWalletInfo(walletId, false),
		retry: false,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		enabled: !!walletId
	});
}

export function getWalletInfoImageQuery(walletId: WalletId, config?: { enabled: boolean }) {
	return createQuery({
		...config,
		queryKey: ['wallet-info-image', walletId],
		queryFn: () => getWalletInfo(walletId, true),
		retry: false,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		enabled: !!walletId
	});
}
