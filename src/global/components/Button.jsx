import React from "react";

const Button = ({ label, click, className }) => {
  return (
    <button onClick={click} className={`btn ${className}`}>
      {label}
    </button>
  );
};

export default Button;
