import { getContext, setContext } from 'svelte';
import type { ThirdwebClient } from 'thirdweb';
import type { Account, Wallet } from 'thirdweb/wallets';

type ThirdwebSvelteContext = {
	wallet: Wallet;
	client: ThirdwebClient;
	account: Account | null;
} | null;
const getThirdwebSvelteContext = () => getContext<ThirdwebSvelteContext>('providerContext');
const setThirdwebSvelteContext = (wallet: Partial<ThirdwebSvelteContext>) => {
	const current = getThirdwebSvelteContext();
	if (current) {
		setContext('providerContext', { ...current, ...wallet });
		return;
	}
	setContext('providerContext', wallet);
};

export { getThirdwebSvelteContext, setThirdwebSvelteContext, type ThirdwebSvelteContext };
