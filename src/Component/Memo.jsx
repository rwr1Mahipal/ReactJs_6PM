import React, { useMemo, useState } from "react";

const Memo = () => {
  console.log("Component render...");

  const [num, setNum] = useState(0);
  const [text, setText] = useState("");

  //   const numCal = () => {
  //     console.log("NUM Cal fun run...");

  //     let res = 0;
  //     for (let i = 0; i < 100000; i++) {
  //       res += num;
  //     }
  //     return res;
  //   };

  const numCal = useMemo(() => {
    console.log("NUM Cal fun run...");

    let res = 0;
    for (let i = 0; i < 100000; i++) {
      res += num;
    }
    return res;
  }, [num]);

  return (
    <div>
      <h1>Number: {numCal}</h1>
      <button onClick={() => setNum(num + 1)}>+ Click</button>

      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        name="text"
      />
    </div>
  );
};

export default Memo;
