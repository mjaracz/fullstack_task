import React, { FC } from 'react'
import { TextField } from '@material-ui/core'
import { useStyle } from './styled'
import { PasswordProps } from './types'

export const PasswordField: FC<PasswordProps> = (props) => {
  const {
    validation: { isError, message },
    savePassword,
    label,
  } = props
  const { textField } = useStyle()
  return <TextField data-testid="textField" className={textField} error={isError} helperText={message} type="password" label={label} onChange={savePassword} />
}
