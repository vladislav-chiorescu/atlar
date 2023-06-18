import Box from '@mui/material/Box'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import { visuallyHidden } from '@mui/utils'

import { Account } from '../../_mock'
import { useCallback } from 'react'

type Order = 'asc' | 'desc'

type HeadCell = {
  disablePadding: boolean
  id: keyof Account
  label: string
}

const headCells: readonly HeadCell[] = [
  {
    id: 'accountName',
    disablePadding: true,
    label: 'Account Name',
  },
  {
    id: 'accountNumber',
    disablePadding: false,
    label: 'Account Number',
  },
  {
    id: 'currency',
    disablePadding: false,
    label: 'Currency',
  },
  {
    id: 'amount',
    disablePadding: false,
    label: 'Amount',
  },
]

type AccountsTableProps = {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Account
  ) => void
  order: Order
  orderBy: string
  rowCount: number
}

export const AccountsTableHead = (props: AccountsTableProps) => {
  const { order, orderBy, onRequestSort } = props
  const createSortHandler = useCallback(
    (property: keyof Account) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property)
    },
    [onRequestSort]
  )

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell, index) => (
          <TableCell
            key={headCell.id}
            align={index !== 0 ? 'right' : 'left'}
            padding='normal'
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align='right' padding='normal'>
          View Transactions
        </TableCell>
      </TableRow>
    </TableHead>
  )
}
