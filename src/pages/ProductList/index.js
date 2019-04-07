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

  setProductsState(products) {
    this.setState({
      isLoading: false,
      products,
    })
  }

  async componentDidMount() {
    let products = await getProducts()
    this.setProductsState(products)
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
