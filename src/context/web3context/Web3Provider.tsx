"use client";

import React, { useState, useEffect, ReactNode } from "react";
import Web3Context from "./Web3Context";

/**
 * Web3Provider component that provides Ethereum account management using MetaMask.
 *
 * @component
 * @param {ReactNode} children - The child components that will be wrapped by this provider.
 *
 * @returns {JSX.Element} The Web3Context provider with Ethereum account management.
 *
 * @example
 * <Web3Provider>
 *   <App />
 * </Web3Provider>
 *
 * @remarks
 * This component manages the Ethereum account state and provides functions to connect and disconnect MetaMask.
 * It also checks if MetaMask is installed and retrieves the saved Ethereum account from localStorage.
 *
 * @function
 * @name isMetaMaskInstalled
 * @description Checks if MetaMask is installed in the browser.
 * @returns {boolean} True if MetaMask is installed, false otherwise.
 *
 * @function
 * @name connectMetaMask
 * @description Connects to MetaMask and retrieves the Ethereum account.
 * @returns {Promise<void>} A promise that resolves when the account is retrieved.
 *
 * @function
 * @name disconnectMetaMask
 * @description Disconnects the Ethereum account and removes it from localStorage.
 */
export const Web3Provider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [ethAccount, setEthAccount] = useState<string | null>(null);

  useEffect(() => {
    const savedAccount = localStorage.getItem("ethAccount");
    if (savedAccount) {
      setEthAccount(savedAccount);
    }
  }, []);

  const isMetaMaskInstalled = () => {
    return typeof window.ethereum !== "undefined";
  };

  const connectMetaMask = async () => {
    if (isMetaMaskInstalled()) {
      try {
        const ethereum = window.ethereum as typeof window.ethereum & {
          request: (args: { method: string }) => Promise<string[]>;
        };
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        setEthAccount(account);
        localStorage.setItem("ethAccount", account);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      console.error("MetaMask not detected");
    }
  };

  const disconnectMetaMask = () => {
    setEthAccount(null);
    localStorage.removeItem("ethAccount");
  };

  return (
    <Web3Context.Provider
      value={{ ethAccount, connectMetaMask, disconnectMetaMask }}
    >
      {children}
    </Web3Context.Provider>
  );
};
