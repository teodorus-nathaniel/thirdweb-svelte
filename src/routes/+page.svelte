<script lang="ts">
	import { ConnectWalletModal } from '$lib/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	let isOpen = true;
</script>

<div class="twsv-flex twsv-h-screen twsv-w-screen twsv-items-center twsv-justify-center">
	<Button size="lg" on:click={() => (isOpen = !isOpen)}>Connect</Button>
</div>
<ConnectWalletModal open={isOpen} onOpenChange={(open) => (isOpen = open)} />
