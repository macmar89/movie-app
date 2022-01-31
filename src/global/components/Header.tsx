import React from "react";

const Header = ({ title }: { title: string }) => {
  return <h2 className="mt-2 mb-4 py-4 text-center shadow-lg">{title}</h2>;
};

export default Header;
