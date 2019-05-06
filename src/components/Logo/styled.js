import styled from 'styled-components'
import theme from 'common/theme'

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 3rem 0;
`

export const Logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;
  border-radius: 2.5rem;
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 2.4rem;
  background: ${theme.color.pink};
`

export const Claim = styled.p`
  font-style: italic;
  font-size: 1.8rem;
`
