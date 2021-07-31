import React from "react";

const Button = ({ label, click }) => {
  return (
    <button onClick={click} className="btn btn-success">
      {label}
    </button>
  );
};

export default Button;
