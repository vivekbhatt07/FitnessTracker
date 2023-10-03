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
      // console.log(response);
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
      console.log(response);
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
  }, []);

  return (
    <PageWrapper>
      <section className="flex gap-8 mx-auto max-w-[1280px] pt-6 flex-col">
        <div className="mx-auto">
          <ModalProvider
            title="ADD EXERCISE"
            isOpen={isAddExerciseModalOpen}
            closeModal={closeExerciseModal}
            OpenModalAction={
              <Tooltip title="ADD EXERCISE">
                <IconButton onClick={openExerciseModal}>
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
        <div className="flex justify-between flex-wrap gap-5">
          {exercises.map((exercise) => {
            return (
              <SecondaryCard
                key={exercise._id}
                {...exercise}
                cardDeleteAction={deleteExerciseItem}
              />
            );
          })}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Exercise;
