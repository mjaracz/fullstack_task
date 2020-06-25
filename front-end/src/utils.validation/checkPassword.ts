import { isMatchRegExpPassword } from './isMatchRegExpPassword'
import { ValidationError } from '../textFields/types'

export const checkPassword = (password: string): ValidationError => {
  if (!password) return { isError: true, message: 'password is required' }
  if (!isMatchRegExpPassword(password)) return { isError: true, message: 'password is too short' }
  if (isMatchRegExpPassword(password)) return { isError: false }
}
