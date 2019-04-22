export const LOGIN = 'customer/LOGIN'

export const loginCustomer = customer => ({
  type: LOGIN,
  payload: { customer },
})

export const LOGOUT = 'customer/LOGOUT'

export const logoutCustomer = () => ({
  type: LOGOUT,
})
