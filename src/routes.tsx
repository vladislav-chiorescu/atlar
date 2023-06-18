import { Navigate, useRoutes } from 'react-router-dom'

import { Layout } from './layout'
import { AccountsPage } from './pages/accounts'
import { TransactionsPage } from './pages/transactions'

export const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { element: <Navigate to='/accounts' />, index: true },
        { path: '/accounts', element: <AccountsPage /> },
        { path: '/accounts/:accountId', element: <TransactionsPage /> },
      ],
    },
  ])

  return routes
}
