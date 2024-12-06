import type { DialogProps } from '../ui/dialog/index.js';
import ConnectWalletModal from '$/components/connect-wallet-modal/connect-wallet-modal.svelte';
import type { Chain } from 'thirdweb';

type ConnectWalletModalProps = DialogProps & {
	/**
	 * The [`Chain`](https://portal.thirdweb.com/references/typescript/v5/Chain) object of the blockchain you want the wallet to connect to
	 *
	 * If a `chain` is not specified, Wallet will be connected to whatever is the default set in the wallet.
	 *
	 * If a `chain` is specified, Wallet will be prompted to switch to given chain after connection if it is not already connected to it.
	 * This ensures that the wallet is connected to the correct blockchain before interacting with your app.
	 *
	 * The `ConnectButton` also shows a "Switch Network" button until the wallet is connected to the specified chain. Clicking on the "Switch Network" button triggers the wallet to switch to the specified chain.
	 *
	 * You can create a `Chain` object using the [`defineChain`](https://portal.thirdweb.com/references/typescript/v5/defineChain) function.
	 * At minimum, you need to pass the `id` of the blockchain to `defineChain` function to create a `Chain` object.
	 * @example
	 * ```svelte
	 * <script lang='ts'>
	 *   import { polygon } from "thirdweb/chains";
	 * </script>
	 *
	 * <ConnectWalletModal chain={polygon} />
	 * ```
	 */
	chain?: Chain;

	/**
	 * Array of chains that your app supports.
	 *
	 * This is only relevant if your app is a multi-chain app and works across multiple blockchains.
	 * If your app only works on a single blockchain, you should only specify the `chain` prop.
	 *
	 * They will be sent to wallet at the time of connection if the wallet so that users can switch between the chains post connection easily
	 *
	 * ```tsx
	 * await wallet.connect({
	 *  chain: polygon,
	 *  optionalChains: [polygon, ethereum],
	 * })
	 * ```
	 *
	 * You can create a `Chain` object using the [`defineChain`](https://portal.thirdweb.com/references/typescript/v5/defineChain) function.
	 * At minimum, you need to pass the `id` of the blockchain to `defineChain` function to create a `Chain` object.
	 *
	 * ```tsx
	 * import { defineChain } from "thirdweb/react";
	 *
	 * const polygon = defineChain({
	 *   id: 137,
	 * });
	 * ```
	 */
	chains?: Chain[];

	/**
	 * Set the theme for the `ConnectButton` component. By default it is set to `"dark"`
	 *
	 * theme can be set to either `"dark"`, `"light"`.
	 */
	theme?: 'light' | 'dark';

	/**
	 * Configure options for WalletConnect
	 *
	 * By default WalletConnect uses the thirdweb's default project id.
	 * Setting your own project id is recommended.
	 *
	 * You can create a project id by signing up on [walletconnect.com](https://walletconnect.com/)
	 */
	walletConnect?: { projectId: string };
};

export { type ConnectWalletModalProps, ConnectWalletModal };
