<script lang="ts">
	import { ThirdwebSvelteProvider } from '$/components/thirdweb-svelte-provider/index.js';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { PUBLIC_THIRDWEB_CLIENT_ID } from '$env/static/public';
</script>

<ModeWatcher defaultMode="dark" />
<ThirdwebSvelteProvider clientId={PUBLIC_THIRDWEB_CLIENT_ID}>
	<slot />
</ThirdwebSvelteProvider>
