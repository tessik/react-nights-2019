import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getProductById } from 'api/get-product'
import { getProduct } from 'store/detail/actions'
import { addProduct } from 'store/cartItems/actions'

import Loader from 'components/Loader'
import {
  Content,
  Info,
  Img,
  ImgWrapper,
  Title,
  Description,
  Price,
  Button,
} from './styled'

class Product extends Component {
  state = {
    isLoading: true,
  }

  async fetchProduct() {
    if (this.props.product.length === 0) {
      const product = await getProductById(this.props.match.params.productId)
      this.props.getProduct(product)
      this.setState({
        isLoading: false,
      })
    }
  }

  handleAddToCart = (productId, evt) => {
    evt.preventDefault()
    this.props.addProduct(productId)
  }

  componentDidMount() {
    this.fetchProduct()
  }

  render() {
    const { product } = this.props

    return (
      <Fragment>
        {this.state.isLoading && <Loader />}
        {product && (
          <Content>
            <Info>
              <Title>{product.name}</Title>
              <Description>{product.description}</Description>
              <Price>{product.price}</Price>
              <Button onClick={evt => this.handleAddToCart(product.id, evt)}>
                Add to cart
              </Button>
            </Info>
            <ImgWrapper>
              <Img src={product.image_url} alt={`${product.name} image`} />
            </ImgWrapper>
          </Content>
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  product: state.detail,
})

const mapDispatchToProps = {
  getProduct,
  addProduct,
}

const ProductDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)

export { ProductDetail }
