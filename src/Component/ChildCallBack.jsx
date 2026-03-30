import React, { memo, useState } from "react";

const ChildCallBack = ({ onClick }) => {
  const [text, setText] = useState("");
  console.log("Child render");
  return (
    <div>
      <button onClick={onClick}>+ Count</button>

      <input
        type="text"
        placeholder="Enter"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default memo(ChildCallBack);
