import React, { useState } from "react";
import { PageWrapper } from "../../Layout";
import {
  PrimaryCard,
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

const Exercise = () => {
  const { isDarkTheme } = useTheme();
  const [isAddExerciseModalOpen, setIsAddExerciseModalOpen] = useState(false);

  const openExerciseModal = () => setIsAddExerciseModalOpen(true);
  const closeExerciseModal = () => setIsAddExerciseModalOpen(false);

  return (
    <PageWrapper>
      <section className="flex gap-4 mx-auto max-w-[1280px] pt-6">
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
              // formAction={updateTask}
            />
          </ModalProvider>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Exercise;
