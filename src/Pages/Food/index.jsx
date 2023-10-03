import React, { useState } from "react";
import { PageWrapper } from "../../Layout";
import { PrimaryCard, LightLoader, DarkLoader } from "../../Components";
import "./Food.css";
import { useTheme } from "../../Context/ThemeContext";

const Food = () => {
  const { isDarkTheme } = useTheme();

  return <PageWrapper>Food</PageWrapper>;
};

export default Food;
