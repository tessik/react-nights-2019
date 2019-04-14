import React from 'react'
import { Wrapper } from './styled'

const Button = ({ children, onClick, type }) => {
  return (
    <Wrapper onClick={onClick} type={type}>
      {children}
    </Wrapper>
  )
}

export default Button
