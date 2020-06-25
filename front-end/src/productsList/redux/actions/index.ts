export const getProducts = (token: string) => ({
  type: 'GET_PRODUCTS',
  token,
})

export const clearProducts = () => ({
  type: 'CLEAR_PRODUCTS',
})
