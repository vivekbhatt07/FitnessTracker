import React, { useState } from "react";
import { PageWrapper } from "../../Layout";
import { PrimaryCard, LightLoader, DarkLoader } from "../../Components";
import "./Exercise.css";
import { useTheme } from "../../Context/ThemeContext";

const Exercise = () => {
  const { isDarkTheme } = useTheme();

  return <PageWrapper>Exercise</PageWrapper>;
};

export default Exercise;
