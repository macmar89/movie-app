import React from "react";

const Header = ({ title }) => {
  return (
    <h2
      className="mt-2 mb-4 py-4 text-center shadow-lg"
      style={{ fontFamily: "Bai Jamjuree, sans-serif" }}
    >
      {title}{" "}
    </h2>
  );
};

export default Header;
