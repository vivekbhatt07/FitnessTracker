import React, { useState, useEffect } from "react";
import axios from "axios";
import { PageWrapper } from "../../Layout";
import { PrimaryCard, LightLoader, DarkLoader } from "../../Components";
import "./Dashboard.css";
import { useTheme } from "../../Context/ThemeContext";
import { Whatshot, Restaurant, SportsScore } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import {
  setFood,
  setGoal,
  setExercises,
} from "../../redux/actions/fitnessActions";

const Dashboard = () => {
  const { isDarkTheme } = useTheme();
  const dispatch = useDispatch();
  const fitnessData = useSelector((state) => state.fitness);
  const { exercises, foods, goals } = fitnessData;

  const caloriesBurntValue = exercises?.reduce((sum, exercise) => {
    return (sum = exercise.caloriesBurned + sum);
  }, 0);

  const caloriesConsumedValue = foods?.reduce((sum, food) => {
    return (sum = food.calories + sum);
  }, 0);

  const caloriesGoal = goals?.reduce((sum, goal) => {
    return (sum = goal.targetCalories + sum);
  }, 0);

  const dashboardData = [
    {
      id: 1,
      icon: <Whatshot sx={{ color: "red" }} />,
      value: caloriesBurntValue,
      title: "Calories Burned",
    },
    {
      id: 2,
      icon: <Restaurant sx={{ color: "#aaa" }} />,
      value: caloriesConsumedValue,
      title: "Calories Consumed",
    },
    {
      id: 3,
      icon: <SportsScore sx={{ color: "blue" }} />,
      value: caloriesGoal,
      title: "Total Calories Goal",
    },
    {
      id: 4,
      icon: <SportsScore sx={{ color: "green" }} />,
      value: caloriesGoal + caloriesConsumedValue - caloriesBurntValue,
      title: "Remaining Calories to Goal",
    },
  ];

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

  useEffect(() => {
    fetchExercise();
    fetchFood();
    fetchGoal();
  }, []);

  return (
    <PageWrapper>
      <section className="mx-auto max-w-[1280px] pt-6 pr-4 pl-4 pb-4 task_list">
        {dashboardData.map((item) => {
          return <PrimaryCard {...item} key={item.id} />;
        })}
      </section>
    </PageWrapper>
  );
};

export default Dashboard;
