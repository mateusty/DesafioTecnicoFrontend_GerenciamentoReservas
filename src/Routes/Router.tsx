import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'

export const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="/login"
          element={<Login />}
        />
    </Routes>
  )
}
