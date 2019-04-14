import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { createCustomer } from 'api/customers/create-customer'
import { loginCustomer } from 'store/customers/actions'
// import store from 'store'

import { FormWrapper, Label, Input, Error } from './styled'
import Button from 'components/Button'

class Sign extends Component {
  state = {
    globalError: '',
    // logged: store.getState().customers.isLogged,
  }

  initialValues = {
    firstName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('You must enter email'),
    firstName: Yup.string()
      .min(1, 'Too Short!')
      .max(50, 'Too Long!')
      .required('You must enter name'),
    password: Yup.string()
      .min(6, 'Password is too short')
      .max(30, 'Password is too long')
      .matches(/[0-9]/u, 'Password should contain one number')
      .matches(
        /[a-z]/u,
        'Password should contain at least one lowercase letter'
      )
      .required('Password is required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('You must confirm password'),
  })

  handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true)
      await createCustomer(values)
      this.props.loginCustomer(true)
      this.props.history.push('/account')
    } catch (error) {
      this.setState({
        globalError: error.message,
      })
      this.props.loginCustomer(false)
    }
    setSubmitting(false)
  }

  render() {
    const { globalError, isSubmitting } = this.state

    return (
      <Formik
        initialValues={this.initialValues}
        validationSchema={this.validationSchema}
        onSubmit={this.handleSubmit}
        render={props => (
          <FormWrapper onSubmit={props.handleSubmit}>
            {Boolean(globalError) && <div>{globalError}</div>}
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.firstName}
              id="firstName"
              name="firstName"
            />
            {props.errors.firstName && <Error>{props.errors.firstName}</Error>}

            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              id="email"
              name="email"
            />
            {props.errors.email && <Error>{props.errors.email}</Error>}

            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.password}
              id="password"
              name="password"
            />
            {props.errors.password && <Error>{props.errors.password}</Error>}

            <Label htmlFor="passwordConfirm">Password confirm</Label>
            <Input
              type="password"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.passwordConfirm}
              id="passwordConfirm"
              name="passwordConfirm"
            />
            {props.errors.passwordConfirm && (
              <Error>{props.errors.passwordConfirm}</Error>
            )}

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </Button>
          </FormWrapper>
        )}
      />
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
