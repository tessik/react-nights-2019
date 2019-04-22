import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { addProduct } from 'store/cart/actions'
import { getProductById } from 'api/products/get-product'

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

import { useApi } from 'api/use-api'

const Product = ({ match, add }) => {
  const { data: res, isLoading } = useApi(() =>
    getProductById(match.params.productId)
  )

  if (res && !isLoading) {
    return (
      <Fragment>
        <Content>
          <Info>
            <Title>{res.name}</Title>
            <Description>{res.description}</Description>
            <Price>{res.price.formatted_amount}</Price>
            <Button onClick={() => add(res.id)}>Add to cart</Button>
          </Info>
          <ImgWrapper>
            <Img src={res.image_url} alt={`${res.name} image`} />
          </ImgWrapper>
        </Content>
      </Fragment>
    )
  } else {
    return <Loader />
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = {
  add: addProduct,
}

const ProductDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)

export { ProductDetail }
