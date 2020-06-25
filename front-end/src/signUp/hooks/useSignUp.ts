import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ValidationError } from '../../textFields/types'
import { checkEmail, checkNameSurname, checkPassword } from '../../utils.validation'
import { clearSignUp, postSignUp } from '../redux/actions'
import { RootState } from '../../redux/types'

export const useSignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')

  const [emailError, setEmailError] = useState<ValidationError>({ isError: false })
  const [passwordError, setPasswordError] = useState<ValidationError>({ isError: false })
  const [rePasswordError, setRePasswordError] = useState<ValidationError>({ isError: false })
  const [nameError, setNameError] = useState<ValidationError>({ isError: false })
  const [surnameError, setSurnameError] = useState<ValidationError>({ isError: false })
  const dispatch = useDispatch()
  const { signUp } = useSelector((state: RootState) => state)

  useEffect(() => {
    return () => dispatch(clearSignUp())
  }, [dispatch])

  const saveEmail = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value ? setEmail(event.target.value) : null
  }
  const savePassword = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value ? setPassword(event.target.value) : null
  }
  const saveRePassword = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value ? setRePassword(event.target.value) : null
  }
  const saveName = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value ? setName(event.target.value) : null
  }
  const saveSurname = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value ? setSurname(event.target.value) : null
  }

  const sendFormData = async () => {
    if (validateForm()) await dispatch(postSignUp({ username: email, password, name, surname }))
  }
  const validateForm = () => {
    if (password !== rePassword)
      setRePasswordError({
        isError: true,
        message: "repeat password don't match",
      })
    setRePasswordError(checkPassword(rePassword))
    setPasswordError(checkPassword(password))
    setEmailError(checkEmail(email))
    setNameError(checkNameSurname(name))
    setSurnameError(checkNameSurname(surname))
    return checkEmail(email).isError && checkPassword(password).isError && checkPassword(rePassword).isError && checkNameSurname(name).isError && checkNameSurname(surname).isError
  }

  return {
    saveEmail,
    savePassword,
    saveRePassword,
    sendFormData,
    saveName,
    saveSurname,
    setRePassword,
    setPassword,
    setEmail,
    email,
    password,
    rePassword,
    emailError,
    passwordError,
    rePasswordError,
    nameError,
    surnameError,
    signUp,
  }
}
