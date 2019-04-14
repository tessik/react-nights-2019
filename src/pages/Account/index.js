import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCustomer } from 'api/customers/get-customer'

class AccountComponent extends Component {
  state = {
    id: null,
    customer: {},
  }

  async fetchAccount() {
    const { customer, customerId } = await getCustomer()

    this.setState({
      id: customerId,
      customer: customer,
    })
  }

  componentDidMount() {
    this.fetchAccount()
  }

  render() {
    return (
      <div>
        <h1>Account #{this.state.id}</h1>
        <p>{this.state.customer.email}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = {
  getCustomer,
}

const Account = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountComponent)

export default Account
