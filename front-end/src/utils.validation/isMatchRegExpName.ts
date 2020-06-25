export const isMatchRegExpNameSurname = (value: string) => {
  const validatePattern = new RegExp('^\\w{3,}$')
  return validatePattern.test(value)
}
