import type { Chain } from 'thirdweb';
import type { Account, Wallet } from 'thirdweb/wallets';

export const connectWalletModalSteps = [
	'provider-selector',
	'oauth-loading',
	'oauth-error',
	'wallet-selector',
	'wallet-connect'
] as const;
export type ConnectWalletModalStep = (typeof connectWalletModalSteps)[number];

type ConnectWalletModalStepsAdditionalProps = {
	'provider-selector': undefined;
	'oauth-loading': undefined;
	'oauth-error': {
		message: string;
		retry: () => Promise<Account>;
	};
	'wallet-selector': undefined;
	'wallet-connect': {
		wallet: Wallet;
	};
};

export type ConnectWalletModalStepProps<CurrentStep extends ConnectWalletModalStep> = {
	chain: Chain | undefined;
	setStep: <Step extends ConnectWalletModalStep>(
		step: Step,
		additionalProps: ConnectWalletModalStepsAdditionalProps[Step]
	) => void;
	closeModal: () => void;
	additionalProps: ConnectWalletModalStepsAdditionalProps[CurrentStep];
};
