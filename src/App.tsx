import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import GetWallet from "./components/GetWallet";
import GenerateWallet from "./components/GenerateWallet";
import ImportWallet from "./components/ImportWallet";
function App() {
  return (
    <div className="bg-image w-full h-screen bg-cover bg-center flex items-center justify-center">
    <div className="bg-gray-800 bg-opacity-90 max-w-lg mx-auto p-8 rounded-2xl shadow-2xl overflow-hidden text-center space-y-6">
    <Router>
      <Routes>
        <Route path="/" element={<GetWallet />} />
        <Route path="/new-wallet" element={<GenerateWallet />} />
        <Route path="/import-wallet" element={<ImportWallet />} />
      </Routes>
    </Router>
    </div>
  </div>

  );
}

export default App;