import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-3 py-1 m-2 rounded-md bg-slate-200">{name}</button>
  );
};

export default Button;
