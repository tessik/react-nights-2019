import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { logoutCustomer } from 'store/customer/actions'

const LogoutPage = ({ logoutAction, history }) => {
  useEffect(() =>
    logoutAction({
      push: history.push,
    })
  )

  return <span>Logging out</span>
}

const Logout = connect(
  null,
  { logoutAction: logoutCustomer }
)(LogoutPage)

export default Logout
