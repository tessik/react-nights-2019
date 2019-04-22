import React from 'react'
import { connect } from 'react-redux'

import * as cartActions from 'store/cart/actions'
import CartItem from './CartItem'

const CartView = ({ items, removeProduct }) => {
  if (items && items.length > 0) {
    return (
      <ul>
        {items.map(item => (
          <CartItem
            key={item.product.id}
            productId={item.product.id}
            quantity={item.quantity}
            removeProduct={removeProduct}
          />
        ))}
      </ul>
    )
  }
  return <h1>Your cart is empty</h1>
}

const mapStateToProps = state => ({
  items: Object.keys(state.cartItems).map(productId => ({
    quantity: state.cartItems[productId],
    product: { id: productId },
  })),
})

const mapDispatchToProps = {
  removeProduct: cartActions.removeProduct,
}

const Cart = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartView)

export default Cart
