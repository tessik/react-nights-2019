import React, { Component, Fragment } from 'react'
import { getProducts } from '../../api/get-products'

import ProductListComponent from './components/ProductList'
import Loader from 'components/Loader'

class ProductList extends Component {
  state = {
    isLoading: true,
    products: [],
  }

  async componentDidMount() {
    let products = await getProducts()

    this.setState({
      isLoading: false,
      products,
    })
  }

  render() {
    const { isLoading, products } = this.state

    return (
      <Fragment>
        {isLoading && <Loader />}
        {products && <ProductListComponent products={products} />}
      </Fragment>
    )
  }
}

export { ProductList }
