export const GET_PRODUCT = 'product/LOAD'

export const getProduct = product => ({
  type: GET_PRODUCT,
  payload: product,
})
