import type { DialogProps } from '../ui/dialog/index.js';
import ConnectWalletModal from '$/components/connect-wallet-modal/connect-wallet-modal.svelte';
import type { Chain } from 'thirdweb';

type ConnectWalletModalProps = DialogProps & {
	chain?: Chain;
	theme?: 'light' | 'dark';
};

export { type ConnectWalletModalProps, ConnectWalletModal };
