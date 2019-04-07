import { getToken } from './get-token'
import config from '../config'

export const getProductById = async id => {
  const token = await getToken()
  const response = await fetch(
    `${config.apiUrl}/api/skus/${id}?include=prices`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  )
  const product = await response.json()

  return {
    ...product.data.attributes,
    id: product.data.id,
    price: product.included[0].attributes.formatted_amount,
  }
}
