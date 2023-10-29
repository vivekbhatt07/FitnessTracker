import React from "react";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import moment from "moment";

const GoalCard = (props) => {
  const { goalData, cardDeleteAction } = props;

  const { _id, name, description, targetDate, targetCalories, status } =
    goalData;

  const date = moment(targetDate).format("MMM Do YY");

  return (
    <div className="border px-4 py-6 rounded-lg">
      <p className="flex justify-between w-full">
        <strong>Name</strong> <span>{name}</span>
      </p>
      <p className="flex justify-between w-full">
        <strong>Target Date</strong> <span>{date}</span>
      </p>
      <p className="flex justify-between w-full">
        <strong>Target Calories</strong> <span>{targetCalories}</span>
      </p>
      <p className="flex justify-between w-full pb-2">
        <strong>Status</strong> <span>{status}</span>
      </p>
      <p className="flex justify-between w-full flex-col border-t border-[#ddd] pt-3">
        <strong>Description</strong> <span>{description}</span>
      </p>
      <div className="flex justify-center pt-4 border-t border-[#ddd]">
        <IconButton
          onClick={() => cardDeleteAction(_id, goalData)}
          sx={{
            background: "#ddd",
            "&:hover": {
              background: "#ccc",
            },
          }}
        >
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};

export default GoalCard;
