export const getRefreshToken = () => {
  return window.localStorage.getItem('refresh-token')
}

export const setRefreshToken = token => {
  window.localStorage.setItem('refresh-token', token)
}

export const removeRefreshToken = () => {
  window.localStorage.removeItem('refresh-token')
}
