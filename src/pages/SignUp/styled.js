import styled from 'styled-components'
import theme from 'common/theme'

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
`

const Label = styled.label`
  margin-bottom: 0.5rem;
`

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid ${theme.color.gray};
`

const Error = styled.div`
  margin-bottom: 2rem;
  color: ${theme.color.red};
`

export { FormWrapper, Label, Input, Error }
