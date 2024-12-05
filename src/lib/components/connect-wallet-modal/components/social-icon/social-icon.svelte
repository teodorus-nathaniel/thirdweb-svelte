<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { type SocialIconName, socialIcons } from './index.js';

	type $$Props = Omit<HTMLImgAttributes, 'src' | 'alt'> & {
		iconName: SocialIconName;
	};

	export let iconName: SocialIconName;
</script>

<img {...$$restProps} src={socialIcons[iconName]} alt="" />
