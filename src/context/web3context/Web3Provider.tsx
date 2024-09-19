"use client";

import React, { useState, useEffect, ReactNode } from "react";
import Web3Context from "./Web3Context";

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
