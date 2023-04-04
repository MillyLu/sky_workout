import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { SignUp } from "./pages/SignUp/SignUp";
import { Bodyflex } from "./pages/Bodyflex/bodyflex";
import { DanceFitness } from "./pages/DanceFitness/dance_fitness";
import { StepAerobics } from "./pages/StepAerobics/step_aerobics";
import { Stretching } from "./pages/Stretching/stretching";
import { Yoga } from "./pages/Yoga/yoga";
import { Video } from "./pages/VideoPages/video";
import { Profile } from "./pages/Profile/profile";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/yoga" element={<Yoga />} />
      <Route path="/stretching" element={<Stretching />} />
      <Route path="/dance_fitness" element={<DanceFitness />} />
      <Route path="/step_aerobics" element={<StepAerobics />} />
      <Route path="/bodyflex" element={<Bodyflex />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/video" element={<Video />} />
    </Routes>
  );
};
