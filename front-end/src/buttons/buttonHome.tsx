import React, { FC } from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { PropsButtonHome } from './types'
import { useStyle } from './styled'

export const ButtonHome: FC<PropsButtonHome> = ({ label, path }) => {
  const { buttonHome } = useStyle()
  return (
    <Button className={buttonHome} variant="contained" color="primary" component={Link} to={path}>
      {label}
    </Button>
  )
}
