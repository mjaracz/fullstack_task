import { ChangeEvent, useEffect, useState } from 'react'
import { checkEmail } from '../../utils.validation'
import { useDispatch, useSelector } from 'react-redux'
import { clearRememberPass, getRememberPass } from '../redux/actions'
import { RootState } from '../../redux/types'
import { ValidationError } from '../../textFields/types'

export const useRememberPass = () => {
  const [emailError, setEmailError] = useState<ValidationError>({ isError: false })
  const [email, setEmail] = useState('')
  const { rememberPass } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (rememberPass.error) setEmailError({ isError: true, message: rememberPass.error })
    return () => dispatch(clearRememberPass())
  }, [rememberPass.error])

  const saveEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  const sendEmail = async () => {
    setEmailError(checkEmail(email))
    if (!checkEmail(email).isError) {
      await dispatch(getRememberPass(email))
    }
  }
  return {
    saveEmail,
    sendEmail,
    emailError,
    rememberPass,
  }
}
