import React, { useState } from "react";
import { PageWrapper } from "../../Layout";
import { PrimaryCard, LightLoader, DarkLoader } from "../../Components";
import "./Tasks.css";
import { useTheme } from "../../Context/ThemeContext";

const Tasks = () => {
  const { isDarkTheme } = useTheme();

  return <PageWrapper>Tasks</PageWrapper>;
};

export default Tasks;
