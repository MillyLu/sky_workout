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
import { YDay1 } from "./pages/VideoPages/Yoga/yDay1";
import { YDay2 } from "./pages/VideoPages/Yoga/yDay2";
import { YDay3 } from "./pages/VideoPages/Yoga/yDay3";
import { YDay4 } from "./pages/VideoPages/Yoga/yDay4";
import { YDay5 } from "./pages/VideoPages/Yoga/yDay5";
import { SDay1 } from "./pages/VideoPages/Stretching/sDay1";
import { BDay1 } from "./pages/VideoPages/Bodyflex/bDay1";
import { Error } from "./pages/Error/Error";

export const AppRoutes = () => {
  const { isAuth, email } = useAuth();
  return (
    <Routes>
      <Route path="/yoga" element={<Yoga />} />
      <Route path="/" element={<Main user={email} />} />
      <Route path="/stretching" element={<Stretching />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(isAuth)} />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/yDay1" element={<YDay1 />} />
        <Route path="/yDay2" element={<YDay2 />} />
        <Route path="/yDay3" element={<YDay3 />} />
        <Route path="/yDay4" element={<YDay4 />} />
        <Route path="/yDay5" element={<YDay5 />} />
        <Route path="/sDay5" element={<SDay1 />} />
        <Route path="/bDay1" element={<BDay1 />} />
      </Route>
      <Route path="/dance_fitness" element={<DanceFitness />} />
      <Route path="/step_aerobics" element={<StepAerobics />} />
      <Route path="/bodyflex" element={<Bodyflex />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
