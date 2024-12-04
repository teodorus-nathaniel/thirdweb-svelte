<script lang="ts">
	import { ThirdwebSvelteProvider } from '$/components/thirdweb-svelte-provider/index.js';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher defaultMode="dark" />
<ThirdwebSvelteProvider>
	<slot />
</ThirdwebSvelteProvider>
