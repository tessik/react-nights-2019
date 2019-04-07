import React, { Component } from 'react'
import { getProductById } from 'api/get-product'

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
    product: {},
  }

  setProductState(product) {
    this.setState({
      isLoading: false,
      product,
    })
  }

  async componentDidMount() {
    const product = await getProductById(this.props.match.params.productId)
    this.setProductState(product)
  }

  renderProduct(product) {
    return (
      <Content>
        <Info>
          <Title>{product.name}</Title>
          <Description>{product.description}</Description>
          <Price>{product.price}</Price>
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
    const { isLoading, product } = this.state

    return <div>{isLoading ? <Loader /> : this.renderProduct(product)}</div>
  }
}

export { ProductDetail }
