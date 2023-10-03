import React, { useState } from "react";
import { PageWrapper } from "../../Layout";
import { PrimaryCard, LightLoader, DarkLoader } from "../../Components";
import "./Dashboard.css";
import { useTheme } from "../../Context/ThemeContext";
import { Whatshot, Restaurant, SportsScore } from "@mui/icons-material";

const Dashboard = () => {
  const { isDarkTheme } = useTheme();

  const dashboardData = [
    { id: 1, icon: <Whatshot />, value: 330, title: "Calories Burned" },
    { id: 2, icon: <Restaurant />, value: 630, title: "Calories Consumed" },
    { id: 3, icon: <SportsScore />, value: 5500, title: "Total Calories Goal" },
    {
      id: 4,
      icon: <SportsScore />,
      value: 5170,
      title: "Remaining Calories to Goal",
    },
  ];

  return (
    <PageWrapper>
      <section className="flex gap-4 mx-auto max-w-[1280px] pt-6 justify-between">
        {dashboardData.map((item) => {
          return <PrimaryCard {...item} key={item.id} />;
        })}
      </section>
    </PageWrapper>
  );
};

export default Dashboard;
