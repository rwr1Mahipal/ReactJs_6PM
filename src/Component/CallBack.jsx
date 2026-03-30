import React, { useCallback, useState } from "react";
import ChildCallBack from "./ChildCallBack";

const CallBack = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  console.log("Parent render");

  const increseCount = useCallback(() => {
    setCount((preCount) => preCount + 1);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <h1>Count: {count}</h1>
      <button onClick={increseCount}>+ Count</button>

      <input
        type="text"
        placeholder="Enter"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <ChildCallBack onClick={increseCount} />
    </div>
  );
};

export default CallBack;
