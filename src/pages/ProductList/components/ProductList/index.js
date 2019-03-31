import React, { Fragment } from 'react'
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

export default ProductList
