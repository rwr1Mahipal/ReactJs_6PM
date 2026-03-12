import React, { version } from "react";
import { useEffect, useState } from "react";

const Rest = () => {
  const a = [1, 2, 3, 4];
  const b = [11, 12, 13, 14];
  const c = [...a, ...b];
  // console.log(c);

  const obj = { name: "ReactJs", version: 19.3 };
  const updateObj = { ...obj, version: 20 };
  // console.log(updateObj);

  function sum(...num) {
    return num.reduce((a, b) => a + b, 0);
  }
  const res = sum(1, 2, 3, 4);
  // console.log(res);

  // const user = {
  //   name: "Jhon",
  //   age: 30,
  //   marks: 85,
  // };

  // const { name, ...details } = user;
  // console.log(name);
  // console.log(details);

  const [user, setUser] = useState({ name: "NodeJs", version: 20 });
  // console.log(user);

  function userUpdate() {
    setUser((prevUser) => ({ ...prevUser, version: 24 }));
  }

  useEffect(() => {
    userUpdate();
  }, []);

  return (
    <div>
      <h1>Name: {user.name}</h1>
    </div>
  );
};

export default Rest;
