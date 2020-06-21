import {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/types';
import {getSignIn} from '../redux/actions';
import {ValidationError} from '../../textFields/types';
import {checkEmail} from '../utils.validation/checkEmail';
import {checkPassword} from '../utils.validation/checkPassword';

export const useSignIn = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordError, setPasswordError] = useState<ValidationError>({isError: false});
  const [emailError, setEmailError] = useState<ValidationError>({isError: false});
  const {signIn: {jwtToken, error, loading }} = useSelector((state: RootState) => state)
  const dispatch = useDispatch();

  const saveEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const savePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const sendSignInReq = async () => {
    if (checkBeforeSend()) {
      await dispatch(getSignIn({username: email, password: password}));
    }
  };
  const checkBeforeSend = () => {
    const emailError = checkEmail(email);
    const passwordError = checkPassword(password);
    setEmailError(emailError);
    setPasswordError(passwordError);
    return (!emailError.isError && !passwordError.isError);
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
    jwtToken
  }

}