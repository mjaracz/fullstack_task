import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/types'
import { postSignIn } from '../redux/actions'
import { ValidationError } from '../../textFields/types'
import { checkEmail, checkPassword } from '../../utils.validation'

export const useSignIn = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [passwordError, setPasswordError] = useState<ValidationError>({
    isError: false,
  })
  const [emailError, setEmailError] = useState<ValidationError>({
    isError: false,
  })
  const {
    signIn: { jwtToken, error, loading },
  } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (error === 'Unauthorized') {
      setEmailError({ isError: true, message: 'email not found' })
      setPasswordError({ isError: true, message: 'or incorrect password try again' })
    }
  }, [error])

  const saveEmail = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value ? setEmail(event.target.value) : null
  }
  const savePassword = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value ? setPassword(event.target.value) : null
  }

  const sendSignInReq = async () => {
    if (checkBeforeSend()) {
      await dispatch(postSignIn({ username: email, password }))
    }
  }
  const checkBeforeSend = () => {
    setEmailError(checkEmail(email))
    setPasswordError(checkPassword(password))
    return !checkEmail(email).isError && !checkPassword(password).isError
  }
  return {
    saveEmail,
    savePassword,
    sendSignInReq,
    passwordError,
    emailError,
    password,
    email,
    setEmailError,
    setPasswordError,
    error,
    loading,
    jwtToken,
  }
}
