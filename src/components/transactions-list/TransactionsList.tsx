import { useMemo } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { useParams } from 'react-router-dom'

import { getTransactions } from '../../_mock'
import { setDate } from '../../utils'

export const TransactionsList = () => {
  const { accountId } = useParams()
  const transactions = useMemo(
    () =>
      getTransactions(Number(accountId)).sort(
        (a, b) => b.transactionDate.getTime() - a.transactionDate.getTime()
      ),
    [accountId]
  )

  return (
    <List>
      {transactions.map(({ id, transactionDate, transactionDescription }) => (
        <ListItem key={id} sx={{ px: 0 }} color='primary'>
          <ListItemText
            sx={{ bgcolor: 'whitesmoke', p: 2, borderRadius: 2 }}
            primary={transactionDescription}
            secondary={setDate(transactionDate)}
          />
        </ListItem>
      ))}
    </List>
  )
}
