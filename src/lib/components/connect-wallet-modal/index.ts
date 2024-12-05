import type { DialogProps } from '../ui/dialog/index.js';
import ConnectWalletModal from '$/components/connect-wallet-modal/connect-wallet-modal.svelte';

type ConnectWalletModalProps = DialogProps & {
	theme?: 'light' | 'dark';
};

export { type ConnectWalletModalProps, ConnectWalletModal };
