import React, { FC } from 'react'
import { Button } from '@material-ui/core'
import { useStyle } from './styled'
import { PropsButtonForm } from './types'

export const ButtonForm: FC<PropsButtonForm> = ({ label, sendFormData }) => {
  const { buttonForm } = useStyle()
  return (
    <Button className={buttonForm} variant="outlined" color="primary" onClick={sendFormData}>
      {label}
    </Button>
  )
}
