<script lang="ts">
	import { ConnectWalletModal } from '$/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	let isOpen = true;
</script>

<div class="twsv-flex twsv-items-center twsv-justify-center twsv-w-screen twsv-h-screen">
	<Button size="lg" on:click={() => (isOpen = !isOpen)}>Connect</Button>
</div>
<ConnectWalletModal open={isOpen} onOpenChange={(open) => (isOpen = open)} />
