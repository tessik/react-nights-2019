import React from 'react'
import { Wrapper, Logo, Claim } from './styled'

const Header = () => (
  <Wrapper>
    <Logo to={'/'}>{`Tesik's shirts`}</Logo>
    <Claim>We sell shirt which all look the same.</Claim>
  </Wrapper>
)

export default Header
