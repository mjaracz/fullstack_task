import { ChangeEvent } from 'react'

export type onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => void

export interface ValidationError {
  isError: boolean
  message?: string
}

export interface EmailProps {
  saveEmail: onChangeCallback
  validation: ValidationError
  label: string
}

export interface PasswordProps {
  savePassword: onChangeCallback
  validation: ValidationError
  label: string
}
