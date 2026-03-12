import React, { useState } from "react";

const Form = () => {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = (e) => {
    localStorage.setItem("form", JSON.stringify(formData));
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Your name"
            name="name"
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter Your name"
            name="email"
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter Your name"
            name="password"
            onChange={changeHandler}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
