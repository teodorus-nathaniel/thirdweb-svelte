import ProviderSelector from './provider-selector.svelte';

const SUPPORTED_SOCIAL_PROVIDERS = ['google', 'apple', 'x'] as const;
type SupportedSocialProvider = (typeof SUPPORTED_SOCIAL_PROVIDERS)[number];

export { ProviderSelector, type SupportedSocialProvider, SUPPORTED_SOCIAL_PROVIDERS };
