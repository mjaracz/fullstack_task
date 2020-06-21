import React, {FC} from 'react';
import {Button} from '@material-ui/core';
import {useStyle} from './styled';
import {EmailField} from '../textFields/emailField';
import {useRememberPass} from './hooks/useRememberPass';

export const RememberPass: FC = () => {
  const {sendEmail, saveEmail, emailError} = useRememberPass();
  const {rememberPass, rememberButton, rememberText} = useStyle();
    return (
    <div className={rememberPass}>
      <p className={rememberText}>Provide Email To Remember Password</p>
      <EmailField saveEmail={saveEmail} validation={emailError} />
      <Button className={rememberButton} variant='outlined' color='primary' onClick={sendEmail}>Send Email</Button>
    </div>
  )
}