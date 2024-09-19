import { useContext } from "react";
import Web3Context from "./Web3Context";

/**
 * Custom hook to access the Web3 context.
 *
 * This hook provides access to the Web3 context, which should be used within a `Web3Provider`.
 * If the hook is used outside of a `Web3Provider`, it will throw an error.
 *
 * @returns The current Web3 context value.
 * @throws {Error} If the hook is used outside of a `Web3Provider`.
 */
export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (context === undefined) {
    throw new Error("useWeb3 must be used within a Web3Provider");
  }
  return context;
};
