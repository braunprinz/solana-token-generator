"use client";
import { useState } from "react";

export default function Home() {
  const [tokenName, setTokenName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [totalSupply, setTotalSupply] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Token Created: ${tokenName} (${symbol}) with Supply: ${totalSupply}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">🚀 Solana Token Generator</h1>
      <p className="text-gray-400 mb-6">Easily create your own SPL token on Solana!</p>
      
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md w-96">
        <label className="block mb-2">Token Name:</label>
        <input 
          type="text" 
          value={tokenName} 
          onChange={(e) => setTokenName(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
          required
        />

        <label className="block mb-2">Symbol:</label>
        <input 
          type="text" 
          value={symbol} 
          onChange={(e) => setSymbol(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
          required
        />

        <label className="block mb-2">Total Supply:</label>
        <input 
          type="number" 
          value={totalSupply} 
          onChange={(e) => setTotalSupply(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
          required
        />

        <button type="submit" className="w-full bg-blue-500 p-2 rounded hover:bg-blue-600">
          Create Token
        </button>
      </form>
    </div>
  );
}
