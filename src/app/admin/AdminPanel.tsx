"use client";

import { useState } from "react";
import { useWeb3 } from "@/context/web3context/useWeb3";

const AdminPanel = () => {
  const { ethAccount, connectMetaMask } = useWeb3();
  const [sbtData, setSbtData] = useState({ name: "", description: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSbtData({ ...sbtData, [name]: value });
  };

  const handleCreateSBT = () => {
    console.log("Creating SBT with data:", sbtData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      <div className="mb-4">
        {ethAccount ? (
          <p>Connected: 0x...{ethAccount.slice(-4)}</p>
        ) : (
          <button
            onClick={connectMetaMask}
            className="py-2 px-4 bg-blue-500 text-white rounded"
          >
            Connect MetaMask
          </button>
        )}
      </div>
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Create SBT</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={sbtData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={sbtData.description}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          onClick={handleCreateSBT}
          className="py-2 px-4 bg-green-500 text-white rounded"
        >
          Create SBT
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
