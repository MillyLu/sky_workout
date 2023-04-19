import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { useAuth } from "./Hooks/user-auth";
import { Bodyflex } from "./pages/Bodyflex/bodyflex";
import { DanceFitness } from "./pages/DanceFitness/dance_fitness";
import { StepAerobics } from "./pages/StepAerobics/step_aerobics";
import { Stretching } from "./pages/Stretching/stretching";
import { Yoga } from "./pages/Yoga/yoga";
import { Main } from "./pages/Main/Main";
import { Profile } from "./pages/Profile/profile";
import { Error } from "./pages/Error/Error";
import { CoursePage } from "./pages/Course/CoursePage";
import Workout from "./pages/Workout";

export const AppRoutes = () => {
  const { isAuth, email } = useAuth();
  return (
    <Routes>
      <Route path="/yoga" element={<Yoga />} />
      <Route path="/course/:id" element={<CoursePage />} />
      <Route path="/" element={<Main user={email} />} />
      <Route path="/stretching" element={<Stretching />} />
       <Route element={<ProtectedRoute isAllowed={Boolean(isAuth)} />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/workout/:id" element={<Workout />} />
      </Route>
      <Route path="/dance_fitness" element={<DanceFitness />} />
      <Route path="/step_aerobics" element={<StepAerobics />} />
      <Route path="/bodyflex" element={<Bodyflex />} />
      <Route path="*" element={<Error />} />

    
    </Routes>
  );
};
