import { ChangeEvent, useEffect, useState } from 'react'
import { ValidationError } from '../../textFields/types'
import { checkPassword } from '../../utils.validation'
import { useDispatch, useSelector } from 'react-redux'
import { clearChangePass, putChangePass } from '../redux/actions'
import { RootState } from '../../redux/types'

export const useChangePass = (token: string) => {
  const [pass, setPass] = useState('')
  const [passError, setPassError] = useState<ValidationError>({ isError: false })
  const {
    changePass: { updateUser, loading, error },
    signIn: { jwtToken },
  } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    return () => dispatch(clearChangePass())
  })
  const savePass = (event: ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value)
  }
  const sendChangePass = async () => {
    setPassError(checkPassword(pass))
    if (!checkPassword(pass).isError) await dispatch(putChangePass(token, { password: pass }))
  }
  return {
    savePass,
    sendChangePass,
    passError,
    pass,
    updateUser,
    loading,
    error,
    jwtToken,
  }
}
