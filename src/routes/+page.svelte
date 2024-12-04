<script lang="ts">
	import { ConnectWalletModal } from '$/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	let isOpen = false;
</script>

<Button on:click={() => (isOpen = !isOpen)}>asdfasdf</Button>
<ConnectWalletModal open={isOpen} onOpenChange={(open) => (isOpen = open)} />
