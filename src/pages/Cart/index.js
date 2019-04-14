import React from 'react'
import { connect } from 'react-redux'
import { removeProduct } from 'store/cartItems/actions'

import Button from 'components/Button'

const CartView = props => {
  return props.items.length > 0 ? (
    <ul>
      {props.items.map(item => (
        <li key={item.product.id}>
          {item.product.name} - {item.quantity}
          <Button onClick={() => props.removeProduct(item.product.id)}>
            Remove
          </Button>
        </li>
      ))}
    </ul>
  ) : (
    <h1>Your cart is empty</h1>
  )
}

const mapStateToProps = state => ({
  items: Object.keys(state.cartItems).map(productId => ({
    quantity: state.cartItems[productId],
    product: state.products.find(p => p.id === productId),
  })),
})

const mapDispatchToProps = {
  removeProduct,
}

const Cart = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartView)

export default Cart
