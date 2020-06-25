export const getProfile = (token: string) => ({
  type: 'GET_USER_PROFILE',
  token,
})

export const clearProfile = () => ({
  type: 'CLEAR_USER_PROFILE',
})
