import styled from 'styled-components'
import { Link } from 'react-router-dom'
import theme from 'common/theme'

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
`

export const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 0 auto;
  padding: 0 20px;
  border-radius: 25px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 24px;
  background: ${theme.color.pink};
`

export const Claim = styled.p`
  font-style: italic;
  font-size: 18px;
`

export const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 0;
`

export const NavItem = styled.li`
  margin-right: 10px;
  list-style: none;
`

export const NavLink = styled(Link)`
  color: ${theme.color.pink};
`
