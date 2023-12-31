import React, { useState } from "react";
import { tabData } from "./TabData";
import TabItem from "./TabItem";
import { Button, Tooltip } from "@mui/material";

const Tab = () => {
  return (
    <ul className="bg-200 flex dark:bg-600">
      {tabData.map((currentTab, tabIndex) => {
        return <TabItem key={currentTab.id} {...currentTab} />;
      })}
    </ul>
  );
};

export default Tab;
