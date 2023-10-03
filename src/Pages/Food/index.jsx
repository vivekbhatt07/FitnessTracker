import React, { useState } from "react";
import { PageWrapper } from "../../Layout";
import {
  PrimaryCard,
  LightLoader,
  DarkLoader,
  ModalProvider,
} from "../../Components";
import "./Food.css";
import { useTheme } from "../../Context/ThemeContext";
import { AddFoodForm } from "../../Components/Form";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { Edit, Add } from "@mui/icons-material";

const Food = () => {
  const { isDarkTheme } = useTheme();
  const [isAddFoodModalOpen, setIsAddFoodModalOpen] = useState(false);

  const openFoodModal = () => setIsAddFoodModalOpen(true);
  const closeFoodModal = () => setIsAddFoodModalOpen(false);
  return (
    <PageWrapper>
      <section className="flex gap-4 mx-auto max-w-[1280px] pt-6">
        <div className="mx-auto">
          <ModalProvider
            title="ADD FOOD"
            isOpen={isAddFoodModalOpen}
            closeModal={closeFoodModal}
            OpenModalAction={
              <Tooltip title="ADD FOOD">
                <IconButton onClick={openFoodModal}>
                  <Add />
                </IconButton>
              </Tooltip>
            }
          >
            <AddFoodForm
              closeForm={closeFoodModal}
              // formAction={updateTask}
            />
          </ModalProvider>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Food;
