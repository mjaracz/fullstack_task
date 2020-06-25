import React, { FC, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'
import { useSignIn } from './hooks/useSignIn'
import { useStyle } from './styled'
import { EmailField, PasswordField } from '../textFields'

import { ButtonForm } from '../buttons'

export const SignIn: FC = () => {
  const { savePassword, saveEmail, sendSignInReq, passwordError, emailError, loading, jwtToken } = useSignIn()
  const { root, rememberPassLink } = useStyle()

  if (jwtToken) {
    return <Redirect to="profile" />
  }
  return (
    <div className={root}>
      {loading ? (
        <CircularProgress color="primary" size={114} />
      ) : (
        <>
          <EmailField saveEmail={saveEmail} validation={emailError} label="email / username" />
          <PasswordField savePassword={savePassword} validation={passwordError} label="password" />
          <Link className={rememberPassLink} to="/remember-pass">
            I don't remember password
          </Link>
          <ButtonForm label="sign in" sendFormData={sendSignInReq} />
        </>
      )}
    </div>
  )
}
