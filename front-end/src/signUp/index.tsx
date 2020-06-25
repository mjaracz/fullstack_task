import React, { FC } from 'react'
import { EmailField as TextField, PasswordField } from '../textFields'
import { useStyle } from './styled'
import { useSignUp } from './hooks/useSignUp'
import { ButtonForm } from '../buttons'

export const SignUp: FC = () => {
  const { root } = useStyle()
  const { savePassword, saveEmail, saveRePassword, sendFormData, saveName, saveSurname, emailError, passwordError, rePasswordError, nameError, surnameError } = useSignUp()

  return (
    <div className={root}>
      <TextField label="email" saveEmail={saveEmail} validation={emailError} />
      <TextField label="name" saveEmail={saveName} validation={nameError} />
      <TextField label="surname" saveEmail={saveSurname} validation={surnameError} />
      <PasswordField label="password" savePassword={savePassword} validation={passwordError} />
      <PasswordField label="repeat password" savePassword={saveRePassword} validation={rePasswordError} />
      <ButtonForm label="sing up" sendFormData={sendFormData} />
    </div>
  )
}
