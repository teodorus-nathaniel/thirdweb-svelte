<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Button } from '../ui/button/index.js';
	import { Separator } from '../ui/separator/index.js';
	import Thirdweb from './thirdweb.svelte';
	import type { Props } from './index.js';
	import SocialIcon from './social-icon.svelte';

	export let theme: $$Props['theme'] = 'dark';

	type $$Props = Props;
</script>

<Dialog.Root {...$$restProps}>
	<Dialog.Content {theme} class="twsv-pb-4">
		<Dialog.Header>
			<Dialog.Title class="twsv-text-xl">Sign in</Dialog.Title>
		</Dialog.Header>
		<div class="twsv-flex twsv-flex-col">
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
			<div class="twsv-relative">
				<Separator orientation="horizontal" class="twsv-my-6 twsv-relative" />
				<span
					class="twsv-absolute twsv-left-1/2 twsv-top-1/2 -twsv-translate-y-1/2 -twsv-translate-x-1/2 twsv-px-3 twsv-text-muted-foreground twsv-text-sm twsv-bg-background"
					>OR</span
				>
			</div>
			<Button class="twsv-justify-start twsv-gap-3" variant="outline">
				<SocialIcon iconName="wallet" class="twsv-w-5  twsv-h-5" />
				<span class="twsv-font-medium">Connect a Wallet</span>
			</Button>
			<Button
				href="https://thirdweb.com/connect?utm_source=cw_text"
				variant="link"
				size="auto"
				target="_blank"
				class="twsv-mt-8 twsv-flex twsv-justify-center twsv-items-center twsv-text-muted-foreground twsv-gap-1 !twsv-no-underline hover:twsv-text-foreground focus-visible:twsv-text-foreground twsv-mx-auto twsv-w-fit"
			>
				<span class="twsv-text-sm twsv-leading-normal twsv-font-semibold">Powered by</span>
				<Thirdweb height={12} class="twsv-relative twsv-top-px" />
			</Button>
		</div>
	</Dialog.Content>
</Dialog.Root>
