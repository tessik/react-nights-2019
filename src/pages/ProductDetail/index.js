import React, { Component } from 'react'
import { getProducts } from 'api/get-products'

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

class ProductDetail extends Component {
  state = {
    isLoading: true,
    currentProduct: {},
  }

  async componentDidMount() {
    const products = await getProducts()
    const id = this.props.match.params.productId
    const currentProduct = products.find(item => {
      return item.id === id
    })

    this.setState({
      isLoading: false,
      currentProduct,
    })
  }

  renderProduct(product) {
    return (
      <Content>
        <Info>
          <Title>{product.name}</Title>
          <Description>{product.description}</Description>
          <Price>{product.price.formatted_amount}</Price>
          {/* TODO: add behavior */}
          <Button onClick={() => alert(`I'm dummy, yet`)}>Add to cart</Button>
        </Info>
        <ImgWrapper>
          <Img src={product.image_url} alt={`${product.name} image`} />
        </ImgWrapper>
      </Content>
    )
  }

  render() {
    const { isLoading, currentProduct } = this.state

    return (
      <div>{isLoading ? <Loader /> : this.renderProduct(currentProduct)}</div>
    )
  }
}

export { ProductDetail }
