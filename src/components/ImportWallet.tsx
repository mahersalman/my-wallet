import React, { useState } from "react";
import {validateMnemonicWords} from "../utils/Mnemonic";

function ImportWallet() {
  const [mnemonic, setMnemonic] = useState("");

  const handleChangeMnemonic = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMnemonic(event.target.value);
  };

  const handleSubmit = () => {
    if (!validateMnemonicWords(mnemonic)) {
      alert("Invalid Mnemonic Words!");
    }
    else{
        alert("Valid Mnemonic Words!");
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-400 mb-4">
        Enter Your Mnemonic Words:
      </h1>
      <textarea
        id="mnemonic"
        value={mnemonic}
        onChange={handleChangeMnemonic}
        className="p-4 rounded-md w-full bg-slate-900 text-white h-32 resize-none"
        placeholder="Enter your 12 or 24 mnemonic words here..."
      />
      <button
        className="mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 w-full"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </>
  );
}

export default ImportWallet;