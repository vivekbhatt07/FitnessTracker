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
  const [exerciseFormData, setExerciseFormData] = useState({
    name: "",
    duration: "",
    caloriesBurned: "",
  });

  const handleAddExercise = (event) => {
    const { name, value } = event.target;
    setExerciseFormData((prevExerciseFormData) => {
      return { ...prevExerciseFormData, [name]: value };
    });
  };

  const handleAddExerciseSubmit = (event) => {
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
          name="assignee"
          value={exerciseFormData.name}
          onChange={handleAddExercise}
          required
        />
        <TextField
          label="Type"
          variant="outlined"
          name="name"
          value={exerciseFormData.duration}
          onChange={handleAddExercise}
          required
        />
        <TextField
          label="Calories Burnt"
          variant="outlined"
          name="taskType"
          value={exerciseFormData.caloriesBurned}
          onChange={handleAddExercise}
          required
        />

        {/* <FormControl fullWidth required>
          <InputLabel>Task Status</InputLabel>
          <Select
            name="status"
            value={taskFormData.status}
            label="Task Status"
            onChange={handleAddTask}
          >
            {StatusList.map((status, statusIndex) => (
              <MenuItem value={status} key={statusIndex}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}
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
