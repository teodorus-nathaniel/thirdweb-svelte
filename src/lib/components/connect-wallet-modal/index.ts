import type { DialogProps } from '../ui/dialog/index.js';
import ConnectWalletModal from '$/components/connect-wallet-modal/connect-wallet-modal.svelte';

type Props = DialogProps & {
	theme?: 'light' | 'dark';
};

export { type Props, type Props as ConnectWalletModalProps, ConnectWalletModal };
