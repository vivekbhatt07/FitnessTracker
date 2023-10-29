import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { foodData } from "../../Data";
import FoodCard from "../../Components/Cards/FoodCard";
import { useSelector, useDispatch } from "react-redux";
import {
  setFood,
  addFood,
  deleteFood,
} from "../../redux/actions/fitnessActions.js";

const Food = () => {
  const foods = useSelector((state) => state.fitness.foods);
  const dispatch = useDispatch();

  const { isDarkTheme } = useTheme();
  const [isAddFoodModalOpen, setIsAddFoodModalOpen] = useState(false);

  const fetchFood = async () => {
    try {
      const response = await axios.get(
        "https://fitnesstrackapi.vivekbhatt2.repl.co/api/v1/food"
      );
      if (response.status === 200) {
        dispatch(setFood(response.data.food));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addFoodItem = async (food) => {
    try {
      const response = await axios.post(
        "https://fitnesstrackapi.vivekbhatt2.repl.co/api/v1/food",
        food
      );
      if (response.status === 201) {
        dispatch(addFood(response.data.food));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteFoodItem = async (foodId, food) => {
    console.log({ foodId, food });
    try {
      const response = await axios.delete(
        `https://fitnesstrackapi.vivekbhatt2.repl.co/api/v1/food/${foodId}`,
        food
      );
      console.log(response);
      if (response.status === 204) {
        dispatch(deleteFood(food));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const openFoodModal = () => setIsAddFoodModalOpen(true);
  const closeFoodModal = () => setIsAddFoodModalOpen(false);

  useEffect(() => {
    fetchFood();
  }, []);

  return (
    <PageWrapper>
      <section className="flex gap-8 mx-auto max-w-[1280px] pt-6 flex-col px-8 pb-6">
        <div className="mx-auto">
          <ModalProvider
            title="ADD FOOD"
            isOpen={isAddFoodModalOpen}
            closeModal={closeFoodModal}
            OpenModalAction={
              <Tooltip title="ADD FOOD">
                <IconButton
                  onClick={openFoodModal}
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
            <AddFoodForm closeForm={closeFoodModal} formAction={addFoodItem} />
          </ModalProvider>
        </div>
        <div className="task_list">
          {foods.map((food) => {
            return (
              <FoodCard
                key={food._id}
                foodData={{ ...food }}
                cardDeleteAction={deleteFoodItem}
              />
            );
          })}
          {foods.length === 0 && <LightLoader />}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Food;
