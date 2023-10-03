import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Exercise, Food, Goal } from "./Pages";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="bg-50 dark:bg-darkModeOne min-h-screen dark:text-50 transition-all duration-500">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/exercises" element={<Exercise />} />
        <Route path="/foods" element={<Food />} />
        <Route path="/goals" element={<Goal />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
