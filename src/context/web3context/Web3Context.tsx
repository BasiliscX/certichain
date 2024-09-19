import { createContext } from "react";

interface Web3ContextProps {
  ethAccount: string | null;
  connectMetaMask: () => Promise<void>;
  disconnectMetaMask: () => void;
}

const Web3Context = createContext<Web3ContextProps | undefined>(undefined);

export default Web3Context;
