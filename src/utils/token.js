export const getToken = () => {
  return typeof window !== 'undefined' && window.localStorage.getItem('token')
}

export const setToken = token => {
  typeof window !== 'undefined' && window.localStorage.setItem('token', token)
}

export const removeToken = () => {
  typeof window !== 'undefined' && window.localStorage.removeItem('token')
}
