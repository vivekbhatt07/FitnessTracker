import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const AddFoodForm = (props) => {
  const { closeForm, formAction } = props;
  const [foodFormData, setFoodFormData] = useState({
    name: "",
    calories: "",
    proteinInGms: "",
    carbsInGms: "",
    fatInGms: "",
  });

  const handleAddFood = (event) => {
    const { name, value } = event.target;
    setFoodFormData((prevFoodFormData) => {
      return { ...prevFoodFormData, [name]: value };
    });
  };

  const handleAddFoodSubmit = (event) => {
    event.preventDefault();
    console.log(foodFormData);
    // formAction(exerciseFormData);
    closeForm();
  };

  return (
    <form className="flex flex-col p-4 gap-6" onSubmit={handleAddFoodSubmit}>
      <div className="flex flex-col gap-4">
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={foodFormData.name}
          onChange={handleAddFood}
          required
        />
        <TextField
          label="Calories"
          variant="outlined"
          name="calories"
          value={foodFormData.calories}
          onChange={handleAddFood}
          required
        />
        <TextField
          label="Protein(GMS)"
          variant="outlined"
          name="proteinInGms"
          value={foodFormData.proteinInGms}
          onChange={handleAddFood}
          required
        />
        <TextField
          label="Carbohydrate(GMS)"
          variant="outlined"
          name="carbsInGms"
          value={foodFormData.carbsInGms}
          onChange={handleAddFood}
          required
        />
        <TextField
          label="Fat(GMS)"
          variant="outlined"
          name="fatInGms"
          value={foodFormData.fatInGms}
          onChange={handleAddFood}
          required
        />
      </div>
      <div className="flex gap-3">
        <Button variant="contained" type="submit">
          ADD
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            closeForm();
            setFoodFormData({
              assignee: "",
              name: "",
              priority: "",
              status: "",
              summary: "",
              taskType: "",
              startDate: "",
              endDate: "",
            });
          }}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default AddFoodForm;
