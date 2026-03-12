import React from "react";
import { Link } from "react-router-dom";

const LendingPage = () => {
  return (
    <div className="lending-box">
      <Link to="/hooks">
        <button className="lending-btn">Click to Hooks page</button>
      </Link>
      <button className="lending-btn">Click</button>
      <button className="lending-btn">Click</button>
      <button className="lending-btn">Click</button>
    </div>
  );
};

export default LendingPage;
