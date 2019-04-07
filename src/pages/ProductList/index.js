import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../api/get-products'
import { addProduct } from 'store/cartItems/actions'
import { loadProducts } from 'store/products/actions'

import { ProductsWrap } from './styled'
import Loader from 'components/Loader'
import Product from './components/Product'

class Products extends Component {
  state = {
    isLoading: true,
  }

  async componentDidMount() {
    if (this.props.products.length === 0) {
      const products = await getProducts()
      this.props.loadProducts(products)
    }

    this.setState({
      isLoading: false,
    })
  }

  handleAddToCart = (productId, evt) => {
    evt.preventDefault()
    this.props.addProduct(productId)
  }

  render() {
    return (
      <Fragment>
        {this.state.isLoading && <Loader />}
        <ProductsWrap>
          {this.props.products.map(product => (
            <Product
              key={product.id}
              node={product}
              onAddToCart={this.handleAddToCart}
            />
          ))}
        </ProductsWrap>
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
