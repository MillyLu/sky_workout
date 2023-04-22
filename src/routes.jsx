import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { useAuth } from "./Hooks/user-auth";
import { Main } from "./pages/Main/Main";
import { Profile } from "./pages/Profile/profile";
import { Error } from "./pages/Error/Error";
import { CoursePage } from "./pages/Course/CoursePage";
import Workout from "./pages/Workout";

export const AppRoutes = () => {
  const { isAuth, email } = useAuth();
  return (
    <Routes>
      <Route path="/course/:id" element={<CoursePage />} />
      <Route path="/" element={<Main user={email} />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(isAuth)} />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/workout/:id" element={<Workout />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
