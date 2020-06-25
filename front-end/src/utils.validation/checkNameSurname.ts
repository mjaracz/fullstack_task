import { isMatchRegExpNameSurname } from './isMatchRegExpName'

export const checkNameSurname = (value: string) => {
  if (!value) return { isError: true, message: 'value is required' }
  if (!isMatchRegExpNameSurname(value)) return { isError: true, message: 'provide value is not correct' }
  return { isError: false }
}
