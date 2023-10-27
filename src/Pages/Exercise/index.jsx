import React, { useState, useEffect } from "react";
import axios from "axios";
import { PageWrapper } from "../../Layout";
import {
  PrimaryCard,
  SecondaryCard,
  LightLoader,
  DarkLoader,
  ModalProvider,
} from "../../Components";
import "./Exercise.css";
import { useTheme } from "../../Context/ThemeContext";
import { AddExerciseForm } from "../../Components/Form";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { Edit, Add } from "@mui/icons-material";
import { exerciseData } from "../../Data";
import { useSelector, useDispatch } from "react-redux";
import {
  setExercises,
  addExercise,
  deleteExercise,
} from "../../redux/actions/fitnessActions.js";

const Exercise = () => {
  const exercises = useSelector((state) => state.fitness.exercises);
  const dispatch = useDispatch();
  const { isDarkTheme } = useTheme();
  const [isAddExerciseModalOpen, setIsAddExerciseModalOpen] = useState(false);

  const fetchExercise = async () => {
    try {
      const response = await axios.get(
        "https://fitnesstrackapi.vivekbhatt2.repl.co/api/v1/exercises"
      );

      if (response.status === 200) {
        dispatch(setExercises(response.data.exercises));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addExerciseItem = async (addExercise) => {
    try {
      const response = await axios.post(
        "https://fitnesstrackapi.vivekbhatt2.repl.co/api/v1/exercises",
        addExercise
      );
      if (response.status === 201) {
        dispatch(addExercise(response.data.exercise));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteExerciseItem = async (exerciseId) => {
    try {
      const response = await axios.delete(
        `https://fitnesstrackapi.vivekbhatt2.repl.co/api/v1/exercises/${exerciseId}`
      );
      console.log(response);
      if (response.status === 204) {
        // dispatch(deleteExercise(response.data.exercise));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const openExerciseModal = () => setIsAddExerciseModalOpen(true);
  const closeExerciseModal = () => setIsAddExerciseModalOpen(false);

  useEffect(() => {
    fetchExercise();
  }, [exercises]);

  return (
    <PageWrapper>
      <section className="flex gap-8 mx-auto max-w-[1280px] p-6 flex-col">
        <div className="mx-auto">
          <ModalProvider
            title="ADD EXERCISE"
            isOpen={isAddExerciseModalOpen}
            closeModal={closeExerciseModal}
            OpenModalAction={
              <Tooltip title="ADD EXERCISE">
                <IconButton
                  onClick={openExerciseModal}
                  sx={{
                    background: "#ddd",
                    "&:hover": {
                      background: "#ccc",
                    },
                  }}
                >
                  <Add />
                </IconButton>
              </Tooltip>
            }
          >
            <AddExerciseForm
              closeForm={closeExerciseModal}
              formAction={addExerciseItem}
            />
          </ModalProvider>
        </div>
        <div className="task_list">
          {exercises.map((exercise) => {
            return (
              <SecondaryCard
                key={exercise._id}
                {...exercise}
                cardDeleteAction={deleteExerciseItem}
              />
            );
          })}
          {exercises.length === 0 && <LightLoader />}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Exercise;
