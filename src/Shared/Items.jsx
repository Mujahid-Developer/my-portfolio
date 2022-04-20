import React from "react";

const Items = ({ children }) => {
  return (
    <div className="bg-slate-800 p-5 min-w-42 rounded flex flex-col items-center text-center gap-1">
      {children}
    </div>
  );
};

export default Items;
