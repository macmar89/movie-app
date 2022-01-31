import React from "react";

interface ButtonProps {
  label: string;
  click?: any;
  className?: string;
}

const Button = ({ label, click, className }: ButtonProps) => {
  return (
    <button onClick={click} className={`btn ${className}`}>
      {label}
    </button>
  );
};

export default Button;
