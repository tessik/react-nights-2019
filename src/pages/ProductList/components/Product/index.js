import React from 'react'
import PropTypes from 'prop-types'
import {
  Wrapper,
  ImgWrap,
  Img,
  TitleWrap,
  Title,
  Price,
  Link,
  AddButton,
} from './styled'

const Product = ({ node, onAddToCart }) => (
  <Wrapper>
    <Link to={`product/${node.id}`}>
      <ImgWrap>
        <Img src={node.image_url} alt={`${node.name} image`} />
      </ImgWrap>
      <TitleWrap>
        <Title>{node.name}</Title>
      </TitleWrap>
      <Price>{node.price.formatted_amount}</Price>
      <AddButton onClick={evt => onAddToCart(node.id, evt)}>
        Add to Cart
      </AddButton>
    </Link>
  </Wrapper>
)

Product.propTypes = {
  node: PropTypes.object.isRequired,
}

export default Product
