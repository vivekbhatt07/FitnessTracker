import React from "react";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const FoodCard = (props) => {
  const { foodData, cardDeleteAction } = props;
  const { _id, name, calories, proteinInGms, carbsInGms, fatInGms } = foodData;
  return (
    <div className="p-4 border flex flex-col items-center gap-2 rounded-lg ">
      <p className="flex justify-between w-full">
        <strong>Name</strong> <span>{name}</span>
      </p>
      <p className="flex justify-between w-full">
        <strong>Calories</strong> <span>{calories}</span>
      </p>
      <p className="flex justify-between w-full">
        <strong>Protein</strong> <span>{proteinInGms}g</span>
      </p>
      <p className="flex justify-between w-full">
        <strong>Carbs</strong> <span>{carbsInGms}g</span>
      </p>
      <p className="flex justify-between w-full">
        <strong>Fat</strong> <span>{fatInGms}g</span>
      </p>
      <IconButton
        onClick={() => cardDeleteAction(_id, foodData)}
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
  );
};

export default FoodCard;
