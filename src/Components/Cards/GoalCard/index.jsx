import React from "react";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const GoalCard = (props) => {
  const { name, description, targetDate, targetCalories, status } = props;
  return (
    <div className="p-4 border flex flex-col items-center gap-2 min-w-[300px]">
      <p className="flex justify-between w-full">
        <strong>Name</strong> <span>{name}</span>
      </p>
      <p className="flex justify-between w-full">
        <strong>Target Date</strong> <span>{targetDate}</span>
      </p>
      <p className="flex justify-between w-full">
        <strong>Target Calories</strong> <span>{targetCalories}</span>
      </p>
      <p className="flex justify-between w-full">
        <strong>Status</strong> <span>{status}</span>
      </p>
      <p className="flex justify-between w-full flex-col">
        <strong>Description</strong> <span>{description}</span>
      </p>
      <IconButton>
        <Delete />
      </IconButton>
    </div>
  );
};

export default GoalCard;
