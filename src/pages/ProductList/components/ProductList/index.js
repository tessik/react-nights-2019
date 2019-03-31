import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { ProductsWrap } from './styled'

const ProductList = ({ products }) => (
  <Fragment>
    <ProductsWrap>
      {products.map(product => (
        <Product key={product.id} node={product} />
      ))}
    </ProductsWrap>
  </Fragment>
)

ProductList.propTypes = {
  products: PropTypes.object.isRequired,
}

export default ProductList
