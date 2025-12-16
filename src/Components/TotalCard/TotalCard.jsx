import React from "react";

const TotalCard = ({ title, total, description, children }) => {
  return (
    <div className="relative bg-white max-w-70 rounded-2xl border border-[#e0d7cf] shadow-sm p-5 overflow-hidden hover:shadow-md transition-all">
      <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#f1f7f3] rounded-full" />
      <div className="absolute top-8 right-10 z-10">{children}</div>
      <div className="relative z-10">
        <p className="text-[#9b6e63] text-sm font-medium">{title}</p>
        <p className="text-[#3e2723] text-3xl font-bold my-2">{total}</p>
        <p className="text-[#9b6e63] text-sm mt-1">{description}</p>
      </div>
    </div>
  );
};

export default TotalCard;
