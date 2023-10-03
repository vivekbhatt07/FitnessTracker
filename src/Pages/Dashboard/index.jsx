import React, { useState } from "react";
import { PageWrapper } from "../../Layout";
import { PrimaryCard, LightLoader, DarkLoader } from "../../Components";
import "./Dashboard.css";
import { useTheme } from "../../Context/ThemeContext";

const Dashboard = () => {
  const { isDarkTheme } = useTheme();

  return <PageWrapper>Dashboard</PageWrapper>;
};

export default Dashboard;
