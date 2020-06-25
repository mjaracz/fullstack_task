export const putChangePass = (token: string, body: { password: string }) => ({
  type: 'PUT_CHANGE_PASS',
  token,
  body,
})

export const clearChangePass = () => ({
  type: 'CLEAR_CHANGE_PASS',
})
