export type ConnectWalletModalStep = 'provider-selector' | 'wallet-selector';
export type ConnectWalletModalStepProps = {
	setStep: (step: ConnectWalletModalStep) => void;
};
