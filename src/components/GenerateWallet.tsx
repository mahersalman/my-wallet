import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { generateRandomMnemonic } from "../utils/generateMnemonic";

function GenerateWallet() {
  const [seedWords, setSeedWords] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(seedWords);
    alert("Seed phrase copied to clipboard!");
  };

  const handleClick = () => {
    const words = generateRandomMnemonic();
    setSeedWords(words);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Write down your Secret Recovery Phrase</h1>
      <p className="text-gray-400">
        Write down this 12-word Secret Recovery Phrase and save it in a place that you trust and only you can access.
      </p>

      <div className="grid grid-cols-3 gap-4 bg-gray-700 p-4 rounded-md">
        {seedWords &&
          seedWords.split(" ").map((word, index) => (
            <div
              key={index}
              className="bg-gray-600 rounded-md py-2 px-3 text-sm font-medium text-center text-white"
            >
              {word}
            </div>
          ))}
        {!seedWords && (
          <div className="col-span-3 flex justify-center items-center text-white text-lg font-medium">
            Click the button to generate a new seed phrase
          </div>
        )}
      </div>

      <div className="flex justify-center space-x-4">
        {seedWords && (
          <button
            onClick={copyToClipboard}
            className="bg-gray-600 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-lg shadow-lg flex items-center space-x-2 transition-transform duration-300 transform hover:scale-105"
          >
            <span>📋</span> <span>Copy to Clipboard</span>
          </button>
        )}
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
        >
          Generate Seed Phrase
        </button>
      </div>

      <CustomButton text="Next" path="/import-wallet" />
    </div>
  );
}

export default GenerateWallet;