import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeProduct } from 'store/cartItems/actions'

import { RemoveButton } from './styled'

class CartView extends Component {
  handleRemoveFromCart = (productId, evt) => {
    evt.preventDefault()
    this.props.removeProduct(productId)
  }

  render() {
    return this.props.items.length > 0 ? (
      <ul>
        {this.props.items.map(item => (
          <li key={item.product.id}>
            {item.product.name} - {item.quantity}
            <RemoveButton
              onClick={evt => this.handleRemoveFromCart(item.product.id, evt)}
            >
              Remove
            </RemoveButton>
          </li>
        ))}
      </ul>
    ) : (
      'Your cart is empty'
    )
  }
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
