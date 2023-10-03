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
    <div className="border p-4 min-w-[300px]">
      <p className="flex justify-between">
        <strong>Name</strong> <span>{name}</span>
      </p>
      <p className="flex justify-between">
        <strong>Duration</strong> <span>{duration}</span>
      </p>
      <p className="flex justify-between">
        <strong>Calories Burned</strong> <span>{caloriesBurned}</span>
      </p>
      <IconButton onClick={() => cardDeleteAction(_id)}>
        <Delete />
      </IconButton>
    </div>
  );
};

export default SecondaryCard;
