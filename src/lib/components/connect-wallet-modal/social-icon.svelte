<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { type SocialIcon, socialIcons } from './social-icon.js';

	type $$Props = Omit<HTMLImgAttributes, 'src' | 'alt'> & {
		iconName: SocialIcon;
	};

	export let iconName: SocialIcon;
</script>

<img {...$$restProps} src={socialIcons[iconName]} alt="" />
