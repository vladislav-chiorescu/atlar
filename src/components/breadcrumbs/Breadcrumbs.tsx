import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { default as MuiBreadcrumbs } from '@mui/material/Breadcrumbs'
import { useLocation } from 'react-router-dom'

import { upperCaseFirstLetter } from '../../utils'
import { useMemo } from 'react'

export const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = useMemo(
    () => location.pathname.split('/').filter((x) => x),
    [location.pathname]
  )

  return (
    <MuiBreadcrumbs aria-label='breadcrumb'>
      <Link underline='hover' color='inherit' href='/'>
        Home
      </Link>
      {pathnames.map((_, index) => {
        const last = index === pathnames.length - 1
        const to = `/${pathnames.slice(0, index + 1).join('/')}`

        return last ? (
          <Typography color='text.primary' key={to}>
            {upperCaseFirstLetter(pathnames[index])}
          </Typography>
        ) : (
          <Link underline='hover' color='inherit' href={to} key={to}>
            {upperCaseFirstLetter(pathnames[index])}
          </Link>
        )
      })}
    </MuiBreadcrumbs>
  )
}
