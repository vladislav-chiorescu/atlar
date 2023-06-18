import { Container } from '@mui/material'
import { TransactionsList } from '../../components/transactions-list'
import { Helmet } from 'react-helmet-async'

export const TransactionsPage = () => {
  return (
    <>
      <Helmet>
        <title>Transactions Page</title>
      </Helmet>
      <Container maxWidth='xl'>
        <TransactionsList />
      </Container>
    </>
  )
}
