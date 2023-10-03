import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const AddExerciseForm = (props) => {
  const { closeForm, formAction } = props;
  const [goalFormData, setGoalFormData] = useState({
    name: "",
    description: "",
    targetDate: "",
    targetCalories: "",
    status: "",
  });

  const handleAddGoal = (event) => {
    const { name, value } = event.target;
    setGoalFormData((prevGoalFormData) => {
      return { ...prevGoalFormData, [name]: value };
    });
  };

  const handleAddGoalSubmit = (event) => {
    event.preventDefault();
    // formAction(exerciseFormData);
    closeForm();
  };

  return (
    <form className="flex flex-col p-4 gap-6" onSubmit={handleAddGoalSubmit}>
      <div className="flex flex-col gap-4">
        <TextField
          label="Name"
          variant="outlined"
          name="assignee"
          value={goalFormData.name}
          onChange={handleAddGoal}
          required
        />
        <TextField
          label="Description"
          variant="outlined"
          name="name"
          value={goalFormData.description}
          onChange={handleAddGoal}
          required
        />
        <TextField
          label="Target Date"
          variant="outlined"
          name="taskType"
          value={goalFormData.targetDate}
          onChange={handleAddGoal}
          required
        />
        <TextField
          label="Target Calories"
          variant="outlined"
          name="taskType"
          value={goalFormData.targetCalories}
          onChange={handleAddGoal}
          required
        />

        <FormControl fullWidth required>
          <InputLabel>Status</InputLabel>
          <Select
            name="Status"
            value={goalFormData.status}
            label="Task Status"
            onChange={handleAddGoal}
          >
            {StatusList.map((status, statusIndex) => (
              <MenuItem value={status} key={statusIndex}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="flex gap-3">
        <Button variant="contained" type="submit">
          ADD
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            closeForm();
            setGoalFormData({
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
