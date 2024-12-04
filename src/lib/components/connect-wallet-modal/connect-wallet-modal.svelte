<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Button } from '../ui/button/index.js';
	import type { Props } from './index.js';
	import SocialIcon from './social-icon.svelte';

	export let theme: $$Props['theme'] = 'dark';

	type $$Props = Props;
</script>

<Dialog.Root {...$$restProps}>
	<Dialog.Content {theme}>
		<Dialog.Header>
			<Dialog.Title class="twsv-text-xl">Sign in</Dialog.Title>
		</Dialog.Header>
		<div class="twsv-flex twsv-items-center twsv-gap-3 twsv-mt-2">
			<Button variant="outline" size="auto" class="twsv-p-3 twsv-flex-1">
				<SocialIcon iconName="google" class="twsv-h-6 twsv-w-6" />
			</Button>
			<Button variant="outline" size="auto" class="twsv-p-3 twsv-flex-1">
				<SocialIcon iconName="apple" class="twsv-h-6 twsv-w-6" />
			</Button>
			<Button variant="outline" size="auto" class="twsv-p-3 twsv-flex-1">
				<SocialIcon iconName="x" class="twsv-h-6 twsv-w-6" />
			</Button>
		</div>
	</Dialog.Content>
</Dialog.Root>
