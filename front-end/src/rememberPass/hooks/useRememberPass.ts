import {ChangeEvent, useState} from 'react';
import {checkEmail} from '../../signIn/utils.validation/checkEmail';

export const useRememberPass = () => {
  const [emailError, setEmailError] = useState({isError: false})
  const [email, setEmail] = useState('');

  const saveEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
  const sendEmail = () => {
    setEmailError(checkEmail(email))
    console.log(emailError);
    if (!checkEmail(email).isError) {
      console.log(checkEmail(email));
    }
  };
  return {
    saveEmail,
    sendEmail,
    emailError,
  }
}