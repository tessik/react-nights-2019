import React, { useState } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { loginCustomer } from 'store/customer/actions'
import { AsyncValidationError } from 'utils/errors'

import { FormWrapper, Label, Input, Error } from './styled'
import Button from 'components/Button'

const SignInForm = ({ login, history }) => {
  const [formAsyncError, setFormAsyncError] = useState('')

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
      await login({
        username: values.email,
        password: values.password,
        push: history.push,
      })
    } catch (error) {
      if (error instanceof AsyncValidationError) {
        setFormAsyncError(error.message)
      } else {
        toast.error(
          `There was an error while logging in, please try again later!`
        )
        // This would be nice place to log errors to some external service
      }
    } finally {
      actions.setSubmitting(false)
    }
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
          {Boolean(formAsyncError) && <div>{formAsyncError}</div>}

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
  login: loginCustomer,
}

const SignIn = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm)

export default SignIn
