import React, { useEffect, useState } from "react";

const Hooks = () => {
  const [name, setName] = useState("NodeJs");
  const [isLogin, setIsLogin] = useState(false);

  const updateHandler = () => {
    setName("ReactJs");
  };

  useEffect(() => {
    console.log("Component render");
  });

  useEffect(() => {
    console.log("Name Change so component didUpdate");
  }, [name, isLogin]);

  return (
    <div>
      <h1>Name: {name}</h1>
      {/* <button onClick={()=>setName("ReactJs")}>Click to update</button> */}
      <button onClick={updateHandler}>Click to update</button>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Hooks;
