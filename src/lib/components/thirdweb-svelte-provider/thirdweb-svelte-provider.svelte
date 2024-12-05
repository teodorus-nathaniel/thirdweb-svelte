<script lang="ts">
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { inAppWallet } from 'thirdweb/wallets';
	import { setThirdwebSvelteContext } from './context.js';
	import { createThirdwebClient } from 'thirdweb';

	export let clientId: string;

	const client = createThirdwebClient({
		clientId: clientId
	});
	const wallet = inAppWallet();
	setThirdwebSvelteContext({ wallet, client });

	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<slot />
</QueryClientProvider>
