<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import type { Props } from './index.js';

	export let theme: $$Props['theme'] = 'dark';

	type $$Props = Props;
</script>

<Dialog.Root {...$$restProps}>
	<Dialog.Content {theme}>
		<Dialog.Header>
			<Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
			<Dialog.Description>
				This action cannot be undone. This will permanently delete your account and remove your data
				from our servers.
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
