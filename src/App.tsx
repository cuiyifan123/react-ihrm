import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/index'
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
export default App
