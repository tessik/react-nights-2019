export const getCustomer = () => {
  const customer =
    typeof window !== 'undefined' && window.localStorage.getItem('customer')

  if (customer) {
    return JSON.parse(customer)
  }
  return {}
}

export const setCustomer = customer => {
  typeof window !== 'undefined' &&
    window.localStorage.setItem('customer', JSON.stringify(customer))
}

export const removeCustomer = () => {
  typeof window !== 'undefined' && window.localStorage.removeItem('customer')
}
