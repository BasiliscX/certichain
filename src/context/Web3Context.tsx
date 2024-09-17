"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface Web3ContextProps {
  ethAccount: string | null;
  connectMetaMask: () => Promise<void>;
}

const Web3Context = createContext<Web3ContextProps | undefined>(undefined);

export const Web3Provider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [ethAccount, setEthAccount] = useState<string | null>(null);

  const isMetaMaskInstalled = () => {
    return typeof window.ethereum !== "undefined";
  };

  const connectMetaMask = async () => {
    if (isMetaMaskInstalled()) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setEthAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      console.error("MetaMask not detected");
    }
  };

  return (
    <Web3Context.Provider value={{ ethAccount, connectMetaMask }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (context === undefined) {
    throw new Error("useWeb3 must be used within a Web3Provider");
  }
  return context;
};
