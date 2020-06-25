import React, { FC } from 'react'
import { TextField } from '@material-ui/core'
import { useStyle } from './styled'
import { EmailProps } from './types'

export const EmailField: FC<EmailProps> = ({ validation: { isError, message }, saveEmail, label }) => {
  const { textField } = useStyle()
  return <TextField data-testid="textField" className={textField} error={isError} helperText={message} onChange={saveEmail} label={label} />
}
