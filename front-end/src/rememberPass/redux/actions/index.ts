export const getRememberPass = (username: string) => ({
  type: 'GET_REMEMBER_PASS',
  username,
})

export const clearRememberPass = () => ({
  type: 'CLEAR_REMEMBER_PASS',
})
