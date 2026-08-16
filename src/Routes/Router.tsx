import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import { Layout } from '../Components/Layout/Layout'
import { HomePage } from '../Pages/Home'
import { ProtectedRoute } from './ProtectedRoute'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route
        path="/login"
        element={<Login />}
      />

      <Route element= {
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }>
        <Route path="/home" element={<HomePage />}/>
      </Route>

    </Routes>
  )
}
