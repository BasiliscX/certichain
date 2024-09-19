import { createContext } from "react";

interface Web3ContextProps {
  ethAccount: string | null;
  connectMetaMask: () => Promise<void>;
  disconnectMetaMask: () => void;
}

/**
 * Context to provide Web3 related properties and methods.
 *
 * This context is used to share Web3 state and functionality across the application.
 * It is initialized with an undefined value and should be provided with a valid
 * Web3ContextProps object in a higher component.
 *
 * @type {React.Context<Web3ContextProps | undefined>}
 */
const Web3Context = createContext<Web3ContextProps | undefined>(undefined);

export default Web3Context;
