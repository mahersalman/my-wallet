import React from "react";
import CustomButton from "./components/CustomButton";

function App() {
  return (
    <div className="bg-image w-full h-screen bg-cover bg-center flex items-center justify-center">
      <div className="bg-gray-800 bg-opacity-90 max-w-lg mx-auto p-8 rounded-2xl shadow-2xl overflow-hidden text-center space-y-6">
        <h1 className="text-3xl font-bold text-white">Manage Your Wallet</h1>
        <p className="text-gray-400">Choose an option below to get started.</p>
        <div className="flex flex-col space-y-4">
          <CustomButton text="New Wallet" />
          <CustomButton text="Import Wallet" />
        </div>
      </div>
    </div>
  );
}

export default App;