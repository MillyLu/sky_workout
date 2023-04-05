import { Routes, Route } from 'react-router-dom'

import { YDay1 } from './pages/VideoPages/Yoga/yDay1'
import { YDay2 } from './pages/VideoPages/Yoga/yDay2'
import { YDay3 } from './pages/VideoPages/Yoga/yDay3'
import { YDay4 } from './pages/VideoPages/Yoga/yDay4'
import { YDay5 } from './pages/VideoPages/Yoga/yDay5'
import { SDay1 } from './pages/VideoPages/Stretching/sDay1'
import { BDay1 } from './pages/VideoPages/Bodyflex/bDay1'


export const AppRoutes = () => {
    return (
      <Routes>

        <Route path="/yDay1" element={<YDay1 />} />
        <Route path="/yDay2" element={<YDay2 />} />
        <Route path="/yDay3" element={<YDay3 />} />
        <Route path="/yDay4" element={<YDay4 />} />
        <Route path="/yDay5" element={<YDay5 />} />
        <Route path="/sDay5" element={<SDay1 />} />
        <Route path="/bDay1" element={<BDay1 />} />
      </Routes>
    )
  }