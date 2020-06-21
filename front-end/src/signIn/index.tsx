import React, {FC, Fragment} from 'react';
import {useSignIn} from './hooks/useSignIn';
import {Button, CircularProgress} from '@material-ui/core';
import {useStyle} from './styled';
import {EmailField} from '../textFields/emailField';
import {PasswordField} from '../textFields/passwordField';
import {Link, Redirect} from 'react-router-dom';

export const SignIn: FC = () => {
  const {
    savePassword,
    saveEmail,
    sendSignInReq,
    passwordError,
    emailError,
    error,
    loading,
    jwtToken
  } = useSignIn();
  const {signInStyled, signInButton, rememberPassLink} = useStyle();

  if (error === 'Unauthorized') {
    return <Redirect to='unauthorized' />
  }
  if (jwtToken) {
    return <Redirect to='profile' />
  }
  return (
    <div className={signInStyled}>
      {(loading)
        ? <CircularProgress color='primary' size={114}/>
        : (
          <Fragment>
            <EmailField saveEmail={saveEmail} validation={emailError}/>
            <PasswordField savePassword={savePassword} validation={passwordError}/>
            <Link className={rememberPassLink} to='/remember'>I don't remember password</Link>
            <Button className={signInButton} variant='outlined' color='primary' onClick={sendSignInReq}>
              Sign In
            </Button>
          </Fragment>
        )
      }
    </div>
  )
}