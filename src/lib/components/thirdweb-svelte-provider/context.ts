import { getContext, setContext } from 'svelte';
import { type Writable } from 'svelte/store';
import type { ThirdwebClient } from 'thirdweb';
import type { Account, Wallet } from 'thirdweb/wallets';

type ThirdwebSvelteContext = {
	wallet: Wallet;
	client: ThirdwebClient;
	account: Writable<Account | null>;
	disconnect: () => void;
};
const getThirdwebSvelteContext = () => getContext<ThirdwebSvelteContext>('providerContext');
const setThirdwebSvelteContext = (context: ThirdwebSvelteContext) => {
	setContext('providerContext', context);
};

export { getThirdwebSvelteContext, setThirdwebSvelteContext, type ThirdwebSvelteContext };
