import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hooks/auth'

import { AuthRoutes } from './auth.routes'
import { AdminRoutes } from './admin.routes'

export function Routes() {
  const { user } = useAuth()

  return <BrowserRouter>{user ? <AdminRoutes /> : <AuthRoutes />}</BrowserRouter>
}
