export const getRefreshToken = () => {
  return (
    typeof window !== 'undefined' &&
    window.localStorage.getItem('refresh-token')
  )
}

export const setRefreshToken = token => {
  typeof window !== 'undefined' &&
    window.localStorage.setItem('refresh-token', token)
}

export const removeRefreshToken = () => {
  typeof window !== 'undefined' &&
    window.localStorage.removeItem('refresh-token')
}
