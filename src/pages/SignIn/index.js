import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { getCustomerToken } from 'api/customers/customer-token'
import { getCustomer } from 'api/customers/customer'
import { loginCustomer } from 'store/customer/actions'

import { FormWrapper, Label, Input } from './styled'
import Button from 'components/Button'

class Sign extends Component {
  state = {
    globalError: '',
  }

  initialValues = {
    email: '',
    password: '',
  }

  validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('You must enter email'),
    password: Yup.string().required('Password is required'),
  })

  handleSubmit = async ({ email, password }, { setSubmitting }) => {
    try {
      setSubmitting(true)
      const { ownerId } = await getCustomerToken({
        username: email,
        password,
      })
      const customer = await getCustomer(ownerId)
      this.props.loginCustomer(customer)
      this.props.history.push('/account')
    } catch (error) {
      this.setState({
        globalError: error.message,
      })
    }
    setSubmitting(false)
  }

  render() {
    const { globalError } = this.state

    return (
      <Formik
        initialValues={this.initialValues}
        validationSchema={this.validationSchema}
        onSubmit={this.handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          email,
          password,
        }) => (
          <FormWrapper onSubmit={handleSubmit}>
            {Boolean(globalError) && <div>{globalError}</div>}

            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={email}
              id="email"
              name="email"
            />

            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={password}
              id="password"
              name="password"
            />

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </Button>
          </FormWrapper>
        )}
      </Formik>
    )
  }
}

const mapDispatchToProps = {
  loginCustomer,
}

const SignUp = connect(
  null,
  mapDispatchToProps
)(Sign)

export default SignUp
