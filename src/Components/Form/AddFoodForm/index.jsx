import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const AddExerciseForm = (props) => {
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
    setExerciseFormData((prevFoodFormData) => {
      return { ...prevFoodFormData, [name]: value };
    });
  };

  const handleAddFoodSubmit = (event) => {
    event.preventDefault();
    // formAction(exerciseFormData);
    closeForm();
  };

  return (
    <form
      className="flex flex-col p-4 gap-6"
      onSubmit={handleAddExerciseSubmit}
    >
      <div className="flex flex-col gap-4">
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={foodFormData.name}
          onChange={handleAddExercise}
          required
        />
        <TextField
          label="Calories"
          variant="outlined"
          name="calories"
          value={foodFormData.calories}
          onChange={handleAddExercise}
          required
        />
        <TextField
          label="Protein(GMS)"
          variant="outlined"
          name="proteinInGms"
          value={foodFormData.proteinInGms}
          onChange={handleAddExercise}
          required
        />
        <TextField
          label="Carbohydrate(GMS)"
          variant="outlined"
          name="carbsInGms"
          value={foodFormData.carbsInGms}
          onChange={handleAddExercise}
          required
        />
        <TextField
          label="Fat(GMS)"
          variant="outlined"
          name="fatInGms"
          value={foodFormData.fatInGms}
          onChange={handleAddExercise}
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
            setTaskFormData({
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

export default AddExerciseForm;
