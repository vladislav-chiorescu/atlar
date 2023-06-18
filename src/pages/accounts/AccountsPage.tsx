import { Container } from '@mui/material'

import { AccountsTable } from '../../components/accounts-table'
import { Helmet } from 'react-helmet-async'

export const AccountsPage = () => {
  return (
    <>
      <Helmet>
        <title>Accounts Page</title>
      </Helmet>
      <Container maxWidth='xl'>
        <AccountsTable />
      </Container>
    </>
  )
}
