import React, { useState } from "react";
import { PageWrapper } from "../../Layout";
import {
  PrimaryCard,
  LightLoader,
  DarkLoader,
  ModalProvider,
} from "../../Components";
import "./Goal.css";
import { useTheme } from "../../Context/ThemeContext";
import { AddGoalForm } from "../../Components/Form";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { Edit, Add } from "@mui/icons-material";

const Goal = () => {
  const { isDarkTheme } = useTheme();
  const [isAddGoalModalOpen, setIsAddGoalModalOpen] = useState(false);

  const openGoalModal = () => setIsAddGoalModalOpen(true);
  const closeGoalModal = () => setIsAddGoalModalOpen(false);
  return (
    <PageWrapper>
      <section className="flex gap-4 mx-auto max-w-[1280px] pt-6">
        <div className="mx-auto">
          <ModalProvider
            title="ADD FOOD"
            isOpen={isAddGoalModalOpen}
            closeModal={closeGoalModal}
            OpenModalAction={
              <Tooltip title="ADD GOAL">
                <IconButton onClick={openGoalModal}>
                  <Add />
                </IconButton>
              </Tooltip>
            }
          >
            <AddGoalForm
              closeForm={closeGoalModal}
              // formAction={updateTask}
            />
          </ModalProvider>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Goal;
