import { Routes, Route } from 'react-router-dom'
import { Yoga } from './pages/Yoga/yoga'

export const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/yoga" element={<Yoga />} />
      </Routes>
    )
  }