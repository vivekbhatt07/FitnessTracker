import React from "react";

const PrimaryCard = (props) => {
  const { icon, value, title } = props;
  return (
    <div className="px-4 py-8 border border-[#282828] flex flex-col items-center gap-2 rounded-lg">
      {icon}
      <div className="text-xl font-bold text-[#101010]">
        {value ? value : "Loading..."}
      </div>
      <div>{title}</div>
    </div>
  );
};

export default PrimaryCard;
