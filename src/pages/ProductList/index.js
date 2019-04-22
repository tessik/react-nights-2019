import React from 'react'
import { connect } from 'react-redux'
import qs from 'qs'
import { useApi } from 'api/use-api'
import { getProducts } from 'api/products/get-products'
import * as cartActions from 'store/cart/actions'

import Product from './components/Product'
import Loader from 'components/Loader'
import { Pagination } from 'components/Pagination'
import { ProductsWrap } from './styled'

const Products = ({ match, location, addProduct }) => {
  const { page } = qs.parse(location.search.substr(1))

  const { data: res, isLoading } = useApi(
    () => getProducts({ page: { number: page } }),
    [page]
  )

  const handleAddToCart = productId => addProduct(productId)

  if (res && !isLoading) {
    return (
      <>
        <Pagination
          pages={res.meta.page_count}
          activePage={match.params.page}
        />
        <ProductsWrap>
          {res.data.map(product => (
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

const mapDispatchToProps = {
  addProduct: cartActions.addProduct,
}

const ProductList = connect(
  null,
  mapDispatchToProps
)(Products)

export { ProductList }
