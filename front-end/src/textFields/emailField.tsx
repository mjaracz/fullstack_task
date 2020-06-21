import React from 'react';
import {TextField} from '@material-ui/core';
import {useStyle} from './styled';
import {EmailProps} from './types';

export const EmailField = (props: EmailProps) => {
  const {validation: {isError, message}, saveEmail} = props;
  const {textField} = useStyle();
  return isError
    ? <TextField data-testid="textFieldError" className={textField} error helperText={message} onChange={saveEmail} label='email' />
    : <TextField data-testid="textFieldExpected" className={textField} autoComplete='current-username' onChange={saveEmail} label='email' />
}