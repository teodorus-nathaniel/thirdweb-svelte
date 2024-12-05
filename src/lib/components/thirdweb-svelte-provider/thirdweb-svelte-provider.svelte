<script lang="ts">
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { inAppWallet, type Account } from 'thirdweb/wallets';
	import { setThirdwebSvelteContext } from './context.js';
	import { createThirdwebClient } from 'thirdweb';
	import { writable } from 'svelte/store';

	export let clientId: string;

	const client = createThirdwebClient({
		clientId: clientId
	});
	const wallet = inAppWallet();
	const account = writable<Account | null>(null);
	setThirdwebSvelteContext({ wallet, client, account });

	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<slot />
</QueryClientProvider>
