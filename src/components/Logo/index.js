import React from 'react'
import { Wrapper, Logo, Claim } from './styled'
import Link from 'next/link'

const Header = () => (
  <Wrapper>
    <Link href={'/'} passHref>
      <Logo>{`Tesik's shirts`}</Logo>
    </Link>
    <Claim>We sell shirt which all look the same.</Claim>
  </Wrapper>
)

export default Header
