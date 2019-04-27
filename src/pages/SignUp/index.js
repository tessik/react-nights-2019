import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { createCustomer } from 'api/customers/create-customer'
import { getCustomer } from 'api/customers/customer'
import { loginCustomer } from 'store/customer/actions'
import * as routes from 'routes'

import { FormWrapper, Label, Input, Error } from './styled'
import Button from 'components/Button'

const SignUpForm = props => {
  const [globalError, setGlobalError] = useState('')

  const initialValues = {
    firstName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  const validationSchema = Yup.object().shape({
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

  const submitForm = async (values, actions) => {
    try {
      actions.setSubmitting(true)
      const { ownerId } = await createCustomer(values)
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
        handleSubmit,
        isSubmitting,
        values,
        errors,
        touched,
      }) => (
        <FormWrapper onSubmit={handleSubmit}>
          {Boolean(globalError) && <div>{globalError}</div>}
          <Label htmlFor="firstName">First Name</Label>
          <Input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
            id="firstName"
            name="firstName"
          />
          {errors.firstName && touched.firstName && (
            <Error>{errors.firstName}</Error>
          )}

          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            id="email"
            name="email"
          />
          {errors.email && touched.email && <Error>{errors.email}</Error>}

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            id="password"
            name="password"
          />
          {errors.password && touched.password && (
            <Error>{errors.password}</Error>
          )}

          <Label htmlFor="passwordConfirm">Password confirm</Label>
          <Input
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.passwordConfirm}
            id="passwordConfirm"
            name="passwordConfirm"
          />
          {errors.passwordConfirm && touched.passwordConfirm && (
            <Error>{errors.passwordConfirm}</Error>
          )}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
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
  loginCustomer: loginCustomer,
}

const SignUp = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm)

export default SignUp
