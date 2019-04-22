import React from 'react'
import { connect } from 'react-redux'

import { H1 } from '../../components/Typography'

const AccountPage = ({ customer }) => (
  <H1>Welcome {customer.attributes.metadata.firstName}</H1>
)

const mapStateToProps = state => ({
  customer: state.customer,
})

const Account = connect(mapStateToProps)(AccountPage)

export default Account
