import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  padding: 2rem;
`

const Header = styled.header`
  display: flex;
  border-bottom: 0.1rem solid gainsboro;
  justify-content: space-between;
  padding: 3rem;
`

const HeaderSection = styled.div``

const StyledLink = styled(Link)`
  margin: 0 1rem;
`

export { Wrapper, Header, HeaderSection, StyledLink }
