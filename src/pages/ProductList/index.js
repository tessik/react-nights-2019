import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getProducts } from 'api/products/get-products'
import { addProduct } from 'store/cartItems/actions'
import { loadProducts } from 'store/products/actions'

import { ProductsWrap } from './styled'
import Loader from 'components/Loader'
import Product from './components/Product'

class Products extends Component {
  state = {
    isLoading: true,
  }

  async fetchProducts() {
    const products = await getProducts()
    this.props.loadProducts(products)

    this.setState({
      isLoading: false,
    })
  }

  handleAddToCart = (productId, e) => {
    e.preventDefault()
    this.props.addProduct(productId)
  }

  componentDidMount() {
    this.fetchProducts()
  }

  render() {
    return (
      <Fragment>
        {this.state.isLoading && <Loader />}
        {!this.state.isLoading && (
          <ProductsWrap>
            {this.props.products.map(product => (
              <Product
                key={product.id}
                node={product}
                onAddToCart={e => this.handleAddToCart(product.id, e)}
              />
            ))}
          </ProductsWrap>
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
  }
}

const mapDispatchToProps = {
  loadProducts,
  addProduct,
}

const ProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)

export { ProductList }
