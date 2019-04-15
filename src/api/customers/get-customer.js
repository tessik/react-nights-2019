import { api } from 'api/api-client'

export const getCustomer = async () => {
  const response = await api(`/api/customers`)

  return {
    customer: response.data[0].attributes,
    customerId: response.data[0].id,
  }
}
