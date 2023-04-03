import { Routes, Route } from 'react-router-dom'
import { Bodyflex } from './pages/Bodyflex/bodyflex'
import { DanceFitness } from './pages/DanceFitness/dance_fitness'
import { StepAerobics } from './pages/StepAerobics/step_aerobics'
import { Stretching } from './pages/Stretching/stretching'
import { Yoga } from './pages/Yoga/yoga'
import { Video } from './pages/VideoPages/video'
import { Main } from './pages/Main/Main'
import { Profile } from './pages/Profile/profile'


export const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/" element={<Main />} />
        <Route path="/stretching" element={<Stretching />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dance_fitness" element={<DanceFitness />} />StepAerobics
        <Route path="/step_aerobics" element={<StepAerobics />} />
        <Route path="/bodyflex" element={<Bodyflex />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    )
  }