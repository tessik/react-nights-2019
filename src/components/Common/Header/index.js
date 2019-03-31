import React from 'react'
import { Wrapper, Logo, Claim, Nav, NavItem, NavLink } from './styled'

const Header = () => (
  <Wrapper>
    <Logo to={'/'}>{`Tesik's shirts`}</Logo>
    <Claim>We sell shirt which all look the same.</Claim>
    <Nav>
      <NavItem>
        <NavLink to={'/'}>Products</NavLink>
      </NavItem>

      <NavItem>
        <NavLink to={'/contacts'}>Contacts</NavLink>
      </NavItem>

      <NavItem>
        <NavLink to={'/cart'}>Cart</NavLink>
      </NavItem>
    </Nav>
  </Wrapper>
)

export default Header
