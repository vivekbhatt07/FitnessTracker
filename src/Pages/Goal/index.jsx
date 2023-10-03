import React, { useState } from "react";
import { PageWrapper } from "../../Layout";
import { PrimaryCard, LightLoader, DarkLoader } from "../../Components";
import "./Goal.css";
import { useTheme } from "../../Context/ThemeContext";

const Goal = () => {
  const { isDarkTheme } = useTheme();

  return <PageWrapper>Goal</PageWrapper>;
};

export default Goal;
