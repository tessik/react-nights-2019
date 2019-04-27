import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { getCustomerToken } from 'api/customers/customer-token'
import { getCustomer } from 'api/customers/customer'
import { loginCustomer } from 'store/customer/actions'
import * as routes from 'routes'

import { FormWrapper, Label, Input, Error } from './styled'
import Button from 'components/Button'

const SignInForm = props => {
  const [globalError, setGlobalError] = useState('')

  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('You must enter email'),
    password: Yup.string().required('Password is required'),
  })

  const submitForm = async (values, actions) => {
    try {
      actions.setSubmitting(true)
      const { ownerId } = await getCustomerToken({
        username: values.email,
        password: values.password,
      })
      const customer = await getCustomer(ownerId)
      props.loginCustomer(customer)
      props.history.push(routes.ACCOUNT)
    } catch (error) {
      setGlobalError(error.message)
    }
    actions.setSubmitting(false)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}
    >
      {({
        handleChange,
        handleBlur,
        isSubmitting,
        handleSubmit,
        email,
        password,
        errors,
        touched,
      }) => (
        <FormWrapper onSubmit={handleSubmit}>
          {console.log(Boolean(globalError))}
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
          {errors.email && touched.email && <Error>{errors.email}</Error>}

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={password}
            id="password"
            name="password"
          />
          {errors.password && touched.password && (
            <Error>{errors.password}</Error>
          )}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Signing In...' : 'Sign In'}
          </Button>
        </FormWrapper>
      )}
    </Formik>
  )
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = {
  loginCustomer,
}

const SignIn = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm)

export default SignIn
