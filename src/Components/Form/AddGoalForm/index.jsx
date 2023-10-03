import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const statusList = ["in progress", "achieved", "abandoned"];

const AddGoalForm = (props) => {
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
    formAction(goalFormData);
    closeForm();
  };

  return (
    <form className="flex flex-col p-4 gap-6" onSubmit={handleAddGoalSubmit}>
      <div className="flex flex-col gap-4">
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={goalFormData.name}
          onChange={handleAddGoal}
          required
        />
        <TextField
          label="Description"
          variant="outlined"
          name="description"
          value={goalFormData.description}
          onChange={handleAddGoal}
          required
        />
        <input
          label="Target Date"
          name="targetDate"
          value={goalFormData.targetDate}
          onChange={handleAddGoal}
          required
          type="date"
        />
        <TextField
          label="Target Calories"
          variant="outlined"
          name="targetCalories"
          value={goalFormData.targetCalories}
          onChange={handleAddGoal}
          required
        />

        <FormControl fullWidth required>
          <InputLabel>Status</InputLabel>
          <Select
            name="status"
            value={goalFormData.status}
            label="Task Status"
            onChange={handleAddGoal}
          >
            {statusList.map((status, statusIndex) => (
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

export default AddGoalForm;
