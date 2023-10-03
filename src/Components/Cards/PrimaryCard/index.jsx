import React from "react";

const PrimaryCard = (props) => {
  const { icon, value, title } = props;
  return (
    <div className="p-4 border flex flex-col items-center gap-2 min-w-[300px]">
      {icon}
      <div className="text-xl font-bold">{value}</div>
      <div>{title}</div>
    </div>
  );
};

export default PrimaryCard;
