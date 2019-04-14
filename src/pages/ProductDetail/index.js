import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getProductById } from 'api/products/get-product'
import { addProduct } from 'store/cartItems/actions'

import Loader from 'components/Loader'
import Button from 'components/Button'
import {
  Content,
  Info,
  Img,
  ImgWrapper,
  Title,
  Description,
  Price,
} from './styled'

class Product extends Component {
  state = {
    isLoading: true,
    product: {},
  }

  async fetchProduct() {
    const product = await getProductById(this.props.match.params.productId)

    this.setState({
      isLoading: false,
      product,
    })
  }

  componentDidMount() {
    this.fetchProduct()
  }

  render() {
    const { product } = this.state

    return (
      <Fragment>
        {this.state.isLoading && <Loader />}
        {!this.state.isLoading && product && (
          <Content>
            <Info>
              <Title>{product.name}</Title>
              <Description>{product.description}</Description>
              <Price>{product.price.formatted_amount}</Price>
              <Button onClick={() => this.props.addProduct(product.id)}>
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

const mapDispatchToProps = {
  addProduct,
}

const ProductDetail = connect(
  null,
  mapDispatchToProps
)(Product)

export { ProductDetail }
