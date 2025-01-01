import React, { useState, useEffect } from "react";
import { generateWalletInfo } from "./generateWalletInfo";

function App() {
  const [walletInfo, setWalletInfo] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    const fetchWalletInfo = async () => {
      const data = await generateWalletInfo();
      setWalletInfo(data);
    };

    fetchWalletInfo();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Generated Wallet Info</h1>
      <ul>
        {walletInfo.map((item, index) => (
          <li key={index}>
            <strong>{item.label}:</strong> {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;