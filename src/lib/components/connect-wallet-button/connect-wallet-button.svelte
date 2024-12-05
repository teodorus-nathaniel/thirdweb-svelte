<script lang="ts">
	import { getThirdwebSvelteContext } from '$/components/thirdweb-svelte-provider/index.js';
	import ConnectWalletModal from '../connect-wallet-modal/connect-wallet-modal.svelte';
	import { Button, type ButtonProps } from '../ui/button/index.js';
	import type { ConnectWalletButtonProps } from './index.js';

	type $$Props = ConnectWalletButtonProps;

	const context = getThirdwebSvelteContext();
	$: account = context?.account;

	let isOpen = false;
</script>

{#if !account}
	<Button size="lg" on:click={() => (isOpen = !isOpen)}>Connect</Button>
{:else}
	<Button size="lg" variant="ghost">Connected</Button>
{/if}
<ConnectWalletModal open={isOpen} onOpenChange={(open) => (isOpen = open)} />
