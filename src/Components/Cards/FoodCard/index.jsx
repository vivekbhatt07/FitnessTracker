import React from "react";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const FoodCard = (props) => {
  const { name, calories, proteinInGms, carbsInGms, fatInGms } = props;
  return (
    <div className="p-4 border flex flex-col items-center gap-2 min-w-[300px]">
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
      <IconButton>
        <Delete />
      </IconButton>
    </div>
  );
};

export default FoodCard;
