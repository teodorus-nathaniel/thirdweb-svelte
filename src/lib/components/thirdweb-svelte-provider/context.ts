import { getContext, setContext } from 'svelte';
import { type Writable } from 'svelte/store';
import type { ThirdwebClient } from 'thirdweb';
import type { Account, Wallet } from 'thirdweb/wallets';

type ThirdwebSvelteContext = {
	wallet: Wallet;
	client: ThirdwebClient;
	account: Writable<Account | null>;
} | null;
const getThirdwebSvelteContext = () => getContext<ThirdwebSvelteContext>('providerContext');
const setThirdwebSvelteContext = (context: ThirdwebSvelteContext) => {
	setContext('providerContext', context);
};

const connectAccount = async (account: Account) => {
	const current = getThirdwebSvelteContext();
	if (!current) return;
	const state = current.account;
	state.set(account);
};
const disconnect = async () => {
	const current = getThirdwebSvelteContext();
	if (!current) return;

	current.wallet.disconnect();
	current.account.set(null);
};

export {
	getThirdwebSvelteContext,
	setThirdwebSvelteContext,
	connectAccount,
	disconnect,
	type ThirdwebSvelteContext
};
