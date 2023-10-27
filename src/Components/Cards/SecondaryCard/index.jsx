import React, { useState } from "react";
import moment from "moment";
import Tooltip from "@mui/material/Tooltip";
import "./SecondaryCard.css";
import {
  ArrowDownward,
  ArrowUpward,
  ErrorRounded,
  AccessTimeFilled,
  MoreVert,
  Delete,
  Edit,
  ArrowCircleUpRounded,
  ArrowCircleDownRounded,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { truncateString } from "../../../Utils";
import ModalProvider from "../../ModalProvider";

const SecondaryCard = (props) => {
  const { _id, name, duration, caloriesBurned, cardDeleteAction } = props;

  return (
    <div className="border px-4 py-6 rounded-lg">
      <div className="flex flex-col gap-2">
        <p className="flex justify-between">
          <strong className="text-[#282828]">Name</strong> <span>{name}</span>
        </p>
        <p className="flex justify-between">
          <strong className="text-[#282828]">Duration</strong>{" "}
          <span>{duration}</span>
        </p>
        <p className="flex justify-between">
          <strong className="text-[#282828]">Calories Burned</strong>{" "}
          <span>{caloriesBurned}</span>
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <IconButton
          onClick={() => cardDeleteAction(_id)}
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

export default SecondaryCard;
