import React from 'react'
import { connect } from 'react-redux'
// import qs from 'qs'
// import { useApi } from 'api/use-api'
import { getProducts } from 'api/products/get-products'
import * as cartActions from 'store/cart/actions'

import Product from './components/Product'
import Loader from 'components/Loader'
import { Pagination } from 'components/Pagination'
import { ProductsWrap } from './styled'

const Products = ({ addProduct, res, isLoading }) => {
  const handleAddToCart = productId => addProduct(productId)

  if (res && !isLoading) {
    return (
      <>
        <Pagination pages={1} activePage={1} />
        <ProductsWrap>
          {res.map(product => (
            <Product
              key={product.id}
              node={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </ProductsWrap>
      </>
    )
  } else {
    return <Loader />
  }
}

const getInitialProps = async () => {
  // const { page } = (location !== typeof 'undefined') && qs.parse(location.search.substr(1))

  const { data: res, isLoading } = await getProducts({ page: { number: 1 } })

  return { res, isLoading }
}

const mapDispatchToProps = {
  addProduct: cartActions.addProduct,
}

const ProductList = connect(
  null,
  mapDispatchToProps
)(Products)

ProductList.getInitialProps = getInitialProps

export { ProductList }
