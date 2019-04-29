import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'
import { Wrapper, ImgWrap, Img, TitleWrap, Title, Price, Link } from './styled'
import * as routes from 'routes'

const Product = ({ node, onAddToCart }) => (
  <Wrapper data-cy="product">
    <Link to={routes.getProductDetailRoute(node.id)}>
      <ImgWrap>
        <Img src={node.image_url} alt={`${node.name} image`} />
      </ImgWrap>
      <TitleWrap>
        <Title>{node.name}</Title>
      </TitleWrap>
      <Price>{node.price.formatted_amount}</Price>
      <Button
        onClick={e => {
          e.preventDefault()
          onAddToCart(node.id)
        }}
      >
        Add to Cart
      </Button>
    </Link>
  </Wrapper>
)

Product.propTypes = {
  node: PropTypes.object.isRequired,
}

export default Product
