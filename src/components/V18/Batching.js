import { useState } from "react";

const Batching = () => {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(0);

  const handleBatching = () => {
    setTimeout(() => {
      setAdd(add + 1);
      setSub(sub - 1);
    }, 2000);
  };

  console.log("Testing...");

  return (
    <>
      
      <h1>AutoBatching Exmaple</h1>
      <button style={{ width: "50%", height: "30%" }} onClick={handleBatching}>
        Click this
      </button>
      <h1>Addition :{add}</h1>
      <h2>Substraction :{sub}</h2>
      <hr />
    </>
  );
};

export default Batching;
