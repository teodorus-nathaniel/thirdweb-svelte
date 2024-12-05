import type { Account } from 'thirdweb/wallets';

export const connectWalletModalSteps = [
	'provider-selector',
	'wallet-selector',
	'oauth-loading',
	'oauth-error'
] as const;
export type ConnectWalletModalStep = (typeof connectWalletModalSteps)[number];

type ConnectWalletModalStepsAdditionalProps = {
	'provider-selector': undefined;
	'wallet-selector': undefined;
	'oauth-loading': undefined;
	'oauth-error': {
		message: string;
		retry: () => Promise<Account>;
	};
};

export type ConnectWalletModalStepProps<CurrentStep extends ConnectWalletModalStep> = {
	setStep: <Step extends ConnectWalletModalStep>(
		step: Step,
		additionalProps: ConnectWalletModalStepsAdditionalProps[Step]
	) => void;
	closeModal: () => void;
	additionalProps: ConnectWalletModalStepsAdditionalProps[CurrentStep];
};
