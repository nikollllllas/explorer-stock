import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hooks/auth'
import { USER_ROLE } from '../utils/rules'

import { AuthRoutes } from './auth.routes'
import { AdminRoutes } from './admin.routes'
import { SellerRoutes } from './seller.routes'
import { CustomerRoutes } from './customer.routes'
import { useEffect } from 'react'
import { api } from '../services/api'

export function Routes() {
  const { user } = useAuth()

  useEffect(() => {
    api.get('/users/validated').catch((e) => {
      console.log(e)
    })

    if (user) {
      setData({
        user: JSON.parse(user)
      })
    }
  }, [])

  function AcessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />
      case USER_ROLE.SELLER:
        return <SellerRoutes />
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />
      default:
        return <CustomerRoutes />
    }
  }

  return <BrowserRouter>{user ? <AcessRoute /> : <AuthRoutes />}</BrowserRouter>
}
