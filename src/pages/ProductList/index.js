import React, { Component, Fragment } from 'react'
import { getProducts } from '../../api/get-products'

import { ProductsWrap } from './styled'
import Loader from 'components/Loader'
import Product from './components/Product'

class ProductList extends Component {
  state = {
    isLoading: true,
    products: [],
  }

  async fetchProducts() {
    const products = await getProducts()
    this.setState({
      isLoading: false,
      products,
    })
  }

  componentDidMount() {
    this.fetchProducts()
  }

  render() {
    const { isLoading, products } = this.state

    return (
      <Fragment>
        {isLoading && <Loader />}
        {products && (
          <ProductsWrap>
            {products.map(product => (
              <Product key={product.id} node={product} />
            ))}
          </ProductsWrap>
        )}
      </Fragment>
    )
  }
}

export { ProductList }
