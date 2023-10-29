import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { goalData } from "../../Data";
import GoalCard from "../../Components/Cards/GoalCard";
import { useSelector, useDispatch } from "react-redux";
import {
  setGoal,
  addGoal,
  deleteGoal,
} from "../../redux/actions/fitnessActions.js";

const Goal = () => {
  const goals = useSelector((state) => state.fitness.goals);
  const dispatch = useDispatch();
  const { isDarkTheme } = useTheme();
  const [isAddGoalModalOpen, setIsAddGoalModalOpen] = useState(false);

  const fetchGoal = async () => {
    try {
      const response = await axios.get(
        "https://fitnesstrackapi.vivekbhatt2.repl.co/api/v1/goals"
      );
      if (response.status === 200) {
        dispatch(setGoal(response.data.goals));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addGoalItem = async (goal) => {
    try {
      const response = await axios.post(
        "https://fitnesstrackapi.vivekbhatt2.repl.co/api/v1/goals",
        goal
      );
      console.log(response);
      if (response.status === 201) {
        dispatch(addGoal(response.data.goal));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteGoalItem = async (goalId, goal) => {
    try {
      const response = await axios.delete(
        `https://fitnesstrackapi.vivekbhatt2.repl.co/api/v1/goals/${goalId}`,
        goal
      );
      if (response.status === 204) {
        dispatch(deleteGoal(goalId));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const openGoalModal = () => setIsAddGoalModalOpen(true);
  const closeGoalModal = () => setIsAddGoalModalOpen(false);

  useEffect(() => {
    fetchGoal();
  }, []);

  return (
    <PageWrapper>
      <section className="flex gap-8 mx-auto max-w-[1280px] p-6 flex-col">
        <div className="mx-auto">
          <ModalProvider
            title="ADD GOAL"
            isOpen={isAddGoalModalOpen}
            closeModal={closeGoalModal}
            OpenModalAction={
              <Tooltip title="ADD GOAL">
                <IconButton
                  onClick={openGoalModal}
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
            <AddGoalForm closeForm={closeGoalModal} formAction={addGoalItem} />
          </ModalProvider>
        </div>
        <div className="task_list">
          {goals.map((goal) => {
            return (
              <GoalCard
                key={goal._id}
                goalData={{ ...goal }}
                cardDeleteAction={deleteGoalItem}
              />
            );
          })}
          {goals.length === 0 && <LightLoader />}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Goal;
